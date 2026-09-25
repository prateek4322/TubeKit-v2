import dotenv from "dotenv";

dotenv.config();

const BASE_URL = "https://www.googleapis.com/youtube/v3";

/*
|--------------------------------------------------------------------------
| Get API Key
|--------------------------------------------------------------------------
*/

function getApiKey() {
  const key = process.env.YOUTUBE_API_KEY;

  if (!key) {
    throw new Error("YOUTUBE_API_KEY is missing");
  }

  return key;
}

/*
|--------------------------------------------------------------------------
| Fetch JSON
|--------------------------------------------------------------------------
*/

async function fetchJson(url) {
  console.log("\nCalling URL:");
  console.log(url);

  const response = await fetch(url);
  const data = await response.json();

  console.log("Status:", response.status);

  if (!response.ok) {
    throw new Error(
      data.error?.message || "YouTube API Error"
    );
  }

  return data;
}

/*
|--------------------------------------------------------------------------
| Extract Video ID
|--------------------------------------------------------------------------
*/

export function extractVideoId(input) {
  const value = String(input || "").trim();

  if (!value) {
    throw new Error("YouTube URL is required");
  }

  let url;

  try {
    const normalizedValue =
      /^https?:\/\//i.test(value)
        ? value
        : `https://${value}`;

    url = new URL(normalizedValue);
  } catch {
    throw new Error("Invalid YouTube URL");
  }

  const hostname = url.hostname
    .toLowerCase()
    .replace(/^www\./, "")
    .replace(/^m\./, "");

  let videoId = null;

  if (
    hostname === "youtube.com" ||
    hostname === "youtube-nocookie.com"
  ) {
    if (url.pathname === "/watch") {
      videoId = url.searchParams.get("v");
    }

    if (
      !videoId &&
      url.pathname.startsWith("/shorts/")
    ) {
      videoId = url.pathname
        .split("/")
        .filter(Boolean)[1];
    }

    if (
      !videoId &&
      url.pathname.startsWith("/embed/")
    ) {
      videoId = url.pathname
        .split("/")
        .filter(Boolean)[1];
    }

    if (
      !videoId &&
      url.pathname.startsWith("/live/")
    ) {
      videoId = url.pathname
        .split("/")
        .filter(Boolean)[1];
    }
  }

  if (hostname === "youtu.be") {
    videoId = url.pathname
      .split("/")
      .filter(Boolean)[0];
  }

  if (!videoId) {
    throw new Error("Invalid YouTube URL");
  }

  if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) {
    throw new Error("Invalid YouTube video ID");
  }

  return videoId;
}


/*
|--------------------------------------------------------------------------
| Resolve Channel ID
|--------------------------------------------------------------------------
*/

export async function resolveChannelId(input) {
  const API_KEY = getApiKey();

  let value = String(input || "").trim();

  if (!value) {
    throw new Error("YouTube channel is required");
  }

  value = value.replace(/\/$/, "");

  if (/^UC[\w-]{22}$/.test(value)) {
    return value;
  }

  if (value.includes("/channel/")) {
    return value
      .split("/channel/")[1]
      .split("/")[0];
  }

  if (value.includes("@")) {
    const handle =
      value.match(/@([^/?]+)/)?.[1];

    if (!handle) {
      throw new Error("Invalid Handle");
    }

    const data = await fetchJson(
      `${BASE_URL}/channels?part=id&forHandle=${encodeURIComponent(
        handle
      )}&key=${API_KEY}`
    );

    if (data.items?.length) {
      return data.items[0].id;
    }

    const search = await fetchJson(
      `${BASE_URL}/search?part=snippet&type=channel&q=${encodeURIComponent(
        handle
      )}&maxResults=1&key=${API_KEY}`
    );

    if (!search.items?.length) {
      throw new Error("Channel not found");
    }

    return search.items[0].snippet.channelId;
  }

  try {
    const videoId = extractVideoId(value);

    const video = await fetchJson(
      `${BASE_URL}/videos?part=snippet&id=${encodeURIComponent(
        videoId
      )}&key=${API_KEY}`
    );

    if (!video.items?.length) {
      throw new Error("Video not found");
    }

    return video.items[0].snippet.channelId;
  } catch (error) {
    if (error.message !== "Invalid YouTube URL") {
      throw error;
    }
  }

  const search = await fetchJson(
    `${BASE_URL}/search?part=snippet&type=channel&q=${encodeURIComponent(
      value
    )}&maxResults=1&key=${API_KEY}`
  );

  if (!search.items?.length) {
    throw new Error("Channel not found");
  }

  return search.items[0].snippet.channelId;
}

/*
|--------------------------------------------------------------------------
| Get Channel Info
|--------------------------------------------------------------------------
*/

export async function getChannelInfo(input) {
  const API_KEY = getApiKey();

  const channelId = await resolveChannelId(input);

  const data = await fetchJson(
    `${BASE_URL}/channels?part=snippet,statistics,brandingSettings,contentDetails&id=${encodeURIComponent(
      channelId
    )}&key=${API_KEY}`
  );

  if (!data.items?.length) {
    throw new Error("Channel not found");
  }

  return data.items[0];
}


/*
|--------------------------------------------------------------------------
| Get Video Info
|--------------------------------------------------------------------------
*/

export async function getVideoInfo(input) {
  const API_KEY = getApiKey();
  const videoId = extractVideoId(input);

  const data = await fetchJson(
    `${BASE_URL}/videos?part=snippet,statistics,contentDetails,status,topicDetails&id=${encodeURIComponent(
      videoId
    )}&key=${API_KEY}`
  );

  if (!data.items?.length) {
    throw new Error("Video not found or unavailable");
  }

  return data.items[0];
}

/*
|--------------------------------------------------------------------------
| Get YouTube Video Tags
|--------------------------------------------------------------------------
*/

export async function getYouTubeVideoTags(input) {
  const video = await getVideoInfo(input);
  const snippet = video.snippet || {};

  const tags = Array.isArray(snippet.tags)
    ? snippet.tags
    : [];

  return {
    videoId: video.id,
    videoUrl:
      `https://www.youtube.com/watch?v=${video.id}`,
    title: snippet.title || "",
    channelTitle: snippet.channelTitle || "",
    channelId: snippet.channelId || "",
    tags,
  };
}

/*
|--------------------------------------------------------------------------
| Get YouTube Video Hashtags
|--------------------------------------------------------------------------
*/

export async function getYouTubeVideoHashtags(input) {
  const video = await getVideoInfo(input);
  const snippet = video.snippet || {};

  const text = [
    snippet.title || "",
    snippet.description || "",
  ].join(" ");

  const hashtags = [
    ...new Set(
      (text.match(/#[A-Za-z0-9_]+/g) || [])
        .map((tag) => tag.trim())
    ),
  ];

  return {
    videoId: video.id,
    videoUrl:
      `https://www.youtube.com/watch?v=${video.id}`,
    title: snippet.title || "",
    channelTitle: snippet.channelTitle || "",
    channelId: snippet.channelId || "",
    hashtags,
  };
}

/*
|--------------------------------------------------------------------------
| Get YouTube Video Description
|--------------------------------------------------------------------------
*/

export async function getYouTubeVideoDescription(input) {
  const video = await getVideoInfo(input);
  const snippet = video.snippet || {};

  return {
    videoId: video.id,
    videoUrl:
      `https://www.youtube.com/watch?v=${video.id}`,
    title: snippet.title || "",
    channelTitle: snippet.channelTitle || "",
    channelId: snippet.channelId || "",
    description: snippet.description || "",
  };
}


/*
|--------------------------------------------------------------------------
| Shadowban Detector
|--------------------------------------------------------------------------
|
| This is a public-data signal checker.
| It cannot prove an internal YouTube shadowban.
|--------------------------------------------------------------------------
*/

export async function checkYouTubeShadowban(input) {
  const channel = await getChannelInfo(input);

  const statistics = channel.statistics || {};
  const snippet = channel.snippet || {};

  const subscribers =
    Number(statistics.subscriberCount || 0);

  const views =
    Number(statistics.viewCount || 0);

  const videos =
    Number(statistics.videoCount || 0);

  const checks = [];

  checks.push({
    name: "Channel is publicly accessible",
    passed: true,
    detail: "Channel information is available through YouTube's public API.",
  });

  checks.push({
    name: "Channel has public videos",
    passed: videos > 0,
    detail:
      videos > 0
        ? `${videos.toLocaleString()} public channel videos are reported.`
        : "No channel videos are reported by the public API.",
  });

  checks.push({
    name: "Channel has public views",
    passed: views > 0,
    detail:
      views > 0
        ? `${views.toLocaleString()} total views are reported.`
        : "No public channel views are reported.",
  });

  const warnings = checks.filter(
    (check) => !check.passed
  ).length;

  let status = "No obvious public-data warning";
  let score = 90;

  if (warnings === 1) {
    status = "Some public-data signals need review";
    score = 65;
  }

  if (warnings >= 2) {
    status = "Multiple public-data signals need review";
    score = 40;
  }

  return {
    channelId: channel.id,
    channelTitle: snippet.title || "",
    channelUrl:
      `https://www.youtube.com/channel/${channel.id}`,
    status,
    score,
    message:
      "This tool checks public signals only. It cannot confirm or rule out an internal YouTube shadowban.",
    checks,
  };
}

/*
|--------------------------------------------------------------------------
| Analyze YouTube Channel
|--------------------------------------------------------------------------
*/

export async function analyzeYouTubeChannel(input) {
  const channel = await getChannelInfo(input);

  const snippet = channel.snippet || {};
  const statistics = channel.statistics || {};
  const branding = channel.brandingSettings || {};

  const subscribers =
    Number(statistics.subscriberCount || 0);

  const views =
    Number(statistics.viewCount || 0);

  const videos =
    Number(statistics.videoCount || 0);

  const averageViews =
    videos > 0
      ? Math.round(views / videos)
      : 0;

  const description =
    snippet.description || "";

  const checks = [
    {
      name: "Channel description",
      passed: description.length >= 100,
      detail:
        description.length >= 100
          ? "Channel description has useful public content."
          : "Consider adding a clearer and more detailed channel description.",
    },
    {
      name: "Channel activity",
      passed: videos > 0,
      detail:
        videos > 0
          ? "The channel has public videos."
          : "No public videos were reported.",
    },
    {
      name: "Channel views",
      passed: views > 0,
      detail:
        views > 0
          ? "Public channel view data is available."
          : "Public channel view data is unavailable.",
    },
    {
      name: "Channel audience base",
      passed: subscribers > 0,
      detail:
        subscribers > 0
          ? "The channel has public subscriber data."
          : "Subscriber count is hidden or unavailable.",
    },
  ];

  const passedChecks =
    checks.filter((check) => check.passed).length;

  const score = Math.round(
    (passedChecks / checks.length) * 100
  );

  return {
    channel: {
      id: channel.id,
      name: snippet.title || "",
      handle: snippet.customUrl || "",
      description,
      thumbnail:
        snippet.thumbnails?.high?.url ||
        snippet.thumbnails?.default?.url ||
        "",
      banner:
        branding.image?.bannerExternalUrl || "",
      country: snippet.country || "",
      publishedAt: snippet.publishedAt || "",
      customUrl: snippet.customUrl || "",
      url:
        `https://www.youtube.com/channel/${channel.id}`,
    },

    channelInfo: {
      id: channel.id,
      title: snippet.title || "",
      description,
    },

    statistics: {
      subscribers,
      views,
      videos,
      averageViews,
    },

    branding: {
      hasBanner:
        Boolean(branding.image?.bannerExternalUrl),
      keywords:
        branding.channel?.keywords || "",
    },

    seo: {
      score,
      descriptionLength: description.length,
      hasDescription: description.length > 0,
    },

    content: {
      totalVideos: videos,
      totalViews: views,
      averageViews,
    },

    checks,

    recommendations: checks
      .filter((check) => !check.passed)
      .map((check) => check.detail),

  };
}


/*
|--------------------------------------------------------------------------
| Analyze Video SEO
|--------------------------------------------------------------------------
*/

export async function analyzeVideoSEO(input) {
  const video = await getVideoInfo(input);

  const snippet = video.snippet || {};
  const statistics = video.statistics || {};
  const contentDetails =
    video.contentDetails || {};

  const title = snippet.title || "";
  const description =
    snippet.description || "";

  const tags = Array.isArray(snippet.tags)
    ? snippet.tags
    : [];

  const titleLength = title.length;
  const descriptionLength =
    description.length;

  const titleScore =
    titleLength >= 30 && titleLength <= 70
      ? 100
      : titleLength > 0
        ? 65
        : 0;

  const descriptionScore =
    descriptionLength >= 200
      ? 100
      : descriptionLength > 0
        ? 60
        : 0;

  const tagsScore =
    tags.length >= 5
      ? 100
      : tags.length > 0
        ? 60
        : 0;

  const overallScore = Math.round(
    titleScore * 0.35 +
    descriptionScore * 0.35 +
    tagsScore * 0.30
  );

  const checks = [
    {
      name: "Title",
      passed:
        titleLength >= 30 &&
        titleLength <= 70,
      detail:
        titleLength >= 30 &&
        titleLength <= 70
          ? "Title length is within a practical range."
          : "Review title length and clarity.",
    },
    {
      name: "Description",
      passed:
        descriptionLength >= 200,
      detail:
        descriptionLength >= 200
          ? "Description contains substantial public text."
          : "Consider adding more useful context to the description.",
    },
    {
      name: "Tags",
      passed:
        tags.length >= 5,
      detail:
        tags.length >= 5
          ? "The video has multiple public tags."
          : "The video has few or no public tags.",
    },
  ];

  const recommendations = checks
    .filter((check) => !check.passed)
    .map((check) => check.detail);

  return {
    videoId: video.id,

    videoInfo: {
      videoId: video.id,
      videoUrl:
        `https://www.youtube.com/watch?v=${video.id}`,
      title,
      channelTitle:
        snippet.channelTitle || "",
      channelId:
        snippet.channelId || "",
      publishedAt:
        snippet.publishedAt || "",
      categoryId:
        snippet.categoryId || "",
    },

    score: overallScore,

    grade:
      overallScore >= 90
        ? "A"
        : overallScore >= 80
          ? "B"
          : overallScore >= 70
            ? "C"
            : overallScore >= 60
              ? "D"
              : "E",

    title: {
      value: title,
      length: titleLength,
      score: titleScore,
    },

    description: {
      value: description,
      length: descriptionLength,
      score: descriptionScore,
    },

    tags: {
      items: tags,
      count: tags.length,
      score: tagsScore,
    },

    keywords: tags,

    channel: {
      id: snippet.channelId || "",
      title: snippet.channelTitle || "",
    },

    metadata: {
      views: Number(statistics.viewCount || 0),
      likes: Number(statistics.likeCount || 0),
      comments: Number(
        statistics.commentCount || 0
      ),
      duration:
        contentDetails.duration || "",
    },

    checks,
    recommendations,
  };
}


/*
|--------------------------------------------------------------------------
| Get YouTube Comments
|--------------------------------------------------------------------------
*/

export async function getYouTubeComments(input) {
  const API_KEY = getApiKey();
  const videoId = extractVideoId(input);

  const video = await getVideoInfo(input);

  const comments = [];
  let pageToken = "";

  const maxPages = 5;

  for (
    let page = 0;
    page < maxPages;
    page++
  ) {
    const tokenParam = pageToken
      ? `&pageToken=${encodeURIComponent(pageToken)}`
      : "";

    const data = await fetchJson(
      `${BASE_URL}/commentThreads?part=snippet,replies&videoId=${encodeURIComponent(
        videoId
      )}&maxResults=100&textFormat=plainText&key=${API_KEY}${tokenParam}`
    );

    for (const item of data.items || []) {
      const top =
        item.snippet?.topLevelComment
          ?.snippet || {};

      const replies =
        item.replies?.comments || [];

      comments.push({
        id:
          item.id || "",
        author:
          top.authorDisplayName || "",
        authorProfileImageUrl:
          top.authorProfileImageUrl || "",
        text:
          top.textDisplay || "",
        likes:
          Number(top.likeCount || 0),
        publishedAt:
          top.publishedAt || "",
        updatedAt:
          top.updatedAt || "",
        replyCount:
          Number(
            item.snippet?.totalReplyCount || 0
          ),
        replies: replies.map((reply) => ({
          id: reply.id || "",
          author:
            reply.snippet?.authorDisplayName || "",
          authorProfileImageUrl:
            reply.snippet?.authorProfileImageUrl ||
            "",
          text:
            reply.snippet?.textDisplay || "",
          likes:
            Number(
              reply.snippet?.likeCount || 0
            ),
          publishedAt:
            reply.snippet?.publishedAt || "",
        })),
      });
    }

    pageToken = data.nextPageToken || "";

    if (!pageToken) {
      break;
    }
  }

  const keywordMap = new Map();

  for (const comment of comments) {
    const words = comment.text
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .split(/\s+/)
      .filter(
        (word) =>
          word.length >= 4 &&
          ![
            "this",
            "that",
            "with",
            "have",
            "your",
            "from",
            "they",
            "what",
            "when",
            "where",
            "video",
            "youtube",
          ].includes(word)
      );

    for (const word of words) {
      keywordMap.set(
        word,
        (keywordMap.get(word) || 0) + 1
      );
    }
  }

  const topKeywords = [...keywordMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([keyword, count]) => ({
      keyword,
      count,
    }));

  const totalReplies = comments.reduce(
    (sum, comment) =>
      sum + comment.replyCount,
    0
  );

  const totalLikes = comments.reduce(
    (sum, comment) =>
      sum + comment.likes,
    0
  );

  return {
    videoInfo: {
      videoId: video.id,
      videoUrl:
        `https://www.youtube.com/watch?v=${video.id}`,
      title:
        video.snippet?.title || "",
      channelTitle:
        video.snippet?.channelTitle || "",
      channelId:
        video.snippet?.channelId || "",
    },

    totalComments: comments.length,
    totalReplies,
    totalLikes,

    comments,

    topKeywords,

    sentiment: {
      status: "Not available",
      message:
        "Comment text is provided for manual analysis. No sentiment model is applied by this service.",
    },

    recommendations: [
      topKeywords.length
        ? "Review recurring comment keywords to identify audience interests."
        : "Collect more comments before drawing conclusions about audience topics.",
      "Use recurring questions and feedback as ideas for future videos.",
      "Review highly liked comments for audience pain points and content opportunities.",
    ],
  };
}


/*
|--------------------------------------------------------------------------
| Thumbnail URLs
|--------------------------------------------------------------------------
*/

export function getThumbnailUrls(videoId) {
  if (!videoId) {
    throw new Error("Video ID is required");
  }

  return {
    max:
      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    hq:
      `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    mq:
      `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    sd:
      `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
    default:
      `https://img.youtube.com/vi/${videoId}/default.jpg`,
  };
}
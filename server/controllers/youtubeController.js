import {
  getChannelInfo,
  getYouTubeVideoTags,
  getYouTubeVideoHashtags,
  getYouTubeVideoDescription,
  checkYouTubeShadowban,
  analyzeYouTubeChannel as analyzeYouTubeChannelService,
  analyzeVideoSEO,
  getYouTubeComments,
} from "../services/youtubeService.js";


/*
|--------------------------------------------------------------------------
| Channel ID Finder
|--------------------------------------------------------------------------
*/

export const findChannelId = async (req, res) => {
  try {
    const input =
      req.body?.channel ||
      req.body?.url ||
      req.body?.query ||
      req.query?.channel ||
      req.query?.url;

    if (!input) {
      return res.status(400).json({
        success: false,
        message:
          "YouTube channel URL, ID, username, or handle is required.",
      });
    }

    const info = await getChannelInfo(input);

    return res.status(200).json({
      success: true,
      data: {
        id: info.id,
        channelId: info.id,
        name: info.snippet?.title || "",
        title: info.snippet?.title || "",
        description: info.snippet?.description || "",
        customUrl: info.snippet?.customUrl || "",
        publishedAt: info.snippet?.publishedAt || "",
        country: info.snippet?.country || "",
        thumbnails: info.snippet?.thumbnails || {},
        profileImage:
          info.snippet?.thumbnails?.high?.url ||
          info.snippet?.thumbnails?.medium?.url ||
          info.snippet?.thumbnails?.default?.url ||
          "",
        statistics: info.statistics || {},
        subscribers: Number(info.statistics?.subscriberCount || 0),
        views: Number(info.statistics?.viewCount || 0),
        videos: Number(info.statistics?.videoCount || 0),
        url: `https://www.youtube.com/channel/${info.id}`,
      },
    });
  } catch (error) {
    console.error("Channel ID Finder Error:", error);

    return res.status(404).json({
      success: false,
      message:
        error.message ||
        "Unable to find the YouTube channel.",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Monetization Analyzer
|--------------------------------------------------------------------------
*/

export const monetizationAnalyzer = async (req, res) => {
  try {
    const { channel } = req.body;

    if (!channel) {
      return res.status(400).json({
        success: false,
        message: "YouTube channel is required.",
      });
    }

    const info = await getChannelInfo(channel);

    const subscribers = Number(
      info.statistics?.subscriberCount || 0
    );

    const views = Number(
      info.statistics?.viewCount || 0
    );

    const videos = Number(
      info.statistics?.videoCount || 0
    );

    const publishedDate = new Date(
      info.snippet?.publishedAt
    );

    const today = new Date();

    const channelAge = Number.isNaN(
      publishedDate.getTime()
    )
      ? 0
      : Math.floor(
          (today - publishedDate) /
            (1000 * 60 * 60 * 24 * 365)
        );

    let status = "Not Eligible";
    let confidence = 20;

    if (subscribers >= 1000) {
      status = "Possibly Monetized";
      confidence = 70;
    }

    if (
      subscribers >= 100000 &&
      views >= 1000000 &&
      videos >= 20
    ) {
      status = "Very Likely Monetized";
      confidence = 95;
    }

    const subscriberProgress = Math.min(
      100,
      Math.round(
        (subscribers / 1000) * 100
      )
    );

    const checks = [
      {
        name: "1,000 subscribers",
        passed: subscribers >= 1000,
        current: subscribers,
        target: 1000,
      },
      {
        name: "4,000 public watch hours",
        passed: false,
        current: null,
        target: 4000,
        available: false,
        detail:
          "Public channel statistics do not provide qualifying YPP watch hours.",
      },
      {
        name: "10 million public Shorts views",
        passed: false,
        current: null,
        target: 10000000,
        available: false,
        detail:
          "Public channel statistics do not provide qualifying Shorts views for the required period.",
      },
    ];

    const recommendations = [];

    if (subscribers < 1000) {
      recommendations.push(
        `Reach ${(
          1000 - subscribers
        ).toLocaleString()} more subscribers to reach the main 1,000-subscriber threshold.`
      );
    }

    recommendations.push(
      "Verify qualifying public watch hours or Shorts views in YouTube Studio."
    );

    recommendations.push(
      "Review YouTube monetization policies before applying."
    );

    res.json({
      success: true,

      channel: {
        id: info.id,
        name: info.snippet?.title || "",
        thumbnail:
          info.snippet?.thumbnails?.high?.url ||
          info.snippet?.thumbnails?.default?.url ||
          "",
        subscribers,
        views,
        videos,
        publishedAt:
          info.snippet?.publishedAt || "",
        age: channelAge,
        description:
          info.snippet?.description || "",
        country:
          info.snippet?.country || "",
        customUrl:
          info.snippet?.customUrl || "",
        url:
          `https://www.youtube.com/channel/${info.id}`,
      },

      analysis: {
        status,
        confidence,
        score: subscriberProgress,
        readiness: subscriberProgress,
        checks,
        recommendations,
        revenue: {
          subscribers,
          totalViews: views,
        },
        content: {
          videos,
          averageViews:
            videos > 0
              ? Math.round(views / videos)
              : 0,
        },
        branding: {
          hasDescription:
            Boolean(
              info.snippet?.description
            ),
        },
      },
    });
  } catch (error) {
    console.error(
      "MONETIZATION CHECKER ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        error.message ||
        "Unable to analyze channel.",
    });
  }
};

/*
|--------------------------------------------------------------------------
| YouTube Tag Extractor
|--------------------------------------------------------------------------
*/

export const extractVideoTags = async (
  req,
  res
) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter a YouTube video URL.",
      });
    }

    const data =
      await getYouTubeVideoTags(url);

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(
      "YouTube Tag Extractor Error:",
      error
    );

    const status =
      error.message ===
        "YouTube URL is required" ||
      error.message ===
        "Invalid YouTube URL" ||
      error.message ===
        "Invalid YouTube video ID"
        ? 400
        : error.message ===
            "Video not found or unavailable"
          ? 404
          : 500;

    return res.status(status).json({
      success: false,
      message:
        error.message ||
        "Failed to extract YouTube tags.",
    });
  }
};

/*
|--------------------------------------------------------------------------
| YouTube Hashtag Extractor
|--------------------------------------------------------------------------
*/

export const extractVideoHashtags = async (
  req,
  res
) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter a YouTube video URL.",
      });
    }

    const data =
      await getYouTubeVideoHashtags(url);

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(
      "YouTube Hashtag Extractor Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to extract YouTube hashtags.",
    });
  }
};

/*
|--------------------------------------------------------------------------
| YouTube Description Extractor
|--------------------------------------------------------------------------
*/

export const extractVideoDescription = async (
  req,
  res
) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter a YouTube video URL.",
      });
    }

    const data =
      await getYouTubeVideoDescription(url);

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(
      "YouTube Description Extractor Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to extract YouTube description.",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Shadowban Detector
|--------------------------------------------------------------------------
*/

export const detectShadowban = async (
  req,
  res
) => {
  try {
    const { channel } = req.query;

    if (!channel) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter a YouTube channel.",
      });
    }

    const data =
      await checkYouTubeShadowban(channel);

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(
      "YouTube Shadowban Detector Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to check YouTube channel signals.",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Channel Analyzer
|--------------------------------------------------------------------------
*/

export const analyzeYouTubeChannel = async (
  req,
  res
) => {
  try {
    const { channel } = req.query;

    if (!channel) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter a YouTube channel.",
      });
    }

    const data =
      await analyzeYouTubeChannelData(channel);

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(
      "YouTube Channel Analyzer Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to analyze YouTube channel.",
    });
  }
};

/*
|--------------------------------------------------------------------------
| SEO Analyzer
|--------------------------------------------------------------------------
*/

export const analyzeYouTubeSEO = async (
  req,
  res
) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter a YouTube video URL.",
      });
    }

    const data =
      await analyzeVideoSEO(url);

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(
      "YouTube SEO Analyzer Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to analyze YouTube SEO.",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Comment Reader
|--------------------------------------------------------------------------
*/

export const readYouTubeComments = async (
  req,
  res
) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter a YouTube video URL.",
      });
    }

    const data =
      await getYouTubeComments(url);

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(
      "YouTube Comment Reader Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to load YouTube comments.",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Channel Analyzer Alias
|--------------------------------------------------------------------------
|
| Keeps controller naming explicit while avoiding
| collision with the imported service function.
|--------------------------------------------------------------------------
*/

async function analyzeYouTubeChannelData(input) {
  return analyzeYouTubeChannelService(input);
}
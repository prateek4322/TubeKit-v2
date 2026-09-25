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

  console.log(
    "Response:",
    JSON.stringify(data, null, 2)
  );

  if (!response.ok) {
    throw new Error(
      data.error?.message ||
        "YouTube API Error"
    );
  }

  return data;
}

/*
|--------------------------------------------------------------------------
| Extract Video ID
|--------------------------------------------------------------------------
| Supported:
| - youtube.com/watch?v=VIDEO_ID
| - www.youtube.com/watch?v=VIDEO_ID
| - m.youtube.com/watch?v=VIDEO_ID
| - youtu.be/VIDEO_ID
| - youtube.com/shorts/VIDEO_ID
| - youtube.com/embed/VIDEO_ID
| - youtube.com/live/VIDEO_ID
| - URLs with extra query parameters
|--------------------------------------------------------------------------
*/

export function extractVideoId(input) {
  const value = String(input || "").trim();

  if (!value) {
    throw new Error("YouTube URL is required");
  }

  let url;

  try {
    /*
    --------------------------------------------------------
    Handle URLs without protocol
    --------------------------------------------------------
    */

    const normalizedValue =
      /^https?:\/\//i.test(value)
        ? value
        : `https://${value}`;

    url = new URL(normalizedValue);

  } catch {
    throw new Error("Invalid YouTube URL");
  }

  /*
  --------------------------------------------------------
  Normalize hostname
  --------------------------------------------------------
  */

  const hostname = url.hostname
    .toLowerCase()
    .replace(/^www\./, "")
    .replace(/^m\./, "");

  let videoId = null;

  /*
  --------------------------------------------------------
  youtube.com
  --------------------------------------------------------
  */

  if (
    hostname === "youtube.com" ||
    hostname === "youtube-nocookie.com"
  ) {

    /*
    ------------------------------------------------------
    Standard Watch URL
    https://www.youtube.com/watch?v=VIDEO_ID
    ------------------------------------------------------
    */

    if (url.pathname === "/watch") {
      videoId = url.searchParams.get("v");
    }

    /*
    ------------------------------------------------------
    Shorts URL
    https://www.youtube.com/shorts/VIDEO_ID
    ------------------------------------------------------
    */

    if (
      !videoId &&
      url.pathname.startsWith("/shorts/")
    ) {
      videoId = url.pathname
        .split("/")
        .filter(Boolean)[1];
    }

    /*
    ------------------------------------------------------
    Embed URL
    https://www.youtube.com/embed/VIDEO_ID
    ------------------------------------------------------
    */

    if (
      !videoId &&
      url.pathname.startsWith("/embed/")
    ) {
      videoId = url.pathname
        .split("/")
        .filter(Boolean)[1];
    }

    /*
    ------------------------------------------------------
    Live URL
    https://www.youtube.com/live/VIDEO_ID
    ------------------------------------------------------
    */

    if (
      !videoId &&
      url.pathname.startsWith("/live/")
    ) {
      videoId = url.pathname
        .split("/")
        .filter(Boolean)[1];
    }
  }

  /*
  --------------------------------------------------------
  youtu.be
  --------------------------------------------------------
  */

  if (hostname === "youtu.be") {
    videoId = url.pathname
      .split("/")
      .filter(Boolean)[0];
  }

  /*
  --------------------------------------------------------
  Validate Video ID
  --------------------------------------------------------
  */

  if (!videoId) {
    throw new Error("Invalid YouTube URL");
  }

  /*
  YouTube video IDs normally contain exactly
  11 URL-safe characters.
  */

  if (
    !/^[A-Za-z0-9_-]{11}$/.test(
      videoId
    )
  ) {
    throw new Error(
      "Invalid YouTube video ID"
    );
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

  console.log("Input:", value);

  /*
  ---------------------------------------
  Remove trailing slash
  ---------------------------------------
  */

  value = value.replace(/\/$/, "");

  /*
  ---------------------------------------
  UC Channel ID
  ---------------------------------------
  */

  if (
    /^UC[\w-]{22}$/.test(value)
  ) {
    return value;
  }

  /*
  ---------------------------------------
  youtube.com/channel/UC...
  ---------------------------------------
  */

  if (
    value.includes("/channel/")
  ) {

    return value
      .split("/channel/")[1]
      .split("/")[0];

  }

  /*
  ---------------------------------------
  Handle
  ---------------------------------------
  */

  if (value.includes("@")) {

    const handle =
      value.match(
        /@([^/?]+)/
      )?.[1];

    if (!handle) {
      throw new Error(
        "Invalid Handle"
      );
    }

    console.log(
      "Searching Handle:",
      handle
    );

    const data =
      await fetchJson(
        `${BASE_URL}/channels?part=id&forHandle=${encodeURIComponent(
          handle
        )}&key=${API_KEY}`
      );

    if (data.items?.length) {
      return data.items[0].id;
    }

    const search =
      await fetchJson(
        `${BASE_URL}/search?part=snippet&type=channel&q=${encodeURIComponent(
          handle
        )}&maxResults=1&key=${API_KEY}`
      );

    if (!search.items?.length) {
      throw new Error(
        "Channel not found"
      );
    }

    return search.items[0]
      .snippet.channelId;
  }

  /*
  ---------------------------------------
  Video URL
  ---------------------------------------
  */

  try {

    const videoId =
      extractVideoId(value);

    const video =
      await fetchJson(
        `${BASE_URL}/videos?part=snippet&id=${encodeURIComponent(
          videoId
        )}&key=${API_KEY}`
      );

    if (!video.items?.length) {
      throw new Error(
        "Video not found"
      );
    }

    return video.items[0]
      .snippet.channelId;

  } catch (error) {

    /*
    If it isn't a video URL,
    continue with channel-name search.
    */

    if (
      error.message !==
      "Invalid YouTube URL"
    ) {
      throw error;
    }
  }

  /*
  ---------------------------------------
  Channel Name
  ---------------------------------------
  */

  const search =
    await fetchJson(
      `${BASE_URL}/search?part=snippet&type=channel&q=${encodeURIComponent(
        value
      )}&maxResults=1&key=${API_KEY}`
    );

  if (!search.items?.length) {
    throw new Error(
      "Channel not found"
    );
  }

  return search.items[0]
    .snippet.channelId;
}

/*
|--------------------------------------------------------------------------
| Get Channel Info
|--------------------------------------------------------------------------
*/

export async function getChannelInfo(input) {

  const API_KEY = getApiKey();

  const channelId =
    await resolveChannelId(input);

  console.log(
    "Resolved Channel ID:",
    channelId
  );

  const data =
    await fetchJson(
      `${BASE_URL}/channels?part=snippet,statistics&id=${encodeURIComponent(
        channelId
      )}&key=${API_KEY}`
    );

  if (!data.items?.length) {
    throw new Error(
      "Channel not found"
    );
  }

  return data.items[0];
}

/*
|--------------------------------------------------------------------------
| Get YouTube Video Tags
|--------------------------------------------------------------------------
*/

export async function getYouTubeVideoTags(input) {

  const API_KEY = getApiKey();

  /*
  Extract Video ID from any supported
  YouTube URL format.
  */

  const videoId =
    extractVideoId(input);

  console.log(
    "Tag Extractor Video ID:",
    videoId
  );

  /*
  Fetch video snippet.
  The tags are returned inside:
  snippet.tags
  */

  const data =
    await fetchJson(
      `${BASE_URL}/videos?part=snippet&id=${encodeURIComponent(
        videoId
      )}&key=${API_KEY}`
    );

  /*
  ---------------------------------------
  Video Not Found
  ---------------------------------------
  */

  if (!data.items?.length) {
    throw new Error(
      "Video not found or unavailable"
    );
  }

  const video =
    data.items[0];

  const snippet =
    video.snippet || {};

  /*
  ---------------------------------------
  Extract Tags
  ---------------------------------------
  */

  const tags =
    Array.isArray(snippet.tags)
      ? snippet.tags
      : [];

  console.log(
    "Extracted Tags:",
    tags
  );

  /*
  ---------------------------------------
  Return Data
  ---------------------------------------
  */

  return {
    videoId,

    videoUrl:
      `https://www.youtube.com/watch?v=${videoId}`,

    title:
      snippet.title || "",

    channelTitle:
      snippet.channelTitle || "",

    channelId:
      snippet.channelId || "",

    tags,
  };
}

/*
|--------------------------------------------------------------------------
| Thumbnail URLs
|--------------------------------------------------------------------------
*/

export function getThumbnailUrls(videoId) {

  if (!videoId) {
    throw new Error(
      "Video ID is required"
    );
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
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
*/

export function extractVideoId(input) {

  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^?&/]+)/i;

  const match = input.match(regex);

  if (!match) {
    throw new Error("Invalid YouTube URL");
  }

  return match[1];
}
export async function resolveChannelId(input) {

  const API_KEY = getApiKey();

  let value = input.trim();

  console.log("Input:", value);

  value = value.split("?")[0];

  value = value.replace(/\/$/, "");

  /*
  ---------------------------------------
  UC Channel ID
  ---------------------------------------
  */

  if (/^UC[\w-]{22}$/.test(value)) {
    return value;
  }

  /*
  ---------------------------------------
  youtube.com/channel/UC...
  ---------------------------------------
  */

  if (value.includes("/channel/")) {

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
      value.match(/@([^/?]+)/)?.[1];

    if (!handle) {
      throw new Error("Invalid Handle");
    }

    console.log(
      "Searching Handle:",
      handle
    );

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

  /*
  ---------------------------------------
  Video URL
  ---------------------------------------
  */

  if (

    value.includes("watch?v=") ||

    value.includes("youtu.be/") ||

    value.includes("/shorts/")

  ) {

    const videoId =
      extractVideoId(value);

    const video = await fetchJson(

      `${BASE_URL}/videos?part=snippet&id=${videoId}&key=${API_KEY}`

    );

    if (!video.items?.length) {
      throw new Error("Video not found");
    }

    return video.items[0].snippet.channelId;

  }

  /*
  ---------------------------------------
  Channel Name
  ---------------------------------------
  */

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

  const channelId =
    await resolveChannelId(input);

  console.log(
    "Resolved Channel ID:",
    channelId
  );

  const data = await fetchJson(

    `${BASE_URL}/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`

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
      `https://img.youtube.com/vi/${videoId}/default.jpg`

  };

}
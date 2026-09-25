import {
  getChannelInfo,
  getYouTubeVideoTags,
} from "../services/youtubeService.js";

/*
|--------------------------------------------------------------------------
| Monetization Analyzer
|--------------------------------------------------------------------------
*/

export const monetizationAnalyzer = async (req, res) => {
  try {
    const { channel } = req.body;

    const info = await getChannelInfo(channel);

    const subscribers = Number(
      info.statistics.subscriberCount || 0
    );

    const views = Number(
      info.statistics.viewCount || 0
    );

    const videos = Number(
      info.statistics.videoCount || 0
    );

    const publishedDate = new Date(
      info.snippet.publishedAt
    );

    const today = new Date();

    const channelAge = Math.floor(
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

    res.json({
      success: true,

      channel: {
        id: info.id,
        name: info.snippet.title,
        thumbnail:
          info.snippet.thumbnails.high.url,
        subscribers,
        views,
        videos,
        publishedAt:
          info.snippet.publishedAt,
        age: channelAge,
      },

      analysis: {
        status,
        confidence,
      },
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
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

    /*
    ---------------------------------------
    Validate URL
    ---------------------------------------
    */

    if (!url) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter a YouTube video URL.",
      });
    }

    /*
    ---------------------------------------
    Get YouTube Tags
    ---------------------------------------
    */

    const data =
      await getYouTubeVideoTags(url);

    /*
    ---------------------------------------
    Success Response
    ---------------------------------------
    */

    return res.status(200).json({
      success: true,

      data: {
        videoId: data.videoId,

        videoUrl: data.videoUrl,

        title: data.title,

        channelTitle:
          data.channelTitle,

        channelId:
          data.channelId,

        tags: data.tags,
      },
    });

  } catch (error) {

    console.error(
      "YouTube Tag Extractor Error:",
      error
    );

    /*
    ---------------------------------------
    Error Status
    ---------------------------------------
    */

    let status = 500;

    if (
      error.message ===
        "YouTube URL is required" ||
      error.message ===
        "Invalid YouTube URL" ||
      error.message ===
        "Invalid YouTube video ID"
    ) {
      status = 400;
    }

    if (
      error.message ===
      "Video not found or unavailable"
    ) {
      status = 404;
    }

    /*
    ---------------------------------------
    Error Response
    ---------------------------------------
    */

    return res.status(status).json({
      success: false,
      message:
        error.message ||
        "Failed to extract YouTube tags.",
    });
  }
};
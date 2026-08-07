import { getChannelInfo } from "../services/youtubeService.js";

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
        publishedAt: info.snippet.publishedAt,
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
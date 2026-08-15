import { Link } from "react-router-dom";

function RgybHeading({ number, children, color = "red" }) {
  const colors = {
    red: "border-red-500/40 bg-red-500/10 text-red-300",
    yellow: "border-yellow-500/40 bg-yellow-500/10 text-yellow-300",
    green: "border-green-500/40 bg-green-500/10 text-green-300",
    blue: "border-blue-500/40 bg-blue-500/10 text-blue-300",
  };

  return (
    <h2
      className={`rounded-xl border px-5 py-4 text-2xl font-bold ${colors[color]}`}
    >
      {number && <span className="mr-2">{number}.</span>}
      {children}
    </h2>
  );
}

function ThumbnailGuide() {
  return (
    <article className="space-y-10 text-base leading-8 text-slate-300">

      {/* Introduction */}
      <section>
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
          <p className="text-lg leading-8 text-slate-200">
            A YouTube thumbnail is one of the first visual elements viewers
            see when they discover a video. A clear and relevant thumbnail
            can help communicate the video's topic and give viewers a reason
            to consider watching.
          </p>

          <p className="mt-4 leading-8 text-slate-400">
            In this guide, you will learn how to make better YouTube
            thumbnails, choose the right visual elements, use readable text,
            create strong contrast, match your thumbnail with your title,
            and avoid common thumbnail mistakes.
          </p>
        </div>
      </section>

      {/* Why thumbnails matter */}
      <section>
        <RgybHeading color="red">
          Why Do YouTube Thumbnails Matter?
        </RgybHeading>

        <p className="mt-4">
          A YouTube thumbnail gives viewers a quick visual indication of
          what a video is about. It appears alongside the video title across
          different YouTube discovery surfaces.
        </p>

        <p className="mt-4">
          A strong thumbnail should make the main idea easy to understand
          without misleading viewers. The best thumbnail design usually has
          a clear subject, readable elements, and a visual hierarchy that
          works even when the image is displayed at a smaller size.
        </p>

        <p className="mt-4">
          Your thumbnail should work together with your{" "}
          <Link
            to="/tools/title-generator"
            className="font-semibold text-blue-400 underline underline-offset-4 hover:text-blue-300"
          >
            YouTube title
          </Link>{" "}
          rather than simply repeating it.
        </p>
      </section>

      {/* Main idea */}
      <section>
        <RgybHeading number="1" color="yellow">
          Keep the Main YouTube Thumbnail Idea Clear
        </RgybHeading>

        <p className="mt-4">
          A viewer should be able to understand the main subject of your
          thumbnail quickly. If the design contains too many unrelated
          objects, screenshots, graphics, or text elements, the main idea
          can become difficult to recognize.
        </p>

        <p className="mt-4">
          Start with one primary visual idea and build the thumbnail around
          it. Every additional element should support that main idea.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Choose one main subject.</li>
          <li>Remove unnecessary visual elements.</li>
          <li>Create a clear visual hierarchy.</li>
          <li>Make the main message obvious.</li>
        </ul>
      </section>

      {/* Text */}
      <section>
        <RgybHeading number="2" color="green">
          Use Short and Readable Thumbnail Text
        </RgybHeading>

        <p className="mt-4">
          Text can make a YouTube thumbnail easier to understand, but too
          much text can make the design crowded. This is especially
          important because thumbnails may be viewed on smaller screens.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Use short phrases.</li>
          <li>Make important words visually prominent.</li>
          <li>Use fonts that remain readable at small sizes.</li>
          <li>Avoid placing long paragraphs on thumbnails.</li>
          <li>Do not simply copy the entire video title.</li>
        </ul>

        <div className="mt-6 rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <p className="font-semibold text-green-300">
            Thumbnail text tip
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Use the thumbnail to communicate a visual idea and let the
            title provide additional context.
          </p>
        </div>
      </section>

      {/* Subject */}
      <section>
        <RgybHeading number="3" color="blue">
          Make the Main Subject Easy to Recognize
        </RgybHeading>

        <p className="mt-4">
          Whether your YouTube thumbnail contains a person, product,
          screenshot, object, logo, or illustration, the primary subject
          should be easy to identify.
        </p>

        <p className="mt-4">
          Avoid placing too many competing elements around the main
          subject. The viewer should know where to look first.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
            <h3 className="font-semibold text-red-300">
              Avoid
            </h3>

            <p className="mt-2 text-slate-400">
              Too many objects, tiny text, complicated backgrounds, and
              unrelated visual elements.
            </p>
          </div>

          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
            <h3 className="font-semibold text-green-300">
              Better
            </h3>

            <p className="mt-2 text-slate-400">
              One strong subject supported by simple and relevant visual
              elements.
            </p>
          </div>
        </div>
      </section>

      {/* Contrast */}
      <section>
        <RgybHeading number="4" color="red">
          Create Strong Visual Contrast
        </RgybHeading>

        <p className="mt-4">
          Contrast helps separate the subject from the background and makes
          important elements easier to recognize.
        </p>

        <p className="mt-4">
          Consider the relationship between your background, subject,
          colors, borders, shadows, and text. The goal is not to make every
          element extremely bright. The goal is to create a clear visual
          hierarchy.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Separate the subject from the background.</li>
          <li>Make text readable against its background.</li>
          <li>Use contrast to highlight important information.</li>
          <li>Avoid making every element compete for attention.</li>
        </ul>
      </section>

      {/* Accuracy */}
      <section>
        <RgybHeading number="5" color="yellow">
          Make Your Thumbnail Match the Video
        </RgybHeading>

        <p className="mt-4">
          Your YouTube thumbnail should accurately represent the content
          viewers will find after clicking the video.
        </p>

        <p className="mt-4">
          Avoid using an image or visual claim that creates an expectation
          the video does not satisfy. A strong thumbnail should attract
          attention while still being honest about the content.
        </p>

        <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
          <p className="font-semibold text-yellow-300">
            Avoid misleading thumbnails
          </p>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Your thumbnail should create interest without promising
            something that is not actually covered in the video.
          </p>
        </div>
      </section>

      {/* Title combination */}
      <section>
        <RgybHeading number="6" color="green">
          Make Your Thumbnail Work With Your YouTube Title
        </RgybHeading>

        <p className="mt-4">
          Your title and thumbnail are commonly viewed together. Instead
          of repeating exactly the same information in both, use them to
          communicate complementary details.
        </p>

        <p className="mt-4">
          For example, the thumbnail could highlight the result or main
          visual concept while the title explains the specific topic,
          problem, or benefit.
        </p>

        <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
          <h3 className="text-lg font-semibold text-blue-300">
            Need Better YouTube Title Ideas?
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Generate multiple title ideas and choose one that works with
            your thumbnail concept.
          </p>

          <Link
            to="/tools/title-generator"
            className="mt-4 inline-flex font-semibold text-blue-400 hover:text-blue-300"
          >
            Try the AI YouTube Title Generator →
          </Link>
        </div>
      </section>

      {/* Small size */}
      <section>
        <RgybHeading number="7" color="blue">
          Check Your Thumbnail at Small Sizes
        </RgybHeading>

        <p className="mt-4">
          A thumbnail can appear at different sizes depending on where it
          is displayed. A design that looks excellent on a large monitor
          may become difficult to understand when reduced.
        </p>

        <p className="mt-4">
          Before publishing, reduce the thumbnail and check whether the
          main subject, important text, and overall message remain
          recognizable.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Check the thumbnail on a phone-sized screen.</li>
          <li>Make sure the main subject remains visible.</li>
          <li>Check that important text is still readable.</li>
          <li>Remove details that disappear at smaller sizes.</li>
        </ul>
      </section>

      {/* Thumbnail size */}
      <section>
        <RgybHeading color="yellow">
          YouTube Thumbnail Size and Format
        </RgybHeading>

        <p className="mt-4">
          Choosing an appropriate thumbnail size and format helps your
          design display properly across YouTube surfaces.
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-5 py-4 font-semibold text-yellow-300">
                  Property
                </th>

                <th className="px-5 py-4 font-semibold text-yellow-300">
                  Recommended Approach
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-white/10">
                <td className="px-5 py-4 text-white">
                  Aspect Ratio
                </td>

                <td className="px-5 py-4 text-slate-400">
                  Use a standard widescreen video thumbnail layout.
                </td>
              </tr>

              <tr className="border-b border-white/10">
                <td className="px-5 py-4 text-white">
                  Resolution
                </td>

                <td className="px-5 py-4 text-slate-400">
                  Use a sufficiently high-resolution image so the design
                  remains clear.
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-white">
                  Format
                </td>

                <td className="px-5 py-4 text-slate-400">
                  Use a web-friendly image format supported by YouTube.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Always check YouTube's current creator documentation for the
          latest upload requirements before publishing.
        </p>
      </section>

      {/* Thumbnail ideas */}
      <section>
        <RgybHeading color="green">
          YouTube Thumbnail Ideas
        </RgybHeading>

        <p className="mt-4">
          Different video topics can benefit from different thumbnail
          concepts. Instead of copying another creator's design, choose a
          visual concept that communicates your own video's main idea.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            [
              "Tutorial Videos",
              "Show the result, interface, or main action from the tutorial.",
            ],
            [
              "Gaming Videos",
              "Highlight the main character, challenge, result, or game moment.",
            ],
            [
              "Technology Videos",
              "Feature the product, software interface, or key comparison.",
            ],
            [
              "Educational Videos",
              "Use one clear concept, question, diagram, or visual result.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="font-bold text-white">
                {title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section>
        <RgybHeading color="red">
          How to Make a YouTube Thumbnail: Simple Workflow
        </RgybHeading>

        <ol className="mt-5 space-y-4">
          {[
            "Identify the main idea of your video.",
            "Choose one primary visual subject.",
            "Create a simple visual hierarchy.",
            "Add short text only when it improves clarity.",
            "Use contrast to separate important elements.",
            "Check the design at a small size.",
            "Make sure the thumbnail accurately represents the video.",
          ].map((step, index) => (
            <li
              key={step}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <span className="mr-3 font-bold text-red-400">
                {index + 1}.
              </span>

              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Common mistakes */}
      <section>
        <RgybHeading color="yellow">
          Common YouTube Thumbnail Mistakes
        </RgybHeading>

        <ul className="mt-5 space-y-3">
          {[
            "Using too many visual elements.",
            "Adding too much text.",
            "Making text difficult to read.",
            "Using an image unrelated to the video.",
            "Repeating the complete title on the thumbnail.",
            "Creating a design that becomes unclear at small sizes.",
            "Using misleading visual claims.",
            "Ignoring the relationship between title and thumbnail.",
            "Making every element equally prominent.",
            "Copying another creator's design without adding your own concept.",
          ].map((mistake) => (
            <li
              key={mistake}
              className="rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3"
            >
              <span className="mr-2 text-red-400">
                ✕
              </span>

              {mistake}
            </li>
          ))}
        </ul>
      </section>

      {/* AI Thumbnail Generator */}
      <section>
        <RgybHeading color="blue">
          Generate YouTube Thumbnail Ideas With AI
        </RgybHeading>

        <p className="mt-4">
          Coming up with a strong visual concept can take time. An AI
          thumbnail generator can help you create starting ideas based on
          your video topic.
        </p>

        <p className="mt-4">
          AI-generated concepts should be treated as starting points.
          Review and customize them so the final thumbnail matches your
          actual content, branding, and audience.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
          <h3 className="text-xl font-bold text-blue-300">
            Try TubeKit AI Thumbnail Generator
          </h3>

          <p className="mt-3 text-slate-400">
            Generate YouTube thumbnail concepts based on your video topic
            and create a stronger visual direction for your next video.
          </p>

          <Link
            to="/tools/thumbnail-generator"
            className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Generate Thumbnail Ideas →
          </Link>
        </div>
      </section>

      {/* Related tools */}
      <section>
        <RgybHeading color="green">
          Related YouTube Creator Tools
        </RgybHeading>

        <p className="mt-4">
          Your thumbnail is only one part of your YouTube publishing
          workflow. Use TubeKit's other tools to prepare your title,
          description, tags, and hashtags.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link
            to="/tools/title-generator"
            className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 transition hover:bg-red-500/10"
          >
            <h3 className="font-bold text-red-300">
              YouTube Title Generator
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Generate title ideas based on your video topic.
            </p>
          </Link>

          <Link
            to="/tools/description-generator"
            className="rounded-xl border border-green-500/20 bg-green-500/5 p-5 transition hover:bg-green-500/10"
          >
            <h3 className="font-bold text-green-300">
              YouTube Description Generator
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Create structured descriptions for your videos.
            </p>
          </Link>

          <Link
            to="/tools/tags-generator"
            className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5 transition hover:bg-yellow-500/10"
          >
            <h3 className="font-bold text-yellow-300">
              YouTube Tags Generator
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Generate relevant YouTube tag ideas.
            </p>
          </Link>

          <Link
            to="/tools/hashtag-generator"
            className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 transition hover:bg-blue-500/10"
          >
            <h3 className="font-bold text-blue-300">
              YouTube Hashtag Generator
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Generate relevant hashtags for your videos.
            </p>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <RgybHeading color="red">
          Frequently Asked Questions About YouTube Thumbnails
        </RgybHeading>

        <div className="mt-6 space-y-6">

          <div>
            <h3 className="text-lg font-semibold text-white">
              What makes a good YouTube thumbnail?
            </h3>

            <p className="mt-2">
              A good YouTube thumbnail clearly communicates the video's
              main idea, uses a recognizable subject, has readable
              elements, and accurately represents the content.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              How do I make a YouTube thumbnail?
            </h3>

            <p className="mt-2">
              Start by identifying the video's main idea, choose one strong
              visual subject, create a simple layout, add readable text if
              needed, and check the final design at a small size.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              What size should a YouTube thumbnail be?
            </h3>

            <p className="mt-2">
              YouTube thumbnails should use an appropriate widescreen
              layout and sufficiently high resolution so they remain clear
              across different devices. Check YouTube's current official
              creator documentation for the latest specifications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Should I put text on my YouTube thumbnail?
            </h3>

            <p className="mt-2">
              Short text can help communicate the main idea, but it is not
              necessary for every thumbnail. If you use text, make sure it
              remains readable and does not overcrowd the design.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Should the thumbnail repeat the YouTube title?
            </h3>

            <p className="mt-2">
              Not necessarily. The title and thumbnail can work together by
              communicating different but complementary information.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Can AI generate YouTube thumbnail ideas?
            </h3>

            <p className="mt-2">
              Yes. AI can generate starting concepts based on a video
              topic. Creators should review and adapt those ideas to match
              their actual content and branding.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Do thumbnails help get more YouTube views?
            </h3>

            <p className="mt-2">
              A thumbnail can influence how viewers perceive and respond to
              a video, but views depend on many factors. A thumbnail alone
              cannot guarantee more views.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Is TubeKit's Thumbnail Generator free?
            </h3>

            <p className="mt-2">
              TubeKit provides an AI Thumbnail Generator for creators who
              want to generate thumbnail concept ideas for their videos.
            </p>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section>
        <RgybHeading color="blue">
          Create Better YouTube Thumbnail Ideas With TubeKit
        </RgybHeading>

        <p className="mt-4">
          A strong YouTube thumbnail starts with a clear idea. Focus on
          one main subject, use readable elements, create visual contrast,
          and make sure the design accurately represents your video.
        </p>

        <p className="mt-4">
          When your thumbnail and title work together, viewers can
          understand your video more quickly and decide whether it is
          relevant to them.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
          <h3 className="text-xl font-bold text-blue-300">
            Ready to Create Your Next Thumbnail?
          </h3>

          <p className="mt-3 text-slate-400">
            Generate thumbnail concepts with TubeKit and customize the
            final idea for your audience and video.
          </p>

          <Link
            to="/tools/thumbnail-generator"
            className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Try Thumbnail Generator →
          </Link>
        </div>
      </section>

    </article>
  );
}

export default ThumbnailGuide;
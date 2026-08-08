import { Link } from "react-router-dom";

function ScriptGuide() {
  return (
    <div className="space-y-8 text-base leading-8 text-slate-300">
      <section>
        <h2 className="text-2xl font-bold text-white">
          Why YouTube Scripts Matter
        </h2>

        <p className="mt-4">
          A YouTube script gives a video a clear structure before
          recording begins. It can help creators organize their ideas,
          avoid unnecessary sections, and make sure the important
          information is covered.
        </p>

        <p className="mt-4">
          A script does not always need to be written word-for-word. The
          right format depends on the type of video, the creator's style,
          and how comfortable they are speaking without a full script.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          1. Start With the Main Idea
        </h2>

        <p className="mt-4">
          Before writing the script, define exactly what the viewer should
          learn, understand, or experience by the end of the video.
        </p>

        <p className="mt-4">
          A clear main idea makes it easier to remove information that does
          not contribute to the video's purpose.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          2. Understand Your Audience
        </h2>

        <p className="mt-4">
          Think about the knowledge level, interests, and problems of the
          people watching the video. A beginner tutorial should be
          structured differently from an advanced technical explanation.
        </p>

        <p className="mt-4">
          Knowing your audience also helps you choose the right language,
          examples, pacing, and level of detail.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          3. Write a Strong Opening
        </h2>

        <p className="mt-4">
          The opening should quickly establish the topic and give viewers
          a reason to continue watching. Avoid unnecessary introductions
          that delay the main subject.
        </p>

        <p className="mt-4">
          You can start with a question, problem, result, surprising fact,
          or direct explanation of what the viewer will learn.
        </p>

        <Link
          to="/tools/hook-generator"
          className="mt-5 inline-flex font-semibold text-blue-400 hover:text-blue-300"
        >
          Generate YouTube Hook Ideas →
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          4. Create a Simple Video Structure
        </h2>

        <p className="mt-4">
          Divide the video into logical sections. A simple structure can
          make both recording and editing easier.
        </p>

        <ol className="mt-5 list-decimal space-y-3 pl-6">
          <li>Hook and introduction.</li>
          <li>Explain the problem or topic.</li>
          <li>Present the main information.</li>
          <li>Give examples or demonstrations.</li>
          <li>Summarize the key points.</li>
          <li>Provide an appropriate next step.</li>
        </ol>

        <Link
          to="/tools/outline-generator"
          className="mt-5 inline-flex font-semibold text-blue-400 hover:text-blue-300"
        >
          Create a Video Outline →
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          5. Keep Each Section Focused
        </h2>

        <p className="mt-4">
          Each section should have a clear purpose. If several points are
          unrelated, consider separating them into different sections or
          videos.
        </p>

        <p className="mt-4">
          Focused sections make it easier for viewers to follow the
          information and for creators to edit the final video.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          6. Use Examples
        </h2>

        <p className="mt-4">
          Examples can make abstract information easier to understand.
          Whenever possible, connect an idea to a realistic situation,
          demonstration, or practical use case.
        </p>

        <p className="mt-4">
          The examples should support the main topic rather than becoming
          unrelated stories that make the video longer without adding
          value.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          7. Write for Speaking, Not Just Reading
        </h2>

        <p className="mt-4">
          A script can look natural on a page but sound unnatural when
          spoken aloud. Use sentences and transitions that match the way
          people normally communicate.
        </p>

        <p className="mt-4">
          Reading the script aloud before recording can help identify
          awkward phrases and sections that need simplification.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          8. Add a Clear Conclusion
        </h2>

        <p className="mt-4">
          The conclusion should briefly reinforce the main takeaway.
          Depending on the video, you can also direct viewers toward a
          related resource or another useful piece of content.
        </p>

        <p className="mt-4">
          Avoid extending the ending unnecessarily after the main value of
          the video has already been delivered.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Common YouTube Script Mistakes
        </h2>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Starting with an unnecessarily long introduction.</li>
          <li>Trying to cover too many unrelated topics.</li>
          <li>Writing language that sounds unnatural when spoken.</li>
          <li>Repeating the same information.</li>
          <li>Using examples that do not support the main topic.</li>
          <li>Ignoring the target audience.</li>
          <li>Ending without a clear conclusion.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Simple YouTube Script Template
        </h2>

        <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <div>
            <h3 className="font-semibold text-white">
              Hook
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Introduce the main problem, question, or result.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Introduction
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Explain what the viewer will learn.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Main Content
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Explain the important points and provide examples.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Conclusion
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Summarize the key takeaway and provide the next step.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          Create YouTube Scripts With TubeKit
        </h2>

        <p className="mt-4">
          AI can help creators generate a starting structure or draft for a
          YouTube script. The generated content should then be reviewed,
          edited, and adapted to the creator's own knowledge, voice, and
          audience.
        </p>

        <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Try TubeKit AI Script Generator
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Generate a starting script for your YouTube video and
            customize it before recording.
          </p>

          <Link
            to="/tools/script-generator"
            className="mt-4 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Generate YouTube Script →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ScriptGuide;
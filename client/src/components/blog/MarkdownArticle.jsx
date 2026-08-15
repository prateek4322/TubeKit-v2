import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import { visit } from "unist-util-visit";

function remarkRGYB() {
  return (tree) => {
    visit(tree, "containerDirective", (node) => {
      if (!["red", "yellow", "green", "blue"].includes(node.name)) {
        return;
      }

      node.data = node.data || {};
      node.data.hName = "div";
      node.data.hProperties = {
        className: `rgyb-${node.name}`,
      };
    });
  };
}

const components = {
  h1: ({ children }) => (
    <h2 className="mt-10 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
      {children}
    </h2>
  ),

  h2: ({ children }) => (
    <h2 className="mt-14 flex items-center gap-3 text-2xl font-black leading-tight text-white sm:text-3xl">
      <span className="h-8 w-1 shrink-0 rounded-full bg-gradient-to-b from-red-500 via-yellow-400 to-blue-500" />
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="mt-9 text-xl font-bold text-white sm:text-2xl">
      {children}
    </h3>
  ),

  p: ({ children }) => (
    <p className="mt-4 text-base leading-8 text-slate-300 sm:text-[17px]">
      {children}
    </p>
  ),

  strong: ({ children }) => (
    <strong className="font-bold text-white">
      {children}
    </strong>
  ),

  em: ({ children }) => (
    <em className="text-slate-200">
      {children}
    </em>
  ),

  ul: ({ children }) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-300 marker:text-blue-400">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-2 pl-6 text-slate-300 marker:text-yellow-400">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="leading-7">
      {children}
    </li>
  ),

  a: ({ href, children }) => (
    <a
      href={href}
      className="font-semibold text-blue-400 underline decoration-blue-400/30 underline-offset-4 transition hover:text-blue-300"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),

  blockquote: ({ children }) => (
    <blockquote className="my-8 rounded-2xl border border-blue-500/20 bg-blue-500/[0.06] p-6">
      <div className="text-base leading-8 text-slate-300">
        {children}
      </div>
    </blockquote>
  ),

  hr: () => (
    <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
  ),

  table: ({ children }) => (
    <div className="my-8 overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[650px] border-collapse text-left text-sm">
        {children}
      </table>
    </div>
  ),

  thead: ({ children }) => (
    <thead className="bg-gradient-to-r from-red-500/10 via-yellow-400/10 to-blue-500/10">
      {children}
    </thead>
  ),

  tbody: ({ children }) => (
    <tbody className="divide-y divide-white/10">
      {children}
    </tbody>
  ),

  th: ({ children }) => (
    <th className="px-5 py-4 font-bold text-white">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="px-5 py-4 leading-7 text-slate-300">
      {children}
    </td>
  ),

  pre: ({ children }) => (
    <pre className="my-8 overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/80 p-5 text-sm leading-7 text-slate-300">
      {children}
    </pre>
  ),

  code: ({ children, className }) => (
    <code className={className}>
      {children}
    </code>
  ),

  div: ({ className, children }) => {
    if (!className?.startsWith("rgyb-")) {
      return <div>{children}</div>;
    }

    const type = className.replace("rgyb-", "");

    const styles = {
      red: {
        border: "border-red-500/20",
        bg: "bg-red-500/[0.06]",
        accent: "bg-red-500",
        title: "text-red-400",
        label: "Important",
        icon: "!",
      },

      yellow: {
        border: "border-yellow-400/20",
        bg: "bg-yellow-400/[0.06]",
        accent: "bg-yellow-400",
        title: "text-yellow-300",
        label: "Pro Tip",
        icon: "★",
      },

      green: {
        border: "border-green-500/20",
        bg: "bg-green-500/[0.06]",
        accent: "bg-green-500",
        title: "text-green-400",
        label: "Action Step",
        icon: "✓",
      },

      blue: {
        border: "border-blue-500/20",
        bg: "bg-blue-500/[0.06]",
        accent: "bg-blue-500",
        title: "text-blue-400",
        label: "TubeKit Insight",
        icon: "i",
      },
    };

    const style = styles[type];

    if (!style) {
      return <div>{children}</div>;
    }

    return (
      <div
        className={`relative my-8 overflow-hidden rounded-2xl border ${style.border} ${style.bg}`}
      >
        <div
          className={`absolute left-0 top-0 h-full w-1 ${style.accent}`}
        />

        <div className="p-6 pl-7">

          <div className="flex items-center gap-3">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 font-black ${style.title}`}
            >
              {style.icon}
            </span>

            <span
              className={`text-xs font-black uppercase tracking-[0.16em] ${style.title}`}
            >
              {style.label}
            </span>
          </div>

          <div className="mt-4 leading-8 text-slate-300">
            {children}
          </div>

        </div>
      </div>
    );
  },
};

function MarkdownArticle({ content }) {
  return (
    <div className="text-slate-300">

      <div className="mb-8 h-1 overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500" />

      <ReactMarkdown
        remarkPlugins={[
          remarkGfm,
          remarkDirective,
          remarkRGYB,
        ]}
        components={components}
      >
        {content}
      </ReactMarkdown>

    </div>
  );
}

export default MarkdownArticle;
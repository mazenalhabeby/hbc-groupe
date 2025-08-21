import React from "react";
function CheckIcon() {
  return (
    <svg
      className="mt-1 h-4 w-4 flex-none"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default function ChecklistCard({
  title,
  desc,
  items,
  dotColor = "bg-emerald-500",
  chipColor = "bg-slate-50 text-slate-700 ring-1 ring-slate-200",
}: {
  title: string;
  desc: string;
  items: string[];
  dotColor?: string;
  chipColor?: string;
}) {
  return (
    <article className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div
        className={`mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${chipColor}`}
      >
        <span className={`inline-block h-2 w-2 rounded-full ${dotColor}`} />
        {title}
      </div>
      <p className="text-sm text-slate-600">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckIcon /> {i}
          </li>
        ))}
      </ul>
    </article>
  );
}

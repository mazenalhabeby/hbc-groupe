import React from "react";
export default function ProcessSteps({
  title = "How we work",
  steps,
}: {
  title?: string;
  steps: { n: number; t: string; d: string }[];
}) {
  return (
    <div className="py-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li
            key={s.t}
            className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <span className="absolute -top-3 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow ring-4 ring-white">
              {s.n}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.d}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

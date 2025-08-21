import React from "react";
export default function TagPills({ items }: { items: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {items.map((s) => (
        <span
          key={s}
          className="rounded-full border border-slate-300 bg-white px-4 py-1 text-sm text-slate-700"
        >
          {s}
        </span>
      ))}
    </div>
  );
}

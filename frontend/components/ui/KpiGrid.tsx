import React from "react";
export default function KpiGrid({
  items,
  small = false,
}: {
  items: { label: string; value: string }[];
  small?: boolean;
}) {
  return (
    <dl
      className={`mt-${small ? "8" : "10"} grid ${
        small ? "max-w-xl" : "max-w-2xl"
      } grid-cols-3 gap-${small ? "4" : "6"}`}
    >
      {items.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
        >
          <dt className="text-xs text-slate-500">{s.label}</dt>
          <dd
            className={`${
              small ? "text-sm" : "text-xl"
            } mt-1 font-semibold tabular-nums`}
          >
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

"use client";
import * as React from "react";

type Stat = {
  label: string;
  end: number;        // final numeric value to count to
  prefix?: string;    // e.g. "< " or "+ "
  suffix?: string;    // e.g. "h" or "%"
  decimals?: number;  // decimal places to show
  durationMs?: number;
};

function StatCounter({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  durationMs = 1200,
  start = 0,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  durationMs?: number;
  start?: number;
}) {
  const [val, setVal] = React.useState(start);

  React.useEffect(() => {
    // Respect reduced motion
    const reduce = typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setVal(end);
      return;
    }

    let raf = 0;
    let startTs: number | null = null;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (ts: number) => {
      if (startTs === null) startTs = ts;
      const elapsed = ts - startTs;
      const p = Math.min(elapsed / durationMs, 1);
      const eased = easeOutCubic(p);
      setVal(start + (end - start) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, durationMs, start]);

  const formatted = React.useMemo(
    () =>
      val.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }),
    [val, decimals]
  );

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

// ---- Use it in your section ----
export default function StatsGrid() {
  const stats: Stat[] = [
    { label: "Avg. Response", end: 4, prefix: "< ", suffix: "h" },
    { label: "Uptime Impact", end: 18, prefix: "+", suffix: "%"},
    { label: "Client Retention", end: 96, suffix: "%" },
  ];

  return (
    <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
        >
          <dt className="text-xs text-slate-500">{stat.label}</dt>
          <dd className="mt-1 text-xl font-semibold tabular-nums">
            <StatCounter
              end={stat.end}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals ?? 0}
              durationMs={stat.durationMs ?? 1200}
            />
          </dd>
        </div>
      ))}
    </dl>
  );
}

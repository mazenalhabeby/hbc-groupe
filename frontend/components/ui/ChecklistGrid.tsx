import React from "react";
import ChecklistCard from "./ChecklistCard";
export default function ChecklistGrid({
  cards,
  chipColor,
  dotColor,
  cols = "sm:grid-cols-2 lg:grid-cols-3",
}: {
  cards: { title: string; desc: string; items: string[] }[];
  chipColor?: string;
  dotColor?: string;
  cols?: string;
}) {
  return (
    <div className={`grid gap-6 ${cols}`}>
      {cards.map((c) => (
        <ChecklistCard
          key={c.title}
          title={c.title}
          desc={c.desc}
          items={c.items}
          chipColor={chipColor}
          dotColor={dotColor}
        />
      ))}
    </div>
  );
}

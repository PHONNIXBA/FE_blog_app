"use client";

import { useState } from "react";

interface Props {
  description: string;
}

export function Description({description}: Props) {
  const [expanded, setExpanded] = useState(false);

  const maxLength = 120;
  const isLong = description.length > maxLength;

  const visibleText =
    isLong && !expanded
      ? description.slice(0, maxLength) + "..."
      : description;

  return (
    <div className="mt-2">
      <p>{visibleText}</p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1 font-semibold"
        >
          {expanded ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
}
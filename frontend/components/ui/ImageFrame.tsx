import Image from "next/image";
import React from "react";
export default function ImageFrame({
  src,
  alt,
  width = 600,
  height = 400,
  imgClass = "rounded-2xl object-cover",
  wrapClass = "aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-1 shadow-md",
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  imgClass?: string;
  wrapClass?: string;
}) {
  return (
    <div className={wrapClass}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imgClass}
      />
    </div>
  );
}

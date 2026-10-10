"use client";

import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
  // undefined면 클릭 수를 표시하지 않음 (DB 미연결 등)
  clickCount?: number;
  onClick: (linkId: string) => void;
};

export default function LinkCard({ link, clickCount, onClick }: Props) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => onClick(link.id)}
      className="relative block w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-gray-800 dark:bg-gray-900"
    >
      <span className="block font-semibold">{link.title}</span>
      {link.description && (
        <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">{link.description}</span>
      )}
      {clickCount !== undefined && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs tabular-nums text-gray-400" aria-label={`클릭 ${clickCount}회`}>
          {clickCount.toLocaleString()}
        </span>
      )}
    </a>
  );
}

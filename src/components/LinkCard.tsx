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
      className="relative block w-full rounded-[22px] border border-white/70 bg-white/45 px-16 py-[18px] text-center shadow-[0_1px_2px_rgba(74,60,51,0.04),0_8px_24px_-12px_rgba(196,120,72,0.25)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_1px_2px_rgba(74,60,51,0.05),0_12px_28px_-12px_rgba(196,120,72,0.32)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e48f6a]/60 active:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)] dark:hover:bg-white/[0.1]"
    >
      <span className="block text-[15px] font-semibold tracking-tight">{link.title}</span>
      {link.description && (
        <span className="mt-1 block text-[13px] text-cocoa-500 dark:text-stone-400">{link.description}</span>
      )}
      {clickCount !== undefined && (
        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[11px] font-medium tabular-nums text-cocoa-400 dark:text-stone-500" aria-label={`클릭 ${clickCount}회`}>
          {clickCount.toLocaleString()}회
        </span>
      )}
    </a>
  );
}

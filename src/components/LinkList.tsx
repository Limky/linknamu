"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 받기 전에는 빈 객체라 모두 0회로 표시, null이면 클릭 집계를 쓸 수 없는 상태
  const [counts, setCounts] = useState<Record<string, number> | null>({});

  useEffect(() => {
    fetch("/api/click", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setCounts(data?.counts ?? null))
      .catch(() => setCounts(null));
  }, []);

  const recordClick = (linkId: string) => {
    // 새 탭으로 이동하는 중에도 요청이 끊기지 않도록 sendBeacon 사용
    const body = new Blob([JSON.stringify({ linkId })], { type: "application/json" });
    if (!navigator.sendBeacon?.("/api/click", body)) {
      fetch("/api/click", { method: "POST", body, keepalive: true }).catch(() => {});
    }
    setCounts((prev) => (prev ? { ...prev, [linkId]: (prev[linkId] ?? 0) + 1 } : prev));
  };

  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} clickCount={counts ? counts[link.id] ?? 0 : undefined} onClick={recordClick} />
        </li>
      ))}
    </ul>
  );
}

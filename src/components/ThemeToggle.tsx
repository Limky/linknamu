"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="rounded-full border border-white/70 bg-white/45 p-2 text-base shadow-[0_4px_16px_-8px_rgba(196,120,72,0.3)] backdrop-blur-xl transition duration-300 hover:bg-white/65 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e48f6a]/60 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]"
    >
      {/* 마운트 전에는 빈 자리만 유지해 hydration 불일치 방지 */}
      <span className="block h-5 w-5 leading-5">{dark === null ? "" : dark ? "☀️" : "🌙"}</span>
    </button>
  );
}

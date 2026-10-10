import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function ProfileHeader({ name, bio, avatarUrl }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 흰 테두리 + 두 겹 그림자로 살짝 떠 있는 느낌 */}
      <div className="relative h-28 w-28 rounded-full bg-white/70 p-1 shadow-[0_1px_2px_rgba(74,60,51,0.08),0_12px_32px_-8px_rgba(196,120,72,0.35)] ring-1 ring-white/80 dark:bg-white/10 dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)] dark:ring-white/10 sm:h-32 sm:w-32">
        <div className="relative h-full w-full overflow-hidden rounded-full">
          {avatarUrl ? (
            <Image src={avatarUrl} alt={`${name} 프로필 사진`} fill sizes="128px" className="object-cover" priority />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#ffd9b8] via-[#f6b48c] to-[#e48f6a] text-4xl font-semibold text-white">
              {name.charAt(0)}
            </div>
          )}
          {/* 위쪽 하이라이트로 입체감 */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/25 to-transparent to-50%" />
        </div>
      </div>
      <h1 className="mt-6 text-[22px] font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-[18rem] text-[15px] leading-relaxed text-cocoa-500 dark:text-stone-400">{bio}</p>
    </header>
  );
}

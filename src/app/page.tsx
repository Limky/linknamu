import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[100dvh] w-full max-w-[440px] flex-col px-6 pb-10 pt-6 sm:px-8 sm:pt-10">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="mt-6 sm:mt-8">
        <ProfileHeader name={profile.name} bio={profile.bio} avatarUrl={profile.avatarUrl} />
      </div>

      <div className="mt-12">
        <LinkList links={profile.links} />
      </div>

      <footer className="mt-auto pt-16 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-cocoa-400/80 dark:text-stone-500">
        링크나무
      </footer>
    </main>
  );
}

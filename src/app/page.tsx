import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-10">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="mt-4">
        <ProfileHeader name={profile.name} bio={profile.bio} avatarUrl={profile.avatarUrl} />
      </div>

      <div className="mt-10">
        <LinkList links={profile.links} />
      </div>

      <footer className="mt-auto pt-12 text-center text-xs text-gray-400">링크나무</footer>
    </main>
  );
}

import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function ProfileHeader({ name, bio, avatarUrl }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-md dark:border-gray-800 sm:h-40 sm:w-40">
        {avatarUrl ? (
          <Image src={avatarUrl} alt={`${name} 프로필 사진`} fill sizes="160px" className="object-cover" priority />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-400 to-teal-600 text-5xl font-bold text-white">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h1 className="mt-5 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{bio}</p>
    </header>
  );
}

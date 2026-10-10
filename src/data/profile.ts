export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
};

export type Profile = {
  name: string;
  bio: string;
  // public/ 아래 이미지 경로. 비워두면 이름 첫 글자로 대체 표시
  avatarUrl?: string;
  links: LinkItem[];
};

// TODO: 실제 프로필 정보와 링크로 교체하세요
export const profile: Profile = {
  name: "임경호",
  bio: "한 줄 소개를 입력하세요",
  avatarUrl: undefined,
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/", description: "코드 저장소" },
    { id: "blog", title: "블로그", url: "https://example.com/blog", description: "기술 블로그" },
    { id: "instagram", title: "Instagram", url: "https://instagram.com/", description: "일상 기록" },
  ],
};

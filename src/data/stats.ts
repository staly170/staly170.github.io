export interface Stat {
  num: string;
  label: string;
  sub: string;
}

export const stats: Stat[] = [
  { num: "12+", label: "개발 경력", sub: "실무 연차" },
  { num: "7+", label: "출시 프로덕트", sub: "운영 서비스" },
  { num: "30만+", label: "누적 사용자", sub: "서비스 임팩트" },
];

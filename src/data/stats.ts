export interface Stat {
  num: string;
  label: string;
  sub: string;
}

export const stats: Stat[] = [
  { num: "12+", label: "개발 경력", sub: "실무 연차" },
  { num: "10+", label: "출시 프로덕트", sub: "스토어 출시" },
  { num: "50만+", label: "누적 다운로드", sub: "서비스 임팩트" },
];

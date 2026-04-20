import type { ProjectData } from "@/components/ProjectModal";

export const startupProjects: ProjectData[] = [
  {
    img: "",
    title: "모두의쿠폰",
    cat: "Startup",
    color: "from-zinc-900 to-stone-800",
    period: "2017.08 ~ 2018.10",
    role: "CEO · Android 앱 설계·개발·배포·운영",
    desc: "사용자 위치 기반으로 주변 할인쿠폰을 검색하고 오프라인 매장에서 사용할 수 있는 O2O 할인쿠폰 플랫폼입니다.",
    highlights: [
      "기획부터 개발·배포·운영까지 전 과정을 직접 주도한 창업 프로젝트",
      "Google Maps 기반 반경 검색 쿠폰 필터링 — 3km 이내 0.5초 응답",
      "서비스 출시 6개월 만에 MAU 5,000 달성, 50여 개 오프라인 매장 제휴",
      "KIBO 기술 보증 기금 기술성 평가 85점, 보증서 획득",
      "투자 유치 IR 발표 기술 부문 설명",
    ],
    tags: ["Java", "MVC", "Google Maps", "Location Services", "Retrofit", "Firebase"],
    team: "CEO / 1인 개발",
    store: "Google Play",
    duties: ["기획", "설계", "개발", "운영", "IR"],
    status: "서비스 종료",
    projectType: "창업 프로젝트",
    achievement: "MAU 5,000 달성, 50여 개 매장 제휴, KIBO 기술보증 획득",
  },
];

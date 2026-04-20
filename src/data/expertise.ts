export interface Expertise {
  num: string;
  title: string;
  desc: string;
}

export const expertise: Expertise[] = [
  { num: "01", title: "Android 네이티브 개발", desc: "Kotlin · Java로 12년간 앱을 만들어 왔습니다. 복잡한 비즈니스 로직부터 금융 결제 모듈 연동까지 네이티브 레벨에서 직접 구현해 본 경험이 있습니다." },
  { num: "02", title: "Flutter 크로스플랫폼", desc: "Flutter 단일 코드베이스로 iOS · Android를 동시에 출시해 봤습니다. 양 플랫폼을 한번에 커버하면서 개발 기간과 유지보수 비용을 크게 줄인 경험이 있습니다." },
  { num: "03", title: "설계 · 구조 · 현대화", desc: "MVVM + Clean Architecture · Multi-Module 설계, Java → Kotlin 마이그레이션 등 10개 이상의 서비스를 설계하고 운영하면서 장기적으로 유지보수 가능한 구조를 고민해 왔습니다." },
  { num: "04", title: "핀테크 · 보안", desc: "여신금융협회·TTA 보안 심사 대응과 금융감독원 PG 라이선스 취득까지 금융 규제 전반을 경험했습니다. 보안 SDK 통합, KICC POS 결제 모듈 연동, 오픈뱅킹 API 연동 등 까다로운 금융 요구사항을 직접 해결해 왔습니다." },
  { num: "05", title: "AI 활용 개발", desc: "Claude Code를 실제 개발에 활용하고 있습니다. 사이드 프로젝트를 3주 만에 출시했고, 이 포트폴리오 사이트도 Claude Code로 만들었습니다." },
  { num: "06", title: "기술 리더십", desc: "3~5명 규모의 모바일 파트를 리드하면서 아키텍처 결정, 코드 리뷰, 기술 방향 잡는 일을 해왔습니다. 기획 · 디자인 · 백엔드 · QA 팀과 직접 소통하며 출시까지 함께 진행했습니다." },
];

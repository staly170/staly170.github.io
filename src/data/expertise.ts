export interface Expertise {
  num: string;
  title: string;
  desc: string;
}

export const expertise: Expertise[] = [
  { num: "01", title: "네이티브 앱 개발", desc: "Kotlin/Java 기반 Android 앱의 설계부터 스토어 출시까지 전 과정을 주도합니다." },
  { num: "02", title: "아키텍처 설계", desc: "MVVM + Clean Architecture 기반의 확장 가능하고 테스트 용이한 구조를 설계합니다." },
  { num: "03", title: "금융 보안 통합", desc: "금융감독원 기준을 충족하는 보안 SDK 통합 및 인증 시스템을 구축합니다." },
  { num: "04", title: "결제 시스템 구축", desc: "블루투스 POS 단말기 연동부터 오픈뱅킹 API까지 결제 인프라를 구현합니다." },
  { num: "05", title: "크로스플랫폼 개발", desc: "Flutter 기반 단일 코드베이스로 iOS/Android 동시 출시를 실현합니다." },
  { num: "06", title: "빌드 & 배포 자동화", desc: "Product Flavor 기반 멀티 환경 분리와 자동화된 배포 파이프라인을 구축합니다." },
];

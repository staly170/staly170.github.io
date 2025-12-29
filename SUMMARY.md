# Jekyll 포트폴리오 템플릿 - 프로젝트 요약

## 📦 제공 내용

이 템플릿은 Jekyll과 Minimal Mistakes 테마를 활용한 완전한 개발자 포트폴리오 사이트입니다.

## 🎯 주요 특징

✅ **완전한 구조**: 바로 사용 가능한 전체 디렉토리 구조
✅ **샘플 콘텐츠**: 3개의 포트폴리오 프로젝트 + 2개의 블로그 포스트
✅ **상세 문서**: README, QUICKSTART, DIRECTORY_STRUCTURE 가이드
✅ **커스터마이징**: 색상, 폰트, 레이아웃 커스텀 CSS 포함
✅ **반응형 디자인**: 모든 디바이스에서 완벽하게 작동
✅ **SEO 최적화**: robots.txt, sitemap, meta tags 설정

## 📁 파일 구조

```
jekyll-portfolio-template/
├── _config.yml                    # 전역 설정 (필수 수정)
├── Gemfile                        # Ruby 의존성
├── index.md                       # 홈페이지
├── README.md                      # 상세 문서
├── QUICKSTART.md                  # 빠른 시작 가이드
├── DIRECTORY_STRUCTURE.md         # 디렉토리 설명
│
├── _data/
│   └── navigation.yml             # 메뉴 설정
│
├── _pages/
│   ├── about.md                   # 자기소개 (수정 필요)
│   ├── portfolio.md               # 포트폴리오 목록
│   ├── blog.md                    # 블로그 목록
│   └── 404.md                     # 404 페이지
│
├── _posts/                        # 블로그 포스트 (2개 샘플)
│   ├── 2024-12-29-jekyll-portfolio-guide.md
│   └── 2024-12-20-react-performance-guide.md
│
├── _portfolio/                    # 포트폴리오 (3개 샘플)
│   ├── project-ecommerce.md
│   ├── project-weather.md
│   └── project-task-manager.md
│
└── assets/
    ├── css/
    │   └── main.scss              # 커스텀 CSS
    └── images/                    # 이미지 폴더 (이미지 추가 필요)
```

## 🚀 빠른 시작 (5분)

### 1. GitHub Repository 생성
- Repository 이름: `yourusername.github.io`
- Public으로 설정

### 2. 파일 업로드
이 폴더의 모든 파일을 GitHub Repository에 업로드

### 3. GitHub Pages 활성화
- Settings → Pages → Source: "main" branch

### 4. 개인 정보 수정
다음 파일들을 수정하세요:
- `_config.yml` - 이름, 이메일, SNS 링크
- `_pages/about.md` - 자기소개
- `index.md` - 메인 페이지 내용

### 5. 이미지 추가
`assets/images/` 폴더에 추가:
- `profile.jpg` - 프로필 사진
- `header-bg.jpg` - 헤더 배경
- 프로젝트 썸네일 이미지들

## 📝 포함된 샘플 콘텐츠

### 포트폴리오 프로젝트 (3개)
1. **E-Commerce 웹사이트** - React, Node.js 풀스택 프로젝트
2. **날씨 예보 앱** - Vue.js, OpenWeather API
3. **Task Management App** - React Native 모바일 앱

### 블로그 포스트 (2개)
1. **Jekyll로 GitHub Pages 포트폴리오 만들기**
2. **React 성능 최적화 완벽 가이드**

## 🎨 커스터마이징

### 색상 변경
`assets/css/main.scss` 파일:
```scss
$primary-color: #6f42c1;  // 원하는 색상으로 변경
```

### 테마 스킨 변경
`_config.yml` 파일:
```yaml
minimal_mistakes_skin: "default"
# 옵션: air, aqua, contrast, dark, dirt, neon, mint, plum, sunrise
```

### 메뉴 수정
`_data/navigation.yml` 파일 편집

## 📚 제공된 문서

### README.md
- 전체 프로젝트 설명
- 설치 및 사용 방법
- 기술 스택
- 문제 해결 가이드
- 참고 자료

### QUICKSTART.md
- 5분 빠른 시작 가이드
- 단계별 설정 방법
- 체크리스트
- FAQ

### DIRECTORY_STRUCTURE.md
- 전체 디렉토리 구조 설명
- 각 파일/폴더의 역할
- 파일 추가 방법
- 권장 워크플로우

## 🔧 필수 수정 사항

배포 전 반드시 수정해야 할 항목:

### _config.yml
```yaml
# 수정 필요
name: "홍길동"                           → 본인 이름
title: "개발자 포트폴리오"                → 본인 타이틀
url: "https://yourusername.github.io"    → 본인 URL
repository: "yourusername/yourusername.github.io"  → 본인 저장소

author:
  name: "홍길동"                         → 본인 이름
  avatar: "/assets/images/profile.jpg"   → 프로필 사진 추가
  bio: "웹 개발자"                       → 본인 소개
  email: "your.email@example.com"        → 본인 이메일
  links:
    - url: "https://github.com/yourusername"  → 본인 GitHub
    - url: "https://linkedin.com/in/yourusername"  → 본인 LinkedIn
```

### _pages/about.md
- 모든 내용을 본인의 정보로 수정
- 경력, 학력, 기술 스택 업데이트

### index.md
- 프로젝트 소개 내용 수정
- 프로젝트 링크 업데이트

## 📋 배포 체크리스트

- [ ] Repository 이름이 `username.github.io` 형식
- [ ] GitHub Pages 활성화됨
- [ ] _config.yml 수정 완료
- [ ] profile.jpg 추가
- [ ] about.md 수정 완료
- [ ] 최소 1개 이상의 실제 프로젝트로 교체
- [ ] 샘플 블로그 포스트 삭제 또는 교체
- [ ] 모든 링크 작동 확인
- [ ] 모바일에서 확인

## 🎓 학습 리소스

### 포함된 튜토리얼
- Jekyll 기본 사용법 (블로그 포스트)
- React 성능 최적화 (블로그 포스트)
- 상세한 코드 예제

### 외부 리소스
- [Jekyll 공식 문서](https://jekyllrb.com/docs/)
- [Minimal Mistakes 가이드](https://mmistakes.github.io/minimal-mistakes/)
- [GitHub Pages 문서](https://docs.github.com/en/pages)

## 💡 다음 단계

1. **콘텐츠 추가**
   - 실제 프로젝트로 샘플 교체
   - 블로그 포스트 작성
   - 이미지 업로드

2. **커스터마이징**
   - 색상/테마 변경
   - 레이아웃 조정
   - 폰트 변경

3. **최적화**
   - 이미지 최적화
   - SEO 설정
   - Google Analytics 연동

4. **홍보**
   - SNS에 공유
   - 이력서에 링크 추가
   - 개발 커뮤니티에 소개

## ⚠️ 주의사항

- 샘플 콘텐츠는 예시입니다. 본인의 실제 정보로 교체하세요
- 이미지 파일은 포함되어 있지 않습니다. 직접 추가해야 합니다
- 로컬 테스트 시 Ruby와 Jekyll 설치 필요
- GitHub Pages 반영까지 5-10분 소요

## 🤝 도움말

문제가 발생하거나 궁금한 점이 있다면:
1. README.md의 "문제 해결" 섹션 확인
2. QUICKSTART.md의 FAQ 확인
3. GitHub Issues 확인

## 📄 라이선스

- 이 템플릿: 자유롭게 사용 가능
- Minimal Mistakes 테마: MIT License

## ✨ 기능 요약

- ✅ 반응형 디자인
- ✅ 블로그 기능
- ✅ 포트폴리오 showcase
- ✅ SEO 최적화
- ✅ 소셜 미디어 연동
- ✅ 코드 하이라이팅
- ✅ 검색 기능 (옵션)
- ✅ 댓글 기능 (옵션)
- ✅ Google Analytics (옵션)

---

🚀 **이제 시작하세요!**

QUICKSTART.md를 따라 5분 안에 포트폴리오를 배포할 수 있습니다.

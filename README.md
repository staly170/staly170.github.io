# 개발자 포트폴리오 웹사이트

Jekyll과 Minimal Mistakes 테마를 활용한 개인 포트폴리오 사이트입니다.

## 🌐 사이트 URL

[https://yourusername.github.io](https://yourusername.github.io)

## 📋 목차

- [기능](#기능)
- [기술 스택](#기술-스택)
- [설치 방법](#설치-방법)
- [사용 방법](#사용-방법)
- [디렉토리 구조](#디렉토리-구조)
- [커스터마이징](#커스터마이징)
- [배포](#배포)
- [라이선스](#라이선스)

## ✨ 기능

- 📱 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 🎨 깔끔하고 전문적인 UI/UX
- 📝 Markdown 기반 블로그
- 💼 포트폴리오 프로젝트 showcase
- 🔍 SEO 최적화
- 📊 Google Analytics 연동 (선택사항)
- 🌙 다크모드 지원 (예정)

## 🛠 기술 스택

- **Static Site Generator**: Jekyll 4.3.2
- **Theme**: Minimal Mistakes 4.24.0
- **Deployment**: GitHub Pages
- **Markup**: HTML5, Markdown
- **Styling**: SCSS, CSS3
- **Version Control**: Git

## 📦 설치 방법

### 1. Repository Clone

```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

### 2. Ruby 설치

#### Windows
[RubyInstaller](https://rubyinstaller.org/) 다운로드 및 설치

#### macOS
```bash
brew install ruby
```

#### Linux (Ubuntu/Debian)
```bash
sudo apt-get install ruby-full
```

### 3. Jekyll 및 의존성 설치

```bash
gem install jekyll bundler
bundle install
```

### 4. 로컬 서버 실행

```bash
bundle exec jekyll serve
```

브라우저에서 `http://localhost:4000` 접속

## 🚀 사용 방법

### 블로그 포스트 작성

1. `_posts/` 폴더에 새 파일 생성
2. 파일명 형식: `YYYY-MM-DD-title.md`

```markdown
---
title: "포스트 제목"
date: 2024-12-29
categories:
  - Category
tags:
  - tag1
  - tag2
---

내용 작성...
```

### 포트폴리오 프로젝트 추가

1. `_portfolio/` 폴더에 새 파일 생성
2. 프로젝트 정보 작성

```markdown
---
title: "프로젝트 이름"
excerpt: "프로젝트 간단 설명"
header:
  teaser: /assets/images/project-thumb.jpg
---

프로젝트 상세 설명...
```

### About 페이지 수정

`_pages/about.md` 파일을 편집하여 자기소개 내용 수정

## 📁 디렉토리 구조

```
yourusername.github.io/
├── _config.yml          # 사이트 전역 설정
├── _data/
│   └── navigation.yml   # 네비게이션 메뉴
├── _posts/              # 블로그 포스트
│   ├── 2024-12-29-post1.md
│   └── 2024-12-20-post2.md
├── _pages/              # 정적 페이지
│   ├── about.md
│   ├── portfolio.md
│   ├── blog.md
│   └── 404.md
├── _portfolio/          # 포트폴리오 프로젝트
│   ├── project1.md
│   ├── project2.md
│   └── project3.md
├── assets/
│   ├── images/         # 이미지 파일
│   ├── css/
│   │   └── main.scss   # 커스텀 CSS
│   └── js/
├── index.md            # 홈페이지
├── Gemfile             # Ruby 의존성
└── README.md
```

## 🎨 커스터마이징

### 색상 변경

`assets/css/main.scss` 파일에서 색상 변수 수정:

```scss
$primary-color: #6f42c1;  // 원하는 색상으로 변경
$link-color: $primary-color;
```

### 테마 스킨 변경

`_config.yml` 파일에서:

```yaml
minimal_mistakes_skin: "default"
# 옵션: "air", "aqua", "contrast", "dark", "dirt", "neon", "mint", "plum", "sunrise"
```

### 네비게이션 메뉴 수정

`_data/navigation.yml` 파일 편집

### 프로필 정보 수정

`_config.yml` 파일의 `author` 섹션 편집

## 🌍 배포

### GitHub Pages 자동 배포

1. GitHub에 push:

```bash
git add .
git commit -m "Update content"
git push origin main
```

2. 5-10분 후 `https://yourusername.github.io` 에서 확인

### 커스텀 도메인 설정 (선택사항)

1. Repository Settings → Pages → Custom domain
2. 도메인 입력 및 저장
3. DNS 설정에서 CNAME 레코드 추가

## 📝 주요 설정 파일

### _config.yml

사이트의 전역 설정을 관리합니다:
- 사이트 제목, 설명
- 작성자 정보
- SNS 링크
- 플러그인 설정
- SEO 설정

### Gemfile

Ruby gem 의존성을 관리합니다.

## 🔧 문제 해결

### 사이트가 표시되지 않을 때

1. GitHub Settings → Pages에서 Source 확인
2. `_config.yml`의 url과 baseurl 확인
3. 5-10분 정도 대기

### 이미지가 로드되지 않을 때

- 이미지 경로 확인: `/assets/images/filename.jpg`
- 파일이 commit되었는지 확인
- 대소문자 정확히 일치하는지 확인

### 로컬에서는 되는데 GitHub Pages에서 안 될 때

- `_config.yml`의 플러그인이 GitHub Pages 지원 목록에 있는지 확인
- [지원 플러그인 목록](https://pages.github.com/versions/)

## 📚 참고 자료

- [Jekyll 공식 문서](https://jekyllrb.com/docs/)
- [Minimal Mistakes 문서](https://mmistakes.github.io/minimal-mistakes/)
- [GitHub Pages 가이드](https://docs.github.com/en/pages)
- [Markdown 가이드](https://www.markdownguide.org/)

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

Minimal Mistakes 테마는 MIT 라이선스를 따릅니다. 자세한 내용은 [여기](https://github.com/mmistakes/minimal-mistakes/blob/master/LICENSE)를 참조하세요.

## 🤝 기여

버그 리포트나 개선 제안은 이슈로 등록해주세요!

## 👤 작성자

**홍길동**

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- LinkedIn: [yourusername](https://linkedin.com/in/yourusername)

---

⭐ 이 프로젝트가 도움이 되었다면 star를 눌러주세요!

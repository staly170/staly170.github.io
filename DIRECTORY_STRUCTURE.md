# Jekyll 포트폴리오 프로젝트 디렉토리 구조

```
jekyll-portfolio/
│
├── _config.yml                 # Jekyll 전역 설정 파일
├── Gemfile                     # Ruby 의존성 관리
├── index.md                    # 홈페이지 (메인 페이지)
├── robots.txt                  # 검색엔진 크롤러 설정
├── README.md                   # 프로젝트 설명 문서
├── QUICKSTART.md              # 빠른 시작 가이드
├── .gitignore                  # Git 제외 파일 목록
│
├── _data/                      # 사이트 데이터 파일
│   └── navigation.yml          # 네비게이션 메뉴 설정
│
├── _pages/                     # 정적 페이지
│   ├── about.md               # 자기소개 페이지
│   ├── portfolio.md           # 포트폴리오 목록 페이지
│   ├── blog.md                # 블로그 목록 페이지
│   └── 404.md                 # 404 에러 페이지
│
├── _posts/                     # 블로그 포스트
│   ├── 2024-12-29-jekyll-portfolio-guide.md
│   └── 2024-12-20-react-performance-guide.md
│
├── _portfolio/                 # 포트폴리오 프로젝트
│   ├── project-ecommerce.md
│   ├── project-weather.md
│   └── project-task-manager.md
│
├── _includes/                  # 재사용 가능한 HTML 조각
│   └── (테마에서 제공)
│
├── _layouts/                   # 페이지 레이아웃 템플릿
│   └── (테마에서 제공)
│
└── assets/                     # 정적 파일
    ├── images/                # 이미지 파일
    │   ├── profile.jpg        # 프로필 사진
    │   ├── header-bg.jpg      # 헤더 배경
    │   ├── project1-thumb.jpg
    │   ├── project2-thumb.jpg
    │   └── ...
    │
    ├── css/                   # 스타일시트
    │   └── main.scss          # 커스텀 CSS
    │
    └── js/                    # JavaScript 파일
        └── (필요시 추가)

```

## 주요 파일 및 폴더 설명

### 루트 레벨 파일

#### _config.yml
- Jekyll 사이트의 전역 설정
- 사이트 제목, URL, 작성자 정보 등 포함
- 플러그인 및 테마 설정
- **반드시 수정해야 할 파일**

#### Gemfile
- Ruby gem 의존성 관리
- Jekyll 및 필요한 플러그인 목록

#### index.md
- 사이트의 홈페이지
- 메인 화면에 표시될 내용
- 프로젝트 소개, 주요 포트폴리오 등

#### robots.txt
- 검색엔진 크롤러 가이드
- SEO 최적화에 사용

### _data/
사이트에서 사용하는 데이터 파일을 저장합니다.

#### navigation.yml
- 상단 네비게이션 메뉴 설정
- 메뉴 이름과 링크 정의

### _pages/
정적 페이지를 저장합니다.

#### about.md
- 자기소개 페이지
- 경력, 기술 스택, 학력 등

#### portfolio.md
- 포트폴리오 프로젝트 목록 페이지
- _portfolio 폴더의 내용을 자동으로 표시

#### blog.md
- 블로그 포스트 목록 페이지
- _posts 폴더의 내용을 자동으로 표시

#### 404.md
- 페이지를 찾을 수 없을 때 표시
- 사용자 친화적인 에러 메시지

### _posts/
블로그 포스트를 저장합니다.

**파일명 규칙**: `YYYY-MM-DD-title.md`

예시:
- `2024-12-29-jekyll-portfolio-guide.md`
- `2024-12-20-react-performance-guide.md`

**Front Matter 필수 항목**:
```yaml
---
title: "포스트 제목"
date: 2024-12-29
categories:
  - Category
tags:
  - tag1
  - tag2
---
```

### _portfolio/
포트폴리오 프로젝트를 저장합니다.

파일명은 자유롭게 지정 가능:
- `project-name.md`

**Front Matter 필수 항목**:
```yaml
---
title: "프로젝트 이름"
excerpt: "간단한 설명"
header:
  teaser: /assets/images/thumb.jpg
---
```

### _includes/
재사용 가능한 HTML 조각을 저장합니다.
- Minimal Mistakes 테마가 제공
- 커스텀 include 파일 추가 가능

### _layouts/
페이지 레이아웃 템플릿을 저장합니다.
- Minimal Mistakes 테마가 제공
- 기본 레이아웃: single, splash, home, archive 등

### assets/
정적 파일을 저장합니다.

#### assets/images/
모든 이미지 파일을 저장합니다.

**권장 이미지**:
- `profile.jpg` - 프로필 사진 (500x500px)
- `header-bg.jpg` - 헤더 배경 (1920x600px)
- `project-thumb.jpg` - 프로젝트 썸네일 (800x600px)
- `og-image.jpg` - SNS 공유 이미지 (1200x630px)

#### assets/css/
스타일시트 파일을 저장합니다.

#### main.scss
- 커스텀 CSS
- 색상, 폰트, 레이아웃 커스터마이징

#### assets/js/
JavaScript 파일을 저장합니다 (필요시).

## 빌드 후 생성되는 폴더 (Git에서 제외)

```
_site/                  # Jekyll이 생성한 정적 사이트
.sass-cache/           # Sass 캐시
.jekyll-cache/         # Jekyll 캐시
.jekyll-metadata       # Jekyll 메타데이터
vendor/                # Bundler 의존성
```

이 폴더들은 `.gitignore`에 포함되어 Git에서 추적되지 않습니다.

## 파일 추가 가이드

### 블로그 포스트 추가
1. `_posts/` 폴더에 새 파일 생성
2. 파일명: `YYYY-MM-DD-title.md`
3. Front Matter 작성
4. Markdown으로 내용 작성

### 포트폴리오 프로젝트 추가
1. `_portfolio/` 폴더에 새 파일 생성
2. 파일명: `project-name.md`
3. Front Matter 작성
4. 프로젝트 상세 설명 작성

### 이미지 추가
1. `assets/images/` 폴더에 이미지 업로드
2. Markdown에서 참조: `/assets/images/filename.jpg`
3. 최적화된 이미지 사용 (WebP 권장)

### 페이지 추가
1. `_pages/` 폴더에 새 파일 생성
2. Front Matter에 `permalink` 지정
3. `_data/navigation.yml`에 메뉴 추가

## 권장 워크플로우

1. **로컬에서 개발**
   ```bash
   bundle exec jekyll serve
   ```

2. **변경사항 확인**
   - http://localhost:4000 접속
   - 내용 확인 및 수정

3. **Git에 커밋**
   ```bash
   git add .
   git commit -m "Add new post"
   git push origin main
   ```

4. **배포 확인**
   - 5-10분 후 GitHub Pages에서 확인
   - https://yourusername.github.io

## 팁

- 이미지는 최적화하여 업로드 (TinyPNG, ImageOptim 등 사용)
- 파일명은 영문과 하이픈(-) 사용 권장
- Front Matter는 YAML 형식 준수
- 로컬에서 먼저 테스트 후 배포

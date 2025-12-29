---
title: "Jekyll로 GitHub Pages 포트폴리오 만들기"
date: 2024-12-29
categories:
  - Blog
  - Tutorial
tags:
  - Jekyll
  - GitHub Pages
  - Portfolio
toc: true
toc_sticky: true
header:
  teaser: /assets/images/blog1-teaser.jpg
---

## 들어가며

개발자라면 누구나 멋진 포트폴리오 사이트를 만들고 싶어 합니다. 하지만 처음부터 끝까지 직접 개발하려면 시간과 노력이 많이 들죠. 이번 글에서는 Jekyll과 GitHub Pages를 활용하여 무료로 포트폴리오 사이트를 만드는 방법을 소개합니다.

## GitHub Pages란?

GitHub Pages는 GitHub에서 제공하는 무료 정적 사이트 호스팅 서비스입니다.

### 장점
- **무료**: 호스팅 비용 0원
- **간편**: Git push만으로 자동 배포
- **빠름**: CDN을 통한 빠른 로딩
- **HTTPS**: 무료 SSL 인증서 제공
- **커스텀 도메인**: 본인 도메인 연결 가능

### 제약사항
- 정적 사이트만 가능 (서버 코드 실행 불가)
- Repository 크기 1GB 제한
- 월 대역폭 100GB 제한
- 시간당 빌드 10회 제한

## Jekyll이란?

Jekyll은 Ruby로 만들어진 정적 사이트 생성기입니다.

### 특징
- **Markdown 지원**: 블로그 글을 마크다운으로 작성
- **테마**: 다양한 무료 테마 사용 가능
- **플러그인**: 기능 확장 가능
- **GitHub Pages 기본 지원**: 별도 설정 없이 사용

## 시작하기

### 1. Repository 생성

GitHub에서 `username.github.io` 형식으로 repository를 생성합니다.

```bash
# 예시
yourname.github.io
```

### 2. 테마 선택

Minimal Mistakes 테마를 추천합니다.

```yaml
# _config.yml
remote_theme: "mmistakes/minimal-mistakes@4.24.0"
```

### 3. 기본 구조 만들기

```
yourname.github.io/
├── _config.yml
├── index.md
├── _posts/
├── _pages/
└── assets/
```

### 4. 첫 포스트 작성

`_posts/2024-12-29-first-post.md` 파일을 생성합니다.

```markdown
---
title: "첫 번째 포스트"
date: 2024-12-29
categories:
  - Blog
tags:
  - First
---

안녕하세요! 첫 번째 블로그 포스트입니다.
```

### 5. 배포

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

5-10분 후 `https://username.github.io`에서 확인할 수 있습니다!

## 커스터마이징 팁

### 색상 변경

`assets/css/main.scss` 파일을 생성하여 색상을 변경할 수 있습니다.

```scss
---
---

@import "minimal-mistakes/skins/{{ site.minimal_mistakes_skin | default: 'default' }}";
@import "minimal-mistakes";

// 커스텀 색상
$primary-color: #6f42c1;
$link-color: $primary-color;
```

### 프로필 이미지 추가

```yaml
# _config.yml
author:
  avatar: "/assets/images/profile.jpg"
```

### SNS 링크 추가

```yaml
# _config.yml
author:
  links:
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/username"
```

## 자주 발생하는 문제

### 1. 사이트가 표시되지 않을 때

- Settings → Pages에서 Source 확인
- 5-10분 정도 기다리기
- `_config.yml`의 url, baseurl 확인

### 2. 이미지가 안 보일 때

- 이미지 경로 확인: `/assets/images/filename.jpg`
- 대소문자 구분 확인
- 파일이 실제로 commit되었는지 확인

### 3. 한글 깨짐

```yaml
# _config.yml에 추가
encoding: utf-8
```

## 성능 최적화

### 이미지 최적화

```bash
# ImageOptim, TinyPNG 등 사용
# 권장 크기: 1200px 이하
```

### Lazy Loading

```html
<img src="image.jpg" loading="lazy" alt="설명">
```

### Code Splitting

Jekyll은 자동으로 CSS/JS를 최적화합니다.

## SEO 최적화

### 메타 태그

```yaml
# _config.yml
title: "개발자 포트폴리오"
description: "Full Stack Developer"
og_image: /assets/images/og-image.jpg
```

### Sitemap

```yaml
# _config.yml
plugins:
  - jekyll-sitemap
```

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://username.github.io/sitemap.xml
```

## 결론

Jekyll과 GitHub Pages를 활용하면 무료로 전문적인 포트폴리오 사이트를 만들 수 있습니다. 시간을 들여 커스터마이징하면 더욱 멋진 사이트를 만들 수 있습니다.

### 다음 단계

1. 프로젝트 추가하기
2. 블로그 꾸준히 작성하기
3. SEO 최적화하기
4. Google Analytics 연동하기

## 참고 자료

- [Jekyll 공식 문서](https://jekyllrb.com/docs/)
- [Minimal Mistakes 가이드](https://mmistakes.github.io/minimal-mistakes/)
- [GitHub Pages 문서](https://docs.github.com/en/pages)

질문이나 피드백은 댓글로 남겨주세요! 😊

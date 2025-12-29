# 빠른 시작 가이드

이 가이드를 따라하면 5분 안에 포트폴리오 사이트를 만들 수 있습니다!

## 1단계: GitHub Repository 생성

1. GitHub에 로그인
2. 새 Repository 생성
3. Repository 이름: `yourusername.github.io` (yourusername을 본인 GitHub 아이디로 변경)
4. Public으로 설정
5. Create repository 클릭

## 2단계: 파일 업로드

### 방법 A: GitHub 웹에서 직접 업로드

1. "uploading an existing file" 클릭
2. 이 폴더의 모든 파일을 드래그 앤 드롭
3. "Commit changes" 클릭

### 방법 B: Git 사용

```bash
# 1. Repository clone
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io

# 2. 이 폴더의 모든 파일 복사

# 3. Git에 추가 및 커밋
git add .
git commit -m "Initial commit"
git push origin main
```

## 3단계: GitHub Pages 활성화

1. Repository → Settings → Pages
2. Source: "Deploy from a branch" 선택
3. Branch: "main" 선택, 폴더: "/ (root)"
4. Save 클릭

## 4단계: 개인 정보 수정

다음 파일들을 수정하세요:

### _config.yml
```yaml
# 본인 정보로 변경
name: "홍길동"                    → 본인 이름
title: "개발자 포트폴리오"         → 본인 타이틀
url: "https://yourusername.github.io"  → 본인 URL
author:
  name: "홍길동"                  → 본인 이름
  bio: "웹 개발자"                → 본인 소개
  email: "your.email@example.com" → 본인 이메일
  links:
    - url: "https://github.com/yourusername"  → 본인 GitHub
```

### _pages/about.md
- 자기소개 내용 수정
- 경력, 학력, 기술 스택 수정

### index.md
- 메인 페이지 내용 수정

## 5단계: 이미지 추가

`assets/images/` 폴더에 다음 이미지들을 추가하세요:

필수:
- `profile.jpg` - 프로필 사진 (정사각형, 500x500px 권장)

선택사항:
- `header-bg.jpg` - 메인 헤더 배경 (1920x600px 권장)
- `project1-thumb.jpg` - 프로젝트 썸네일
- `project2-thumb.jpg`
- `project3-thumb.jpg`

## 6단계: 확인

5-10분 후 `https://yourusername.github.io` 접속!

## 다음 단계

### 콘텐츠 추가하기

1. **블로그 포스트 작성**
   - `_posts/` 폴더에 `YYYY-MM-DD-title.md` 파일 생성
   - 샘플 포스트를 참고하여 작성

2. **포트폴리오 프로젝트 추가**
   - `_portfolio/` 폴더에 새 `.md` 파일 생성
   - 기존 프로젝트 파일을 참고하여 작성

3. **About 페이지 업데이트**
   - `_pages/about.md` 파일 수정
   - 본인의 경력, 기술, 학력 추가

### 커스터마이징

1. **색상 변경**
   - `assets/css/main.scss` 파일에서 색상 수정

2. **테마 스킨 변경**
   - `_config.yml`에서 `minimal_mistakes_skin` 수정
   - 옵션: default, air, aqua, contrast, dark, dirt, neon, mint, plum, sunrise

3. **메뉴 수정**
   - `_data/navigation.yml` 파일 수정

## 팁

### 로컬에서 테스트하기 (선택사항)

더 빠른 개발을 위해 로컬에서 테스트할 수 있습니다:

```bash
# Ruby 설치 (한 번만)
# Windows: https://rubyinstaller.org/
# Mac: brew install ruby
# Linux: sudo apt-get install ruby-full

# Jekyll 설치 (한 번만)
gem install jekyll bundler

# 프로젝트 폴더에서
bundle install
bundle exec jekyll serve

# http://localhost:4000 접속
```

### 자주 묻는 질문

**Q: 사이트가 표시되지 않아요**
A: 5-10분 정도 기다려보세요. Settings → Pages에서 배포 상태 확인 가능

**Q: 이미지가 안 보여요**
A: 이미지 경로를 `/assets/images/filename.jpg` 형식으로 확인

**Q: 한글이 깨져요**
A: 파일을 UTF-8 인코딩으로 저장했는지 확인

**Q: 수정한 내용이 반영되지 않아요**
A: Git에 커밋하고 push 했는지 확인. 반영까지 5-10분 소요

## 체크리스트

배포 전 확인사항:
- [ ] Repository 이름이 `yourusername.github.io` 형식인가요?
- [ ] GitHub Pages가 활성화되어 있나요?
- [ ] _config.yml의 모든 정보를 수정했나요?
- [ ] 프로필 이미지를 추가했나요?
- [ ] About 페이지를 수정했나요?
- [ ] 최소 1개 이상의 포트폴리오 프로젝트를 추가했나요?

## 도움이 필요하신가요?

- 📖 [전체 README 문서](README.md) 참고
- 🐛 이슈 발생 시 GitHub Issues에 등록
- 💬 질문은 Discussion에 남겨주세요

---

행운을 빕니다! 🚀

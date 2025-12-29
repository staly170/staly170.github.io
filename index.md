---
layout: splash
permalink: /
hidden: true
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/header-bg.jpg
  actions:
    - label: "<i class='fas fa-download'></i> 이력서 다운로드"
      url: "/assets/resume.pdf"
excerpt: >
  안녕하세요! 웹 개발에 열정을 가진<br />
  <small><strong>Full Stack Developer</strong></small><br />
  홍길동입니다.
feature_row:
  - image_path: /assets/images/project1-thumb.jpg
    alt: "프로젝트 1"
    title: "E-Commerce 웹사이트"
    excerpt: "React와 Node.js를 활용한 풀스택 쇼핑몰 프로젝트. Redux를 통한 상태관리와 JWT 인증을 구현했습니다."
    url: "/portfolio/project-ecommerce/"
    btn_class: "btn--primary"
    btn_label: "자세히 보기"
  - image_path: /assets/images/project2-thumb.jpg
    alt: "프로젝트 2"
    title: "날씨 예보 앱"
    excerpt: "OpenWeather API를 활용한 실시간 날씨 정보 제공 앱. Vue.js와 Vuex로 개발했습니다."
    url: "/portfolio/project-weather/"
    btn_class: "btn--primary"
    btn_label: "자세히 보기"
  - image_path: /assets/images/project3-thumb.jpg
    alt: "프로젝트 3"
    title: "Task Management App"
    excerpt: "React Native로 개발한 크로스 플랫폼 할 일 관리 앱. Firebase를 활용한 실시간 동기화 구현."
    url: "/portfolio/project-task-manager/"
    btn_class: "btn--primary"
    btn_label: "자세히 보기"
feature_row2:
  - image_path: /assets/images/skills.jpg
    alt: "기술 스택"
    title: "기술 스택 & 경험"
    excerpt: '**Frontend**: React, Vue.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Sass<br />
    **Backend**: Node.js, Express, Python, Django<br />
    **Database**: MongoDB, PostgreSQL, MySQL<br />
    **DevOps**: Git, Docker, AWS, CI/CD<br />
    **Tools**: VS Code, Figma, Postman, Jira'
    url: "/about/"
    btn_class: "btn--primary"
    btn_label: "더 알아보기"
---

{% include feature_row id="intro" type="center" %}

## 주요 프로젝트
{: .text-center}

{% include feature_row %}

{% include feature_row id="feature_row2" type="left" %}

## 최근 블로그 포스트
{: .text-center}

<div class="grid__wrapper">
  {% for post in site.posts limit:3 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

<div style="text-align: center; margin-top: 2em;">
  <a href="/blog/" class="btn btn--primary">블로그 더보기</a>
</div>

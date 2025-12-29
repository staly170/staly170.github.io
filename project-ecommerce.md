---
title: "E-Commerce 웹사이트"
excerpt: "React와 Node.js를 활용한 풀스택 쇼핑몰 프로젝트"
header:
  image: /assets/images/project1-header.jpg
  teaser: /assets/images/project1-thumb.jpg
sidebar:
  - title: "역할"
    text: "Full Stack Developer"
  - title: "기간"
    text: "2023.06 ~ 2023.09 (3개월)"
  - title: "기술 스택"
    text: "React, Redux, Node.js, Express, MongoDB, JWT"
  - title: "링크"
    text: "[GitHub](https://github.com/yourusername/ecommerce) | [Demo](https://demo.example.com)"
gallery:
  - url: /assets/images/project1-1.jpg
    image_path: /assets/images/project1-1.jpg
    alt: "메인 페이지"
  - url: /assets/images/project1-2.jpg
    image_path: /assets/images/project1-2.jpg
    alt: "상품 상세 페이지"
  - url: /assets/images/project1-3.jpg
    image_path: /assets/images/project1-3.jpg
    alt: "장바구니"
---

## 프로젝트 개요

사용자 친화적인 인터페이스와 안전한 결제 시스템을 갖춘 풀스택 E-Commerce 웹사이트입니다. React를 사용한 SPA 구조로 빠른 페이지 전환을 제공하며, Redux를 통한 효율적인 상태 관리를 구현했습니다.

## 주요 기능

### 사용자 기능
- **회원가입 & 로그인**: JWT 기반 인증 시스템
- **상품 검색 & 필터링**: 카테고리, 가격, 평점 기준 필터링
- **장바구니**: 실시간 장바구니 업데이트 및 수량 조절
- **위시리스트**: 관심 상품 저장 기능
- **주문 내역**: 사용자별 주문 이력 관리
- **리뷰 작성**: 별점 및 텍스트 리뷰 작성

### 관리자 기능
- **상품 관리**: CRUD 기능 (생성, 조회, 수정, 삭제)
- **주문 관리**: 주문 상태 업데이트 및 배송 추적
- **사용자 관리**: 회원 정보 조회 및 관리
- **대시보드**: 매출, 주문, 방문자 통계

## 기술적 구현

### Frontend
```javascript
// Redux를 활용한 전역 상태 관리
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// 커스텀 Hook으로 재사용 가능한 로직 분리
const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  
  const addToCart = (product) => {
    dispatch(addCartItem(product));
  };
  
  return { cart, addToCart };
};
```

### Backend
```javascript
// Express와 MongoDB를 활용한 RESTful API
router.post('/api/products', auth, admin, async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// JWT 인증 미들웨어
const auth = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded._id);
  req.user = user;
  next();
};
```

## 문제 해결 과정

### 1. 성능 최적화
**문제**: 상품 목록 페이지에서 많은 이미지로 인한 느린 로딩 속도

**해결**:
- React.lazy()와 Suspense를 활용한 코드 스플리팅
- 이미지 lazy loading 구현
- 무한 스크롤을 통한 페이지네이션
- 결과: 초기 로딩 시간 40% 감소

### 2. 상태 관리 복잡도
**문제**: Props drilling으로 인한 컴포넌트 간 데이터 전달의 복잡성

**해결**:
- Redux를 도입하여 전역 상태 관리
- Redux Thunk를 활용한 비동기 액션 처리
- 결과: 코드 가독성 향상 및 유지보수성 개선

### 3. 보안 이슈
**문제**: 결제 정보 및 개인정보 보안

**해결**:
- HTTPS 적용
- JWT 토큰 기반 인증
- 비밀번호 bcrypt 해싱
- 환경변수를 통한 민감 정보 관리
- XSS 및 CSRF 방지 조치

## 성과

- 📈 **성능**: Lighthouse 점수 90점 이상 달성
- 🚀 **배포**: AWS EC2에 배포, PM2로 프로세스 관리
- 👥 **사용자**: 베타 테스트 기간 100명 이상 사용
- ⭐ **피드백**: 사용자 만족도 4.5/5.0

## 배운 점

1. **풀스택 개발 경험**: 프론트엔드부터 백엔드, 데이터베이스까지 전체 개발 사이클 경험
2. **상태 관리**: Redux를 활용한 복잡한 상태 관리 방법 습득
3. **보안**: 웹 애플리케이션 보안의 중요성과 구현 방법 학습
4. **성능 최적화**: 실제 사용자 경험을 개선하는 최적화 기법 적용

## 개선 사항

향후 다음과 같은 기능을 추가할 계획입니다:
- 소셜 로그인 (Google, Kakao)
- 실시간 채팅 상담 기능
- 추천 알고리즘 구현
- PWA 적용으로 모바일 앱처럼 사용

{% include gallery caption="프로젝트 스크린샷" %}

## 관련 링크

- [GitHub Repository](https://github.com/yourusername/ecommerce)
- [Live Demo](https://demo.example.com)
- [기술 블로그 포스트](/blog/ecommerce-project/)

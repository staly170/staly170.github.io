---
title: "React 성능 최적화 완벽 가이드"
date: 2024-12-20
categories:
  - Development
  - React
tags:
  - React
  - Performance
  - Optimization
toc: true
toc_sticky: true
header:
  teaser: /assets/images/blog2-teaser.jpg
---

## 들어가며

React 애플리케이션이 느려지는 경험을 해보셨나요? 이번 글에서는 실제 프로젝트에서 적용했던 React 성능 최적화 기법들을 공유합니다.

## 성능 측정하기

최적화하기 전에 먼저 현재 성능을 측정해야 합니다.

### Chrome DevTools 활용

```javascript
// Performance 탭에서 녹화
// 1. Performance 탭 열기
// 2. Record 버튼 클릭
// 3. 페이지 인터랙션
// 4. Stop 버튼 클릭
```

### React DevTools Profiler

```javascript
import { Profiler } from 'react';

function onRenderCallback(
  id, // Profiler 트리의 "id"
  phase, // "mount" 또는 "update"
  actualDuration, // 렌더링에 걸린 시간
  baseDuration, // 메모이제이션 없이 렌더링하는데 걸리는 예상 시간
  startTime, // React가 렌더링을 시작한 시간
  commitTime, // React가 업데이트를 커밋한 시간
) {
  console.log({id, phase, actualDuration});
}

<Profiler id="App" onRender={onRenderCallback}>
  <App />
</Profiler>
```

## 1. React.memo 활용

불필요한 리렌더링을 방지하는 가장 기본적인 방법입니다.

### Before

```javascript
function TodoItem({ todo, onToggle }) {
  console.log('TodoItem rendered');
  return (
    <div onClick={() => onToggle(todo.id)}>
      {todo.text}
    </div>
  );
}
```

### After

```javascript
const TodoItem = React.memo(({ todo, onToggle }) => {
  console.log('TodoItem rendered');
  return (
    <div onClick={() => onToggle(todo.id)}>
      {todo.text}
    </div>
  );
}, (prevProps, nextProps) => {
  // true를 반환하면 리렌더링 스킵
  return prevProps.todo.id === nextProps.todo.id &&
         prevProps.todo.text === nextProps.todo.text;
});
```

## 2. useMemo와 useCallback

### useMemo - 계산 비용이 큰 값 메모이제이션

```javascript
function TodoList({ todos, filter }) {
  // ❌ 매 렌더링마다 필터링 실행
  const filteredTodos = todos.filter(todo => {
    return filter === 'all' ? true : 
           filter === 'active' ? !todo.completed :
           todo.completed;
  });

  // ✅ filter나 todos가 변경될 때만 실행
  const filteredTodos = useMemo(() => {
    return todos.filter(todo => {
      return filter === 'all' ? true : 
             filter === 'active' ? !todo.completed :
             todo.completed;
    });
  }, [todos, filter]);

  return (
    <div>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
```

### useCallback - 함수 메모이제이션

```javascript
function TodoApp() {
  const [todos, setTodos] = useState([]);

  // ❌ 매 렌더링마다 새로운 함수 생성
  const handleToggle = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  };

  // ✅ todos가 변경될 때만 함수 재생성
  const handleToggle = useCallback((id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  }, [todos]);

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
      ))}
    </div>
  );
}
```

## 3. 가상 스크롤링 (Virtualization)

긴 리스트를 렌더링할 때는 react-window나 react-virtualized를 사용합니다.

```javascript
import { FixedSizeList } from 'react-window';

function TodoList({ todos }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {todos[index].text}
    </div>
  );

  return (
    <FixedSizeList
      height={500}
      itemCount={todos.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}
```

### 성능 개선 결과

- Before: 10,000개 항목 렌더링 → 3초
- After: 10,000개 항목 렌더링 → 0.1초
- **30배 성능 향상!**

## 4. 코드 스플리팅

### React.lazy와 Suspense

```javascript
import React, { lazy, Suspense } from 'react';

// ❌ 초기 번들에 포함
import Dashboard from './Dashboard';
import Settings from './Settings';

// ✅ 필요할 때 로드
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

### 번들 크기 개선

- Before: 초기 번들 2.5MB
- After: 초기 번들 800KB
- **3배 이상 감소!**

## 5. 이미지 최적화

### Lazy Loading

```javascript
function ProductImage({ src, alt }) {
  return (
    <img 
      src={src} 
      alt={alt}
      loading="lazy"
      width="300"
      height="200"
    />
  );
}
```

### WebP 포맷 사용

```javascript
function OptimizedImage({ src, alt }) {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <source srcSet={`${src}.jpg`} type="image/jpeg" />
      <img src={`${src}.jpg`} alt={alt} loading="lazy" />
    </picture>
  );
}
```

## 6. 상태 관리 최적화

### Context API 분리

```javascript
// ❌ 하나의 거대한 Context
const AppContext = createContext();

// ✅ 관심사별로 Context 분리
const UserContext = createContext();
const ThemeContext = createContext();
const TodoContext = createContext();

function App() {
  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={theme}>
        <TodoContext.Provider value={todos}>
          <MainApp />
        </TodoContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
```

### useReducer로 복잡한 상태 관리

```javascript
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  
  return (
    // ...
  );
}
```

## 7. Debounce & Throttle

### 검색 입력 최적화

```javascript
import { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';

function SearchBox() {
  const [query, setQuery] = useState('');

  // ✅ 500ms 후에 검색 실행
  const debouncedSearch = useCallback(
    debounce((value) => {
      // API 호출
      fetch(`/api/search?q=${value}`);
    }, 500),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return <input value={query} onChange={handleChange} />;
}
```

## 실제 프로젝트 적용 결과

제가 진행했던 E-Commerce 프로젝트에 위 기법들을 적용한 결과:

### Lighthouse 점수

| 항목 | Before | After |
|------|--------|-------|
| Performance | 62 | 94 |
| First Contentful Paint | 3.2s | 1.1s |
| Time to Interactive | 5.8s | 2.3s |
| Speed Index | 4.5s | 2.1s |

### 주요 개선 사항

1. **React.memo 적용**: 불필요한 리렌더링 80% 감소
2. **코드 스플리팅**: 초기 로딩 시간 60% 감소
3. **이미지 최적화**: 페이지 용량 70% 감소
4. **가상 스크롤링**: 상품 목록 렌더링 속도 95% 개선

## 주의사항

### 과도한 최적화 주의

```javascript
// ❌ 모든 컴포넌트에 React.memo 적용
// 오히려 성능이 저하될 수 있음
const SimpleButton = React.memo(({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
));

// ✅ 실제로 성능 이슈가 있는 곳에만 적용
const ComplexDataGrid = React.memo(({ data, onSort }) => {
  // 복잡한 렌더링 로직
});
```

## 성능 최적화 체크리스트

- [ ] Chrome DevTools로 성능 측정
- [ ] React DevTools Profiler로 불필요한 리렌더링 확인
- [ ] 무거운 계산은 useMemo 적용
- [ ] 자식 컴포넌트로 전달하는 함수는 useCallback 적용
- [ ] 긴 리스트는 가상 스크롤링 적용
- [ ] 큰 컴포넌트는 코드 스플리팅 적용
- [ ] 이미지 lazy loading 및 WebP 포맷 사용
- [ ] 입력 이벤트에 debounce/throttle 적용

## 결론

성능 최적화는 한 번에 완성되는 것이 아니라 지속적으로 측정하고 개선하는 과정입니다. 먼저 측정하고, 병목 지점을 찾아 개선하세요!

## 참고 자료

- [React 공식 문서 - 성능 최적화](https://react.dev/learn/render-and-commit)
- [web.dev - React 성능](https://web.dev/react/)
- [Kent C. Dodds - useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)

궁금한 점이나 추가하고 싶은 내용이 있다면 댓글로 알려주세요! 🚀

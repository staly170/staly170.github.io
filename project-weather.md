---
title: "날씨 예보 앱"
excerpt: "OpenWeather API를 활용한 실시간 날씨 정보 앱"
header:
  image: /assets/images/project2-header.jpg
  teaser: /assets/images/project2-thumb.jpg
sidebar:
  - title: "역할"
    text: "Frontend Developer"
  - title: "기간"
    text: "2023.03 ~ 2023.05 (2개월)"
  - title: "기술 스택"
    text: "Vue.js, Vuex, Axios, OpenWeather API, Chart.js"
  - title: "링크"
    text: "[GitHub](https://github.com/yourusername/weather-app) | [Demo](https://weather-demo.example.com)"
---

## 프로젝트 개요

OpenWeather API를 활용하여 전 세계 도시의 실시간 날씨 정보를 제공하는 웹 애플리케이션입니다. 직관적인 UI/UX와 다양한 날씨 데이터 시각화를 통해 사용자에게 유용한 정보를 제공합니다.

## 주요 기능

### 날씨 정보
- **현재 날씨**: 온도, 체감온도, 습도, 풍속, 기압 등
- **주간 예보**: 7일간의 날씨 예보
- **시간별 예보**: 24시간 단위 상세 예보
- **날씨 아이콘**: 날씨 상태에 맞는 직관적인 아이콘 표시

### 검색 & 위치
- **도시 검색**: 전 세계 도시 이름으로 검색
- **현재 위치**: Geolocation API를 활용한 자동 위치 감지
- **즐겨찾기**: 자주 확인하는 도시 저장 (LocalStorage)

### 데이터 시각화
- **기온 그래프**: Chart.js를 활용한 시간별 기온 변화
- **강수 확률**: 시간대별 강수 확률 표시
- **바람 정보**: 풍향과 풍속 시각화

## 기술적 구현

### Vue.js 컴포넌트 구조
```javascript
// WeatherCard 컴포넌트
<template>
  <div class="weather-card">
    <h2>{{ cityName }}</h2>
    <div class="current-weather">
      <img :src="weatherIcon" :alt="weatherDescription">
      <span class="temperature">{{ temperature }}°C</span>
    </div>
    <div class="weather-details">
      <p>체감: {{ feelsLike }}°C</p>
      <p>습도: {{ humidity }}%</p>
      <p>풍속: {{ windSpeed }}m/s</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: ['weatherData'],
  computed: {
    cityName() {
      return this.weatherData.name;
    },
    temperature() {
      return Math.round(this.weatherData.main.temp);
    },
    weatherIcon() {
      const icon = this.weatherData.weather[0].icon;
      return `https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
  }
}
</script>
```

### Vuex 상태 관리
```javascript
// store/modules/weather.js
export default {
  state: {
    currentWeather: null,
    forecast: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    loading: false,
    error: null
  },
  mutations: {
    SET_CURRENT_WEATHER(state, weather) {
      state.currentWeather = weather;
    },
    SET_FORECAST(state, forecast) {
      state.forecast = forecast;
    },
    ADD_FAVORITE(state, city) {
      if (!state.favorites.includes(city)) {
        state.favorites.push(city);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    }
  },
  actions: {
    async fetchWeather({ commit }, city) {
      commit('SET_LOADING', true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: city,
              appid: process.env.VUE_APP_API_KEY,
              units: 'metric',
              lang: 'kr'
            }
          }
        );
        commit('SET_CURRENT_WEATHER', response.data);
      } catch (error) {
        commit('SET_ERROR', error.message);
      } finally {
        commit('SET_LOADING', false);
      }
    }
  }
}
```

## 문제 해결 과정

### 1. API 요청 최적화
**문제**: 사용자가 검색할 때마다 API 요청이 발생하여 quota 초과 우려

**해결**:
- Debounce 기법 적용 (500ms 지연)
- 검색 결과 캐싱 (SessionStorage)
- 중복 요청 방지
- 결과: API 요청 횟수 60% 감소

### 2. 반응형 디자인
**문제**: 다양한 화면 크기에서 일관된 사용자 경험 제공

**해결**:
- CSS Grid와 Flexbox 활용
- Mobile-first 접근 방식
- 미디어 쿼리를 통한 breakpoint 설정
- 결과: 모바일/태블릿/데스크톱 모두 최적화된 UI

### 3. 에러 핸들링
**문제**: 네트워크 오류 또는 잘못된 도시 이름 입력 시 사용자 경험 저하

**해결**:
- Try-catch 블록으로 에러 처리
- 사용자 친화적인 에러 메시지 표시
- 자동 재시도 로직 구현
- 로딩 상태 표시

## 성과

- 🎨 **디자인**: 깔끔하고 직관적인 UI로 사용자 만족도 향상
- ⚡ **성능**: API 요청 최적화로 빠른 응답 속도
- 📱 **반응형**: 모든 디바이스에서 완벽한 사용 경험
- 🌍 **국제화**: 다국어 지원 (한국어, 영어)

## 배운 점

1. **Vue.js 생태계**: Vuex를 활용한 상태 관리의 중요성
2. **API 통합**: 외부 API 연동 및 데이터 처리 경험
3. **성능 최적화**: Debounce, 캐싱 등 실용적인 최적화 기법
4. **에러 핸들링**: 예외 상황에 대한 체계적인 처리 방법

## 향후 계획

- [ ] PWA 기능 추가 (오프라인 지원)
- [ ] 날씨 알림 기능
- [ ] 시간대별 옷차림 추천
- [ ] 대기질 정보 추가
- [ ] 다크모드 지원

## 관련 링크

- [GitHub Repository](https://github.com/yourusername/weather-app)
- [Live Demo](https://weather-demo.example.com)
- [개발 블로그: Vue.js로 날씨 앱 만들기](/blog/vue-weather-app/)

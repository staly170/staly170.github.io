---
title: "Task Management App"
excerpt: "React Native로 개발한 크로스 플랫폼 할 일 관리 앱"
header:
  image: /assets/images/project3-header.jpg
  teaser: /assets/images/project3-thumb.jpg
sidebar:
  - title: "역할"
    text: "Mobile App Developer"
  - title: "기간"
    text: "2023.10 ~ 2023.12 (3개월)"
  - title: "기술 스택"
    text: "React Native, Firebase, AsyncStorage, React Navigation"
  - title: "링크"
    text: "[GitHub](https://github.com/yourusername/task-manager)"
---

## 프로젝트 개요

React Native를 활용하여 iOS와 Android 모두에서 작동하는 크로스 플랫폼 할 일 관리 앱입니다. Firebase를 활용한 실시간 동기화와 직관적인 UI로 효율적인 작업 관리를 지원합니다.

## 주요 기능

### 작업 관리
- **작업 추가/수정/삭제**: CRUD 기능 완벽 지원
- **카테고리 분류**: 업무, 개인, 쇼핑 등 카테고리별 관리
- **우선순위 설정**: 높음, 보통, 낮음 3단계
- **마감일 설정**: 날짜 및 시간 알림
- **완료 처리**: 스와이프 제스처로 간편한 완료 처리

### 알림 & 동기화
- **푸시 알림**: 마감일 임박 시 알림
- **실시간 동기화**: Firebase를 통한 멀티 디바이스 동기화
- **오프라인 모드**: 네트워크 없이도 작업 가능
- **백업**: 클라우드 자동 백업

### UI/UX
- **다크모드**: 시스템 설정에 따른 자동 전환
- **드래그 앤 드롭**: 작업 순서 변경
- **제스처**: 스와이프로 삭제/완료
- **애니메이션**: 부드러운 화면 전환

## 기술적 구현

### React Native 컴포넌트
```javascript
// TaskItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TaskItem = ({ task, onComplete, onDelete }) => {
  const renderRightActions = () => (
    <TouchableOpacity 
      style={styles.deleteButton}
      onPress={() => onDelete(task.id)}
    >
      <Icon name="delete" size={24} color="#fff" />
    </TouchableOpacity>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity 
        style={[
          styles.container,
          task.completed && styles.completed
        ]}
        onPress={() => onComplete(task.id)}
      >
        <View style={styles.checkbox}>
          {task.completed && <Icon name="check" size={20} color="#4CAF50" />}
        </View>
        <View style={styles.content}>
          <Text style={[
            styles.title,
            task.completed && styles.completedText
          ]}>
            {task.title}
          </Text>
          <Text style={styles.category}>{task.category}</Text>
        </View>
        <View style={[
          styles.priority,
          { backgroundColor: getPriorityColor(task.priority) }
        ]} />
      </TouchableOpacity>
    </Swipeable>
  );
};
```

### Firebase 연동
```javascript
// services/firebaseService.js
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

class FirebaseService {
  // 작업 추가
  async addTask(task) {
    try {
      const userId = auth().currentUser.uid;
      await firestore()
        .collection('users')
        .doc(userId)
        .collection('tasks')
        .add({
          ...task,
          createdAt: firestore.FieldValue.serverTimestamp(),
          completed: false
        });
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  }

  // 작업 실시간 구독
  subscribeToTasks(callback) {
    const userId = auth().currentUser.uid;
    return firestore()
      .collection('users')
      .doc(userId)
      .collection('tasks')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const tasks = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        callback(tasks);
      });
  }

  // 작업 완료 처리
  async toggleTaskComplete(taskId, completed) {
    const userId = auth().currentUser.uid;
    await firestore()
      .collection('users')
      .doc(userId)
      .collection('tasks')
      .doc(taskId)
      .update({ completed: !completed });
  }
}

export default new FirebaseService();
```

### 로컬 알림
```javascript
// services/notificationService.js
import PushNotification from 'react-native-push-notification';

class NotificationService {
  configure() {
    PushNotification.configure({
      onNotification: function(notification) {
        console.log('Notification:', notification);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }

  scheduleNotification(task) {
    const notificationDate = new Date(task.dueDate);
    notificationDate.setHours(notificationDate.getHours() - 1);

    PushNotification.localNotificationSchedule({
      id: task.id,
      title: '작업 마감 임박',
      message: `${task.title}의 마감 시간이 1시간 남았습니다.`,
      date: notificationDate,
      allowWhileIdle: true,
    });
  }

  cancelNotification(taskId) {
    PushNotification.cancelLocalNotifications({ id: taskId });
  }
}

export default new NotificationService();
```

## 문제 해결 과정

### 1. 오프라인 동기화
**문제**: 네트워크 연결이 불안정할 때 데이터 손실 위험

**해결**:
- AsyncStorage를 활용한 로컬 캐싱
- 네트워크 상태 감지 및 자동 동기화
- 충돌 해결 로직 구현
- 결과: 100% 데이터 무결성 보장

### 2. 성능 최적화
**문제**: 작업 목록이 많아질수록 렌더링 속도 저하

**해결**:
- FlatList의 VirtualizedList 활용
- React.memo로 불필요한 리렌더링 방지
- useMemo, useCallback 훅 활용
- 결과: 1000개 이상의 작업도 부드러운 스크롤

### 3. 크로스 플랫폼 이슈
**문제**: iOS와 Android의 UI/UX 차이

**해결**:
- Platform.OS를 활용한 조건부 스타일링
- react-native-vector-icons로 일관된 아이콘
- SafeAreaView로 노치 대응
- 결과: 양쪽 플랫폼에서 네이티브 느낌

## 성과

- 📱 **크로스 플랫폼**: 단일 코드베이스로 iOS/Android 동시 지원
- 🔄 **실시간 동기화**: Firebase 활용으로 즉각적인 데이터 동기화
- 🎨 **UX**: 직관적인 제스처와 애니메이션
- ⚡ **성능**: 빠른 로딩 속도와 부드러운 스크롤

## 배운 점

1. **React Native**: 크로스 플랫폼 모바일 개발 경험
2. **Firebase**: 백엔드 없이 빠른 개발 가능
3. **모바일 UX**: 터치 제스처와 네이티브 패턴
4. **상태 관리**: Context API를 활용한 전역 상태 관리

## 개선 사항

- [ ] 협업 기능 (팀 작업 공유)
- [ ] 음성 입력으로 작업 추가
- [ ] 통계 대시보드
- [ ] 위젯 지원
- [ ] Wear OS 지원

## 기술 스택 상세

### Frontend
- React Native 0.72
- React Navigation 6
- React Native Gesture Handler
- React Native Vector Icons

### Backend
- Firebase Authentication
- Cloud Firestore
- Firebase Cloud Messaging

### 상태 관리
- Context API
- AsyncStorage

### 개발 도구
- React Native Debugger
- Flipper
- ESLint + Prettier

## 관련 링크

- [GitHub Repository](https://github.com/yourusername/task-manager)
- [개발 블로그: React Native 첫 프로젝트](/blog/react-native-task-app/)
- [APK 다운로드](https://example.com/app.apk)

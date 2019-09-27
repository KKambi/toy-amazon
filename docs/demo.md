----
marp: true
----
# ***세팅 문제***

---
# Webpack
- Web(Front) / Node(Back)용 번들링이 다름
- 빌트인 모듈 사용 시 주의
- MySQL 패키지는 Node Built-in module 사용

---
# eslint-loader
- dotenv 환경변수 설정 문제

---
# Babel-loader
- async / await를 제대로 트랜스파일링 하지 못하는 문제
- 해결책
  1. Babel-polyfil ?
  2. 바벨 설정 변경 ?

---
# 클라우드 설정
- 방화벽 설정
- 서버 내 설치된 서비스 이용 과정 이해

---
# 정리
- 정말 사소한 문제, 오타
- 정말 큰 결점
- 작동방식에 대한 이해

---
# ***코드의 특징***

---
# 새로운 시도
- webpack / eslint / babel
- 구조화 (역할에 맞게)
  - MVC 패턴
  - DB CRUD
  - entry / public / util 
- DB server & App server
- Object Storage (S3)

---
# webpack / eslint / babel
- 확실히 편하다
- 스크립트 로딩 시간 ↓
- 자동 문법 체크
- 트레이드오프 O

---
# 구조화
- 관리자 페이지 1개 -> 컨트롤러 1개
- 각 테이블에 맞게 모델 생성
- 이번 프로젝트에서 모델 인스턴스 필요 X
  - 클래스가 아닌 객체로 구현

---
# 클라우드 학습
- DB서버와 App서버 분리
- DB서버 = redis + MySQL (아쉬움)
- App서버 = Front + Back (아쉬움)
- S3 sdk 이용경험
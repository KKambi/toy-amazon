# toy-amazon

## 기간
- 2019.09.16 ~ 2019.09.20 (front)
- 2019.09.23 ~ 2019.09.27 (back)

## 배포URL
- 106.10.57.45
- [접속](http://106.10.57.45) 
## 구현하려고 노력한 것
- 아마존 프라임 메인페이지의 카로셀 UI
- passport.js & redis & express-session을 이용한 인증
- mysql2 패키지를 이용한 DB작업 (권한부여, 로그인, 카로셀/아이템CRUD)
- HTTP api 응답
- MVC 패턴
  - 사용자 요청이 관리자 페이지에 집중되어 있음
  - 따라서 컨트롤러가 1개만 구현됨 

## 환경
- node.js (10.16.0)
- express (4.16.1)
- mysql (5.7.27)
- redis (3.0.6)
- pug / sass
- webpack bundler
  - sass-loader를 이용한 sass 컴파일링
  - babel-loader를 이용한 트랜스파일링 (중단)
    - async/await를 제대로 변환하지 못하는 이슈 떄문에 미적용 상태입니다.
  - eslint-loader를 이용한 ES8 기준 정적 분석
- 클라우드 (ncloud)
  - Application Server (Ubuntu 16.04)
  - DB Server (MySQL & Redis) (Ubuntu 16.04)
  - Object Storage (S3와 동일)

## 설명
- 메인 카드 / 메인 카드형 카로셀 UI / 미니 캐로셀 UI 
- 카로셀에 들어가는 이미지는 로컬 서버에 저장
  - fetch API를 통해, 이미지가 전체 로딩되면 HTML을 그리는 방식
- 현재 메인 카드와 메인 카드형 카로셀의 연동은 되어있지 않은 상태
- 회원가입은 아직 구현하지 않음 (더미 유저를 통한 로그인만 가능)
- 관리자 아이디로 로그인 시, 관리 페이지를 사용 가능
- 관리자 페이지
  - 사용자조회 / 관리자임명 / 관리자해임
  - 카로셀조회 / 카로셀생성
  - 아이템조회 / 아이템생성

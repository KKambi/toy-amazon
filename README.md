# toy-amazon

# 기간
- 2019.09.16 ~ 2019.09.20

## 목적
- 아마존 프라임 메인페이지의 카로셀 UI를 그대로 구현하는 프로젝트
- 프론트엔드 연습

## 환경
- node.js (10.16.0)
- express (4.16.1)
- pug
- sass
- webpack bundler
  - sass-loader를 이용한 sass 컴파일링
  - babel-loader를 이용한 트랜스파일링
  - eslint-loader를 이용한 ES6 기준 정적 분석

## 설명
- 메인 카드 / 메인 카드형 카로셀 UI / 미니 캐로셀 UI 
- 카로셀에 들어가는 이미지는 로컬 서버에 저장
  - fetch API를 통해, 이미지가 전체 로딩되면 HTML을 그리는 방식
- 현재 메인 카드와 메인 카드형 카로셀의 연동은 되어있지 않은 상태

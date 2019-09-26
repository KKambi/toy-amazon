## [Back] 인증 / 파일업로드 / HTTP API / MySQL
### Passport-local 모듈
1. 사용이 쉽지만, 이해가 어려움
2. Passport 라이브러리 중, local 로그인을 가능하게 하는 모듈을 사용

### Multipart upload
1. 이미지 업로드용
2. 관리자가 아이템 정보를 입력할 수 있음
   1. API와 연동

### 정적 파일 관리
1. 초기 상태의 정적 파일은 public 폴더에 위치
2. 관리자가 업로드하는 이미지는 static_root 폴더에 위치
   1. 별도의 폴더로 관리해라
   2. static_root는 아무나 볼 수 있으므로, public과 다를 바 없다.
   3. 인스타그램처럼 이미지 접근 권한이 구별되어야 한다면 복잡해질 것...

### (옵션) 오브젝트 스토리지
1. AWS의 S3와 똑같은 역할
2. 이미지 저장용도로 쓰겠지?

### HTTP API
1. 앞으로도 이런 방식을 사용할 것 (best practice)
2. CORS 문제가 발생할 수 있음
    1. 보안 상의 이유로, 브라우저들은 스크립트 내에서 초기화되는 cross-origin HTTP 요청을 제한
    2. CORS는 웹 서버에게 보안 cross-domain 데이터 전송을 활성화하는 cross-domain 접근 제어권을 부여
3. REST
    1. 소프트웨어 아키텍쳐
    2. REST 주요 제약 조건을 모두 지키면 REST라 할 수 있다.
       1. 현실적으로 다 지킬 수 없다. (특히 Uniform interface)
       2. 그래서 REST API라 부르지 않는다. (그래서 RESTful API)
    3. Semantic URL을 만드는 데 집중하자.

### 인증
1. Authorization (권한부여) / Authentication (인증)
2. 인증 = 어떤 사용자인지 검증하는 절차
3. Oauth
   1. 패스워드가 복호화될 수 없는 방식으로 암호화해서 서버에 자장한다.
   2. 인증정보 유출 없이, 제3의 기관에서 사용자를 인증해주는 수단 (네이버 연동, 카카오 연동과 같은)

### 인증 라이브러리 ~ Passport.js
1. 패키지 설치
2. 로그인 전략 설치
   1. 어디 로그인할 건지
   2. 예를 들어, passport-naver / passport-kakao / passport-local
```
Node.js에서 콜백으로 데이터를 주고 받을 때, 보통 첫번째 인자는 에러 데이터 (정상이면 null반환)
```

### 쿠키와 세션을 이용한 인증 복습
1. 세션저장소 = In-memory DB
   1. Permanent DB를 쓰더라도 빠른 속도의 DB를 쓴다 (RDB는 안돼!)
   2. 서버가 죽었을 때를 위해 Permanent를 쓰기도 한다
   3. 이중화 서버를 위해 Permanent를 쓰기도 한다 (라운드로빈 처리하면서 여러 개의 웹서버가 하나의 세션DB를 공유할 때) (세션 클러스터링)
2. 데이터저장소 = Permanent DB
3. serializeUser = session에 로그인 유저 정보를 이용하여 생성
```
serialization = 직렬화 = 데이터를 저장할 수 있는 형태로 변환한다.
한 줄로 되어있기 때문에, 파일로 저장하거나, 네트워크 송수신으로 전달할 수 있다.
```

4. deserializeUser = session정보를 이용하여 추가 정보를 얻어옴
   1. 예제대로 하면 매 요청마다 user DB에서 조회하므로 오래 걸림
   2. 대신 serialize에서 user.id가 아닌 user객체를 삽입하고, deserialize에서 바로 user를 던져주면 된다.

### 데이터베이스
1. data = `저장매체에 저장될 수 있는` 데이터
2. database = 데이터 집합소
3. dbms = db 관리 시스템 (MySQL, ...)

4. CAP = 분산시스템에 이상적으로 요구되는 것
   1. Consistency: 일관성 (사용자의 요청에 항상 동일한 응답을 줘야함)
   -> 분산 서버 간 동기화 보장
   2. Availability: 가용성
   -> down time을 줄인다
   3. Partition Tolerance: 파티션 내성
   -> 서버가 물리적으로 다운되어도, 전체 시스템에 영향을 주지 않는 것

5. 최근 트렌드: `Eventual Consistency`
   1. CAP의 Consistency를 희생한다.
   2. 일정 시간 이후의 일관성을 보장한다.
6. ACID = `RDBMS Transaction`의 성질
   1. Atomicity: 원자성 (여러 작업을 트랜잭션으로 묶어서 수행) (트랜젝션 내 작업이 모두 성공하거나, 모두 실패하거나)
   2. Consistencty: 일관성 (DB는 완전무결상태, 어플리케이션 제약조건에 맞는 데이터만 존재한다)
   3. Isolation: 고립성 (트랜잭션을 수행 시 다른 트랜잭션의 연산 작업이 끼어들지 못하도록 보장, 트랜젝션의 중간 작업에 다른 트랜젝션이 끼어들 수 없다. 트랜젝션들이 사실상 동시에 수행됨에도, 이 특징 때문에 순차적으로 수행되는 것처럼 보인다.)
   4. Durability: 지속성 (한번 트랜젝션이 수행되면 영구적으로 저장된다.)

### MySQL
1. 특정 유저로 로그인
   ```
   mysql -u 사용자ID
   ```
2. 현재 사용자 확인
   ```
   select user();
   select current_user();
   ```
3. SQL에서 '%'는 all을 의미. 따라서 DB유저 생성 시의 %는 모든 IP에 대해 허용한다는 뜻.
4. CREATE USER 'bok03220'@'%' IDENTIFIED BY '비밀번호'는 특정 비밀번호로 모든 IP로 접속을 허용하는 bok03220 유저를 생성하겠다는 뜻!!
5. MySQL의 대용량 자료형 TEXT, BLOB
   1. TEXT: 문자열의 길이가 예측되지 않을 때 (url)
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(){
    passport.serializeUser((user, done) => {
        done(null, user);  //user가 deserializeUser의 첫 번째 매개변수로 이동
    })

    passport.deserializeUser((user, done)  => {
        done(null, user);
    })

    passport.use(new LocalStrategy({
        usernameField: 'id',
        passwordField: 'password',
        session: true,
        passReqToCallback: false
    }, (id, password, done) => {
        //MySQL DB에서 유저의 정보를 대조하는 코드
        //로그인 성공시
        return done(null, user);

        //로그인 실패시
        return done(null, false, { message:"아이디 혹은 비밀번호가 틀렸습니다."})
    }))
}

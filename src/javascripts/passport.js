// import library
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// import module
const { User } = require('../model/User.js')
const { isSame } = require('../utils/is_util.js')

module.exports = function(){
    passport.serializeUser((user, done) => {
        done(null, user);  //user가 deserializeUser의 첫 번째 매개변수로 이동
    })

    passport.deserializeUser((user, done)  => {
        done(null, user);
    })

    passport.use(new LocalStrategy({
        usernameField: 'user',
        passwordField: 'password',
        session: true,
        passReqToCallback: false
    }, (user, password, done) => {
        //MySQL DB에서 유저의 정보를 대조하는 코드
        const userRecord = User.find(user);  
        if (userRecord){
            const savedPassword = userRecord.password;
            if (isSame(password, savedPassword){
                const userInfo = {
                    "user": user,
                    "name": userRecord.name
                }
                return done(null, user);
            }
        }

        //로그인 실패시
        return done(null, false, { message: "아이디 혹은 비밀번호가 틀렸습니다."})
    }))
}

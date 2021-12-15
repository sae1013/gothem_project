const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../../models');
const hashPassword = require('../../utils/hash-password');

const config = {
  usernameField:'email', 
  passwordField:'password'
};

const local = new LocalStrategy(config, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('가입되지 않은 회원입니다.');
    }
    // 검색 한 유저의 비밀번호와 요청된 비밀번호의 해쉬값이 일치하는지 확인
    
    if (user.password !== hashPassword(password)) {
      throw new Error('비밀번호를 다시 확인해주세요');
    }

    done (null, {
      shortId: user.shortId,
      email: user.email,
      name: user.name,
      isAdmin:user.isAdmin,
    });
  } catch (err) {
    err.status = 401; //에러 발생시 처리 미들웨어에서 err상태를 직접 넣어주어야함
    done(err, null);
  } 
});

module.exports = local;
const { ExtractJwt, Strategy } = require("passport-jwt");

const users = [
  { id: 583, username: 'user', password: 'pass' }
];

module.exports = (passport) => {
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'foo'
  };

  const strategy = new Strategy(jwtOptions, (payload, next) => {
    console.log('payload received', payload);
    const user = users.find(user => user.id === payload.id);
    return user ? next(null, user) : next(null, false);
  });
  
  passport.use(strategy);
};

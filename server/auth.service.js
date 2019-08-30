const { ExtractJwt, Strategy } = require("passport-jwt");

module.exports = {
  configurePassport(passport) {
      const jwtOptions = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'foo'
      };
    
      const strategy = new Strategy(jwtOptions, (payload, next) => {
        console.log('payload received', payload);
        const user = users.find(user => user.id === payload.id);
        console.log('user', users);
        return user ? next(null, user) : next(null, false);
      });
      
      passport.use(strategy);
  },
  users: [{ id: 0, username: 'foo', password: 'bar' } ]
};

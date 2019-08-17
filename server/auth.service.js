const { ExtractJwt, Strategy } = require("passport-jwt");

let currentUserId = 0;
const users = [];

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
  addUser(username, password) {
    users.push({ id: ++currentUserId, username, password });
  },
  getUser(username) {
    return users.find(user => user.username === username);
  }
};


 
module.exports = {
  mongodb: {
    dbURI: `${process.env.MONGODB_URI}`
  },
  session: {
    cookieKey: process.env.COOKIE_KEY
  },
  googleAuth: {
    googleClientId: process.env.GOOGLE_CLIENTID,
    googleClientSecret: process.env.GOOGLE_CLIENTSECRET,
    callbackURL: '/auth/google/callback' 
  },
  facebookAuth: {
    facebookClientId: process.env.FACEBOOK_CLIENTID,
    facebookClientSecret: process.env.FACEBOOK_CLIENTSECRET,
    callbackURL: '/auth/facebook/callback'
  },
  jwtAuth: {
    secret: process.env.JWT_SECRET
  }
};

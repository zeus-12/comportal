import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// create a cookie-session auth
// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   // A database is optional, but required to persist accounts in a database
//   database: process.env.DATABASE_URL,
//   debug: true,
//   secret: process.env.SECRET,
//   session: {
//     jwt: true,
//   },
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
//   callbacks: {
//     async jwt(token, user, account, profile, isNewUser) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session(session, token) {
//       session.user.id = token.id;
//       return session;

//     },
//   },
// });

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);

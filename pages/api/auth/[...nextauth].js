import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);

// const options = {
//     callbacks: {
//         async signIn({ account, profile }) {
//             if (account.provider === "google") {
//                 return profile.email_verified && profile.email.endsWith("@example.com")
//             }
//             return true // Do different verification for other providers that don't have `email_verified`
//         },
//     }
// }

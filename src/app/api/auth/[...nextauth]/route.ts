import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

// 環境変数からデータ取得
const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
});

// GETリクエスト用とPOSTリクエスト用の2つのハンドラーを設定
export { handler as GET, handler as POST };
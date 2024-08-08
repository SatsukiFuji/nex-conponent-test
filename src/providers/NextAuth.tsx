// ログイン後にsession情報を各ページで使用するための設定

'use client'

import { SessionProvider } from 'next-auth/react';  // useContextを含む: use clientが必要
import React, { ReactNode } from 'react';

const NextAuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  );
}

export default NextAuthProvider
'use client'

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { NextPage } from 'next';
// import Login from "../components/Login/Login";
import Header from "../components/Header/Header";
import Logout from "../components/Logout/Logout";

const FirstPage: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Header />
    </>
  )
}

export default FirstPage;
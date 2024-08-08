import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import Icons from "./Icons/Icons"
import PageTabs from "./PageTabs/PageTabs"
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="w-full h-20 px-4 flex justify-between items-end bg-gray-50">
      <div className="h-full flex flex-col">
        <div className="h-full flex items-center">Header</div>
        <PageTabs />
      </div>
      <div className="h-full flex flex-col items-center">
        {/* {
          session && (
            <Logout />
          )
        }
        {
          !session && (
            <Login />
          )
        } */}
        <Login />
        <Icons />
      </div>
    </div>
  )
}

export default Header
import { BsPlusCircle } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import IconItem from "./IconItem/IconItem";

interface IconItemType {
  id: number;
  label: string;
  icon: React.ReactNode;
}

const IconList = () => {
  const iconList: IconItemType[] = [
    { id: 1, label: 'post', icon: <BsPlusCircle className="size-6 fill-indigo-700" /> },
    { id: 2, label: 'bookmark', icon: <FaBookmark className="size-6 fill-gray-700" /> },
    { id: 3, label: 'favorite', icon: <FaHeart className="size-6 fill-gray-700" /> },
    { id: 4, label: 'notice', icon: <FaBell className="size-6 fill-gray-700" /> },
    { id: 5, label: 'account', icon: <FaRegUserCircle className="size-6 fill-gray-700" /> },
  ]
  return (
    <div className="w-72 flex justify-between items-center">
      {iconList.map((item) => (
        <IconItem
          key={item.id}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </div>
  )
}

export default IconList
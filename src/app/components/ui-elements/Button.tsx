'use client'

import { usePathname } from "next/navigation";

interface ButtonProps {
  label: string;
  link: string;
}

const Button:React.FC<ButtonProps> = ({
  label, link
}) => {
  const pathName = usePathname(); //パス名（リンク）の取得
  const handler = (path) => {
    
  }
  return (
    <button
      onClick={() => ()}>
      {label}
    </button>
  )
}

export default Button
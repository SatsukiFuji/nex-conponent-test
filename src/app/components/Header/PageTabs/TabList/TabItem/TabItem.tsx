'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface TabItemProps {
  label: string;
  link: string;
}

const TabItem: React.FC<TabItemProps> = ({
  label, link
}) => {
  const pathName = usePathname(); // パス名（リンク）を取得

  return (
    <Link
      href={link}
      className={`px-4 py-1 hover:bg-indigo-300 rounded-sm
        ${pathName === link ? 'bg-indigo-700': ''}`}>
      <div className="text-center">{ label }</div>
    </Link>
  )
}

export default TabItem;
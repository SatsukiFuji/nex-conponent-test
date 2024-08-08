interface IconItemProps {
  label: string;
  icon: React.ReactNode;
}

const IconItem: React.FC<IconItemProps> = ({
  label, icon
}) => {
  return (
    <>
      {
        (label==='post') && (
        <div className="px-4 py-1 flex rounded-md border-2 border-indigo-700 hover:bg-indigo-700 hover:text-gray-50 hover:fill-gray-50">
          <div className="mr-2">{ icon }</div>
          <div className="h-full flex items-center text-indigo-700">{ label }</div>
        </div>
      )}
      {
        (label!=='post') && (
        <div className="hover:opacity-50">
          <div>{ icon }</div>
        </div>
      )}
    </>
  )
}

export default IconItem;
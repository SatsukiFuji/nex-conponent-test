import TabItem from "./TabItem/TabItem";


interface TabItemType {
  id: number;
  label: string;
  link: string;
}

const TabList = () => {
  const tabList: TabItemType[] = [
    { id: 1, label: 'Blog', link: '/blog' },
    { id: 2, label: 'Q&A', link: '/qa' },
    // { id: 3, label: 'Event', link: '/event' },
  ]
  return (
    <div className="flex">
      {tabList.map((item) => (
        <TabItem
          key={item.id}
          label={item.label}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default TabList
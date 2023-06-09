type LayoutProps = {
  children: React.ReactNode;
};

const SimpleLayout = (props: LayoutProps) => {
  const gradientDark =
    "bg-gradient-to-b from-gray-900 to-gray-500 bg-gradient-to-r";

  return (
    <>
      <div className={`${gradientDark}`}>
        <div className="container mx-auto">{props.children}</div>
      </div>
    </>
  );
};

export default SimpleLayout;

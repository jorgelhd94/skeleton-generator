import Navbar from "../../organisms/Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const SimpleLayout = (props: LayoutProps) => {
  return (
    <>
      <div className="">
        <div className="container mx-auto">
          <Navbar />
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default SimpleLayout;

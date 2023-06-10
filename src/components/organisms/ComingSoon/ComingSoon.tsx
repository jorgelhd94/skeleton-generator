import ProgrammingImage from "../../../assets/programming.svg";
import Logo from "../../../assets/logo.png";

const ComingSoon = () => {
  return (
    <div className="flex max-lg:flex-col max-lg:justify-center max-lg:items-center lg:justify-around min-h-[90vh] lg:pt-40">
      <div className="flex flex-col gap-2 max-lg:order-1">
        <img src={Logo} width={180} className="max-lg:hidden mb-16" />
        <h2 className="text-gray-500 text-3xl font-bold">
          Skeleton Loader Generator
        </h2>
        <h1 className="text-gray-300 text-5xl font-bold">
          Work In Progress...
        </h1>

      </div>

      <div className="lg:pt-10 max-lg:mb-10">
        <img src={ProgrammingImage} width={400} />
      </div>
    </div>
  );
};

export default ComingSoon;

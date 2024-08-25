import Instances from "../components/instances";
import Footer from "../components/footer";

const Catalog = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-end justify-start pt-[70px] px-0 pb-0 box-border gap-[150px] leading-[normal] tracking-[normal] mq900:gap-[37px] mq1350:gap-[75px]">
      <main className="self-stretch flex flex-row items-start justify-center py-0 pl-6 pr-5 box-border max-w-full">
        <Instances />
      </main>
      <img
        className="w-[166px] h-[30.6px] relative object-cover hidden"
        alt=""
        src="/image-2@2x.png"
      />
      <Footer />
    </div>
  );
};

export default Catalog;

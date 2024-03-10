import Image from "next/image";
import developerImg from "@/public/images/developer.png";
import { WelcomeBlock } from "./WelcomeBlock";
const Home = () => {
  return (
    <section id="home" className="container mx-auto">
      <div className="p-4 pt-[102px] md:pt-20 md:pb-0 min-h-[calc(100dvh-87.19px)] lg:min-h-[calc(100dvh-102px)] flex flex-col items-center justify-center">
        <div className="rounded-xl flex flex-col md:flex-row gap-10 md:p-10 items-center justify-center">
          <div className="w-3/5 md:w-3/6 p-4 md:p-10 lg:p-16 rounded-full flex items-center justify-center neumorph-concave dark:neumorph-convex-dark md:justify-between animate-opacityOnload">
            <Image
              src={developerImg}
              alt={"Developer Image"}
              priority={true}
            ></Image>
          </div>
          <div className="w-full md:w-3/6 flex">
            <WelcomeBlock></WelcomeBlock>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

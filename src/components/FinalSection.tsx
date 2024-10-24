import purpleBubble from "../assets/Lightpurplebubble.svg";
import Macbook from "../assets/Macbook.svg";
import Image from "next/image";
import YellowButton from "./YellowButton";

const FinalSection = () => {
    return (
        <main className="relative bg-soller-feedback md:bg-soller-purple overflow-hidden pt-20">
            <article className="relative flex flex-col justify-between md:flex-row ">
                <section className="flex flex-col w-full max-w-[1094px] md:pl-20 xl:pl-80 z-10">
                    <p className="text-center lg:text-left text-[16px] lg:text-[20px] font-[500] leading-[17.6px] lg:leading-[22px] text-soller-yellow mb-2">
                    Get the Sun to power your home
                    </p>
                    <h2 className="text-center lg:text-left text-[32px] lg:text-[56px] font-[700] leading-[35.2px] lg:leading-[61.6px] text-soller-bg mb-12">
                        All the power that you need for your house is now available
                    </h2>
                </section>
                <figure className="absolute lg:hidden bottom-[-400px] left-[-100px] md:top-[-650px] md:right-[-1800px]  z-0">
                    <Image src={purpleBubble} alt="Purple bubble" width={782} height={780} className="w-2/3 md:w-1/2"/>
                </figure>
                <figure className="hidden lg:flex absolute top-[-450px] right-[-100px]  z-0">
                    <Image src={purpleBubble} alt="Purple bubble" width={782} height={780} className="w-full"/>
                </figure>
                <div className="flex flex-col items-center justify-center w-auto lg:pr-[8%] z-10 ">
                    <YellowButton />
                    <span className="text-center lg:text-left text-[16px] lg:text-[18px] font-[400] leading-[36px] lg:leading-[28.8px] text-soller-bg pt-4 mb-12">
                        Egestas fringilla aliquam leo
                    </span>
                </div>
            </article>
            <figure className="relative flex justify-center z-0 mb-20 lg:mb-2">
                <Image src={Macbook} alt="Macbook illustration" width={1050} height={555} className="w-auto h-auto"/>
            </figure>        
        </main>
    );
};

export default FinalSection;
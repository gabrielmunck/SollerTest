import Image from "next/image";
import SollerLogo from "../assets/SollerLogo.png";

const Footer = () => {
    return (
        <footer className=" flex flex-col md:flex-row bg-soller-bg py-6 lg:py-6 px-4 md:px-20 md:items-center">
            <div className="flex flex-row justify-center items-center w-full md:w-auto py-3 mb-6 md:mb-0">
                <Image
                    src={SollerLogo}
                    alt="Soller logo"
                    width={55.81}
                    height={32}
                    className=""
                />
                <h2 className="text-soller-font text-[24px] font-[700] leading-[26.4px]  pl-2">
                    Soller
                </h2>
            </div>
            <div className="flex flex-row justify-center md:justify-start items-center w-full md:w-1/2 py-3 mb-6 md:mb-0">
                <span className="text-soller-font text-[16px] font-[400] leading-[22.4px] md:pl-4">
                    @ 2023 Soller, Inc. All rights reserved.
                </span>
            </div>
            <div className="flex flex-row justify-center md:justify-end  items-center w-full gap-6 md:w-1/2">
                <span className="text-soller-font text-[16px] font-[400] leading-[22.4px] py-3 hover:text-soller-tel">
                    Terms
                </span>
                <span className="text-soller-font text-[16px] font-[400] leading-[22.4px] py-3 hover:text-soller-tel">
                    Privacy
                </span>
                <span className="text-soller-font text-[16px] font-[400] leading-[22.4px] py-3 hover:text-soller-tel">
                    Support
                </span>
            </div>
        </footer>
    );
};

export default Footer;

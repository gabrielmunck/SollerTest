import Desktop from "../assets/Desktop.svg";
import Image from "next/image";
import YellowButton from "./YellowButton"

const CarouselSection = () => {
    return (
        <section className="flex flex-col bg-soller-feedback w-full h-auto pt-12 lg:pt-20">
            <div className="flex flex-col justify-between md:flex-row lg:px-20">
                <div className="flex flex-col w-full max-w-[814px]">
                    <p className="text-center lg:text-left text-[16px] lg:text-[20px] font-[500] leading-[17.6px] lg:leading-[22px] text-soller-yellow mb-2">
                        Join other Sun harvesters
                    </p>
                    <h2 className="text-center lg:text-left text-[32px] lg:text-[56px] font-[700] leading-[35.2px] lg:leading-[61.6px] text-soller-bg mb-6">
                        Make something awesome
                    </h2>
                    <span className="text-center lg:text-left text-[16px] lg:text-[20px] font-[400] leading-[36px] lg:leading-[36px] text-soller-bg mb-12">
                        Dui euismod iaculis libero, aliquet vitae et elementum
                        porttitor. Eleifend mi tristique condimentum congue fusce
                        nunc, donec magnis commodo.
                    </span>
                </div>
                <div className="flex w-full pt-10 justify-center lg:justify-end">
                    <YellowButton/>
                </div>
            </div>

            
        </section>
    );
};

export default CarouselSection;

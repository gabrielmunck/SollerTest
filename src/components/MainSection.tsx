import React from "react";
import Image from "next/image";
import blueBubble from "../assets/blueBubble.svg";
import user1 from "../assets/User1.png";
import workGuy from "../assets/PexelsPhotobyGustavoFring.png"
import Button from "./Button";

const MainSection: React.FC = () => {
    return (
        <section className="w-full ">
            <div className="flex flex-col-reverse w-full md:flex-row justify-between">
                <div className="max-w-[600px] md:mt-[140px] mt-[140px]">
                    <h2 className="text-[72px] font-[900] leading-[79.2px] text-soller-font mb-6">
                        Get the Sun to Power Your Home
                    </h2>
                    <p className="text-[24px] leading-[38.4px] text-soller-font mb-6">
                        Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
                    </p>
                    <Button/>
                    <p className="mt-[128px] text-[18px] leading-[28.8px] font-[400] text-soller-font mb-4">
                        “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
                    </p>
                    <div className="flex">
                        <Image
                            src={user1}
                            alt="Person Feedback"
                            width={64}
                            height={64}
                            className="mr-4"
                        />
                        <div className="py-[6px]">
                            <p className="text-soller-font text-[18px] leading-[28.8px] font-[400]">Rwanda Melflor</p>
                            <p className="text-soller-gray text-[16px] leading-[22.4px]">zerowaste.com</p>
                        </div>
                    </div>
                    
                </div>
                <div className="">
                    <Image
                        src={blueBubble}
                        alt="Blue Bubble"
                        width={500}
                        height={500}
                        className=""
                    />
                </div>
            </div>
        </section>
    );
};

export default MainSection;

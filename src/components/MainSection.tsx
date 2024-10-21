import React from "react";
import Image from "next/image";
import user1 from "../assets/User1.png";
import workGuy from "../assets/PexelsPhotobyGustavoFring.png";
import Button from "./Button";

const MainSection: React.FC = () => {
    return (
        <section className="w-full">
            <div className="absolute top-0 right-0 z-10">
                <Image
                    src={workGuy}
                    alt="Man installing solar panels"
                    width={673}  
                    height={694}
                    className="bg-soller-blueBubble rounded-bl-[60%]"
                />
            </div>
            <div className="flex flex-col-reverse w-full lg:pl-20 md:flex-row">
                <div className="max-w-[600px] mt-[367px] md:mt-[27px] flex flex-col justify-center lg:justify-start  z-20">
                    <h2 className="text-center lg:text-left text-[40px] lg:text-[72px] font-[700] lg:font-[900] leading-[44px] lg:leading-[79.2px] text-soller-font px-4 lg:px-0 mb-6">
                        Get the Sun to Power Your Home
                    </h2>
                    <p className="text-center lg:text-left text-[24px] leading-[38.4px] text-soller-font mb-6">
                        Viverra viverra nibh enim et aliquam, enim. Tempor, sit
                        mus viverra orci dui consequat turpis scelerisque.
                    </p>
                    <div className="flex justify-center lg:justify-start w-full">
                        <Button />
                    </div>
                    <p className="mt-[128px] text-[18px] leading-[28.8px] font-[400] text-soller-font px-4 mb-4">
                        “Viverra viverra nibh enim et aliquam, enim. Tempor, sit
                        mus viverra orci dui consequat turpis scelerisque
                        faucibus.”
                    </p>
                    <div className="flex px-4">
                        <Image
                            src={user1}
                            alt="Person Feedback"
                            width={64}
                            height={64}
                            className="mr-4"
                        />
                        <div className="py-[6px]">
                            <p className="text-soller-font text-[18px] leading-[28.8px] font-[400]">
                                Rwanda Melflor
                            </p>
                            <p className="text-soller-gray text-[16px] leading-[22.4px]">
                                zerowaste.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;

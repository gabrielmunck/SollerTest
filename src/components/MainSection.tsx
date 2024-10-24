import React from "react";
import Image from "next/image";
import user1 from "../assets/User1.png";
import Header from "../components/Header";
import workGuy from "../assets/PexelsPhotobyGustavoFring.png";
import Button from "./Button";
import { AnimatedText } from './AnimatedText';

const MainSection: React.FC = () => {
    return (
        <main className="w-full relative">
            <Header />
            <div className="absolute top-0 right-0 z-10">
                <Image
                    src={workGuy}
                    alt="Man installing solar panels"
                    width={1673}  
                    height={694}
                    className="bg-soller-blueBubble w-[300px] lg:w-[400px] xl:w-[600px] rounded-bl-[60%] object-cover"
                />
            </div>
            <article className="flex flex-col-reverse w-full lg:pl-20 md:flex-row ">
                <div className="max-w-[600px] mt-[420px] md:mt-[140px] flex flex-col justify-center lg:justify-start">
                    <AnimatedText 
                        text="Get the Sun to Power Your Home"
                        className="text-center md:text-left text-[40px] md:text-[72px] font-[700] md:font-[900] leading-[44px] md:leading-[79.2px] text-soller-font px-4 lg:px-0 mb-6"
                    />
                    <AnimatedText 
                        text="Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque."
                        className="text-center lg:text-left text-[24px] leading-[38.4px] text-soller-font px-4 lg:px-0 mb-6"
                    />
                    <div className="flex justify-center lg:justify-start w-full">
                        <Button />
                    </div>
                    <AnimatedText 
                        text="Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus."
                        className="mt-[128px] text-[18px] leading-[28.8px] font-[400] text-soller-font px-4 lg:px-0 mb-4"
                    />
                    <section className="flex px-4 lg:px-0">
                        <Image
                            src={user1}
                            alt="Person Feedback"
                            width={64}
                            height={64}
                            className="mr-4"
                        />
                        <div className="py-[6px]">
                            <AnimatedText 
                                    text="Rwanda Melflor"
                                    className="text-soller-font text-[18px] leading-[28.8px] font-[400]"
                                />
                            <AnimatedText 
                                text="zerowaste.com"
                                className="text-soller-gray text-[16px] leading-[22.4px]"
                            />
                        </div>
                    </section>
                </div>
            </article>
        </main>
    );
};

export default MainSection;

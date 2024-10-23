import React from "react";
import Image from "next/image";
import Mobile2 from "../assets/Mobile2.svg";
import MobileBubble from "../assets/MobileBubble.svg";
import yellowRectangle from "../assets/yellowRectangle.svg";

const Features = () => {
    const services = [
        {
            title: "Erat sit",
            description:
                "Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.",
        },
        {
            title: "Ullamcorper arcu",
            description:
                "Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.",
        },
        {
            title: "Et pellentesque",
            description:
                "Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.",
        },
        {
            title: "Amet egestas",
            description:
                "Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. ",
        },
    ];

    return (
        <section className="w-full">
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full flex flex-col">
                    <div className="flex flex-col w-full items-center">
                        <div className="flex flex-col w-full max-w-[1180px] z-20">
                            <p className="text-center lg:text-left text-[16px] lg:text-[20px] font-[500] leading-[17.6px] lg:leading-[22px] text-soller-orange pt-[225px] mb-2">
                                System features
                            </p>
                            <h2 className="text-center lg:text-left text-[32px] lg:text-[56px] font-[700] leading-[35.2px] lg:leading-[61.6px] text-soller-font mb-6">
                                Powerful features
                            </h2>
                            <span className="text-center lg:text-left text-[16px] lg:text-[20px] font-[400] leading-[36px] lg:leading-[22px] text-soller-font mb-12">
                                Pretium lectus ultrices sit tempor, sit
                                ullamcorper volutpat et et. Auctor turpis semper
                                id sit ornare maecenas lectus sed.
                            </span>
                            <div className="w-full grid grid-cols-2 gap-12">
                                {services.map((service, index) => (
                                    <div key={index} className="p-4 rounded-lg">
                                        <h3 className="text-[24px] text-center lg:text-left leading-[26.4px] font-[700] mb-4 pt-20">
                                            {service.title}
                                        </h3>
                                        <p className="text-[18px] text-center lg:text-left leading-[28.8px] font-[400] mb-4">
                                            {service.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block w-[390px] lg:w-[550px] z-10">
                    <div className=" h-[600px] lg:w-[550px] relative">
                        <Image
                            src={yellowRectangle}
                            alt="Yellow Rectangle"
                            width={1140}
                            height={1000}
                            className="absolute right-0 w-[355px] lg:w-full"
                        />
                        <div className="relative h-full w-full">
                            <Image
                                src={Mobile2}
                                alt="Mobile illustration"
                                width={420}
                                height={900}
                                className="absolute w-[250px] md:w-[455px] transform translate-x-[25%] md:translate-x-[50px] translate-y-[50px] md:translate-y-[150px] "
                            />
                            <Image
                                src={MobileBubble}
                                alt="Card illustration"
                                width={203}
                                height={296.8}
                                className="absolute w-[60px] md:w-[110px] transform translate-x-[265px] translate-y-[373px] md:translate-x-[415px] md:translate-y-[738px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;

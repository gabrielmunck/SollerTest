import React from "react";
import Image from "next/image";
import Mobile from "../assets/Mobile.svg";
import Card from "../assets/Card.svg";
import purpleRectangle from "../assets/purpleRectangle.svg";

const Services = () => {
    const services = [
        {
            title: "Et mauris",
            description:
                "Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.",
        },
        {
            title: "Eget sit",
            description:
                "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
        },
        {
            title: "Imperdiet pellentesque",
            description:
                "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
        },
        {
            title: "Non libero",
            description:
                "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
        },
    ];

    return (
        <section className="w-full mb-10">
            <div className="flex flex-col-reverse  md:flex-row items-center">
                <div className="block w-[350px] md:w-[600px]">
                    <div className=" h-[600px] md:w-[450px] relative">
                        <Image
                            src={purpleRectangle}
                            alt="Purple Rectangle"
                            width={1200}
                            height={1100}
                            className="absolute w-[355px] lg:w-full transform -translate-x-[40px] "
                        />
                        <div className="relative h-full w-full">
                            <Image
                                src={Mobile}
                                alt="Mobile illustration"
                                width={420}
                                height={900}
                                className="absolute w-[250px] md:w-[305px] transform translate-x-[20%] md:translate-x-[90px] translate-y-[60px] "
                            />
                            <Image
                                src={Card}
                                alt="Card illustration"
                                width={203}
                                height={296.8}
                                className="absolute w-[130px] md:w-[173px] transform translate-x-[233px] translate-y-[210px] md:translate-x-[310px] md:translate-y-[230px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className="flex flex-col w-full items-center">
                        <div className="flex flex-col w-full max-w-[1180px]">
                            <p className="text-center lg:text-left text-[16px] lg:text-[20px] font-[500] leading-[17.6px] lg:leading-[22px] text-soller-orange lg:pt-[225px] mb-2">
                                Services
                            </p>
                            <h2 className="text-center lg:text-left text-[32px] lg:text-[56px] font-[700] leading-[35.2px] lg:leading-[61.6px] text-soller-font mb-6">
                                Personalized services
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
            </div>
        </section>
    );
};

export default Services;

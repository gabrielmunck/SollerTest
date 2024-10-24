"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import User1 from "../assets/User1.png";
import User2 from "../assets/User2.png";
import User3 from "../assets/User3.png";
import User4 from "../assets/User4.png";
import Image, { StaticImageData } from "next/image";
import YellowButton from "./YellowButton";
import "swiper/css";
import "swiper/css/navigation";

interface TestimonialCard {
    id: number;
    name: string;
    energy: string;
    comment: string;
    image: StaticImageData;
}

const testimonials: TestimonialCard[] = [ // Lista de Usuarios e seus comentarios
    {
        id: 1,
        name: "Jane Cooper",
        energy: "10KWh",
        comment:
            "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
        image: User3,
    },
    {
        id: 2,
        name: "Ralph Edwards",
        energy: "32KWh",
        comment:
            "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
        image: User2,
    },
    {
        id: 3,
        name: "Courtney Henry",
        energy: "6KWh",
        comment:
            "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
        image: User1,
    },
    {
        id: 4,
        name: "Cameron Williamson",
        energy: "12KWh",
        comment:
            "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
        image: User4,
    },
    {
        id: 5,
        name: "Courtney Henry",
        energy: "6KWh ",
        comment:
            "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
        image: User4,
    },
    {
        id: 6,
        name: "Courtney Henry",
        energy: "6KWh ",
        comment:
            "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
        image: User4,
    },
    {
        id: 7,
        name: "Courtney Henry",
        energy: "6KWh ",
        comment:
            "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
        image: User4,
    },
];

// Aqui sera usado o componente Swiper para a criação do carrosel

const CarouselSection = () => {
    return (
        <main className="flex flex-col bg-soller-feedback w-full h-auto pt-12 lg:pt-20 pb-16 z-10">
            <article className="flex flex-col justify-between md:flex-row lg:px-20">
                <div className="flex flex-col w-full max-w-[814px]">
                    <p className="text-center lg:text-left text-[16px] lg:text-[20px] font-[500] leading-[17.6px] lg:leading-[22px] text-soller-yellow mb-2">
                        Join other Sun harvesters
                    </p>
                    <h2 className="text-center lg:text-left text-[32px] lg:text-[56px] font-[700] leading-[35.2px] lg:leading-[61.6px] text-soller-bg mb-6">
                        Make something awesome
                    </h2>
                    <span className="text-center lg:text-left text-[16px] lg:text-[20px] font-[400] leading-[36px] lg:leading-[36px] text-soller-bg mb-12">
                        Dui euismod iaculis libero, aliquet vitae et elementum
                        porttitor. Eleifend mi tristique condimentum congue
                        fusce nunc, donec magnis commodo.
                    </span>
                </div>
                <div className="flex w-full pt-10 justify-center lg:justify-end">
                    <YellowButton />
                </div>
            </article>
            <section className=" p-4 lg:pl-20 mt-10">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1445: {
                            slidesPerView: 4,
                        },
                        1700: {
                            slidesPerView: 5,
                        },
                    }}
                    className="relative"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="flex flex-col select-none justify-between bg-soller-bg w-[344px] h-[359px] lg:h-[442px] rounded-lg px-4 shadow-lg border border-soller-grayborder transition-transform duration-300 hover:scale-105">
                                <p className="pt-20 mb-4 text-soller-font text-[16px] leading-[22.4px] lg:text-[18px] lg:leading-[28.8px] font-[400]">
                                    {testimonial.comment}
                                </p>
                                <figure className="flex pb-10">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={64}
                                        height={64}
                                        className="rounded-full w-[64px] h-[64px]"
                                    />
                                    <div className="flex flex-col ml-4">
                                        <h3 className="text-soller-font text-[18px] leading-[28.8px] font-[400]">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-soller-gray text-[16px] leading-[22.4px] font-[400]">
                                            {testimonial.energy}
                                        </p>
                                    </div>
                                </figure>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="flex mt-28">
                        <button id="seta" className="swiper-button-prev flex items-center justify-center bg-soller-feedback border-[2px] border-soller-yellow rounded-full shadow-lg">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="rotate-180 text-soller-yellow "
                            >
                                <path
                                    d="M10.586 5.65692L6.636 1.70692C6.45384 1.51832 6.35305 1.26572 6.35533 1.00352C6.3576 0.741321 6.46277 0.490508 6.64818 0.3051C6.83359 0.119692 7.0844 0.0145233 7.3466 0.0122448C7.6088 0.00996641 7.8614 0.110761 8.05 0.292919L13.707 5.94992C13.8002 6.04257 13.8741 6.15274 13.9246 6.27407C13.9751 6.3954 14.001 6.52551 14.001 6.65692C14.001 6.78833 13.9751 6.91844 13.9246 7.03978C13.8741 7.16111 13.8002 7.27127 13.707 7.36392L8.05 13.0209C7.95775 13.1164 7.84741 13.1926 7.7254 13.245C7.6034 13.2974 7.47218 13.325 7.3394 13.3262C7.20662 13.3273 7.07494 13.302 6.95205 13.2517C6.82915 13.2015 6.7175 13.1272 6.62361 13.0333C6.52971 12.9394 6.45546 12.8278 6.40518 12.7049C6.3549 12.582 6.3296 12.4503 6.33075 12.3175C6.3319 12.1847 6.35949 12.0535 6.4119 11.9315C6.46431 11.8095 6.54049 11.6992 6.636 11.6069L10.586 7.65692H1C0.734784 7.65692 0.48043 7.55156 0.292893 7.36403C0.105357 7.17649 0 6.92214 0 6.65692C0 6.39171 0.105357 6.13735 0.292893 5.94981C0.48043 5.76228 0.734784 5.65692 1 5.65692H10.586Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                        <button id="seta" className="swiper-button-next flex items-center justify-center bg-soller-feedback border-[2px] border-soller-yellow rounded-full shadow-lg">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className=" text-soller-yellow "
                            >
                                <path
                                    d="M10.586 5.65692L6.636 1.70692C6.45384 1.51832 6.35305 1.26572 6.35533 1.00352C6.3576 0.741321 6.46277 0.490508 6.64818 0.3051C6.83359 0.119692 7.0844 0.0145233 7.3466 0.0122448C7.6088 0.00996641 7.8614 0.110761 8.05 0.292919L13.707 5.94992C13.8002 6.04257 13.8741 6.15274 13.9246 6.27407C13.9751 6.3954 14.001 6.52551 14.001 6.65692C14.001 6.78833 13.9751 6.91844 13.9246 7.03978C13.8741 7.16111 13.8002 7.27127 13.707 7.36392L8.05 13.0209C7.95775 13.1164 7.84741 13.1926 7.7254 13.245C7.6034 13.2974 7.47218 13.325 7.3394 13.3262C7.20662 13.3273 7.07494 13.302 6.95205 13.2517C6.82915 13.2015 6.7175 13.1272 6.62361 13.0333C6.52971 12.9394 6.45546 12.8278 6.40518 12.7049C6.3549 12.582 6.3296 12.4503 6.33075 12.3175C6.3319 12.1847 6.35949 12.0535 6.4119 11.9315C6.46431 11.8095 6.54049 11.6992 6.636 11.6069L10.586 7.65692H1C0.734784 7.65692 0.48043 7.55156 0.292893 7.36403C0.105357 7.17649 0 6.92214 0 6.65692C0 6.39171 0.105357 6.13735 0.292893 5.94981C0.48043 5.76228 0.734784 5.65692 1 5.65692H10.586Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </Swiper>
            </section>
        </main>
    );
};

export default CarouselSection;

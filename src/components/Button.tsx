import React from "react";
import Image from "next/image";
import Arrow from "../assets/arrow.svg";

interface ButtonProps {
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({  onClick }) => {
    return (
        <button
            className="w-[306px] h-16 bg-transparent text-soller-feedback hover:text-soller-yellow hover:bg-soller-feedback border-[2px] border-soller-feedback font-bold rounded-full flex items-center justify-center"
            onClick={onClick}
        >
            <span className="text-[24px] tracking-[0.5px] font-[700] px-6">Request a Quote</span>
            <Image src={Arrow} alt="Arrow" width={14} height={13.31} className="ml-1" />
        </button>
    );
};

export default Button;
import React from "react";

interface ButtonProps {
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button
            className="w-[306px] h-16 bg-transparent text-soller-yellow hover:text-soller-brown hover:bg-soller-yellow border-[2px] border-soller-yellow font-bold rounded-full flex items-center justify-center group transition-colors"
            onClick={onClick}
        >
            <span className="text-[24px] tracking-[0.5px] font-[700] px-6">
                Request a Quote
            </span>
            <svg 
                width="14" 
                height="14" 
                viewBox="0 0 14 14" 
                className="ml-1 fill-soller-yellow group-hover:fill-soller-brown transition-colors"
            >
                <path d="M13.7069 7.70711C14.0974 7.31658 14.0974 6.68342 13.7069 6.29289L7.34289 -0.0710083C6.95237 -0.461534 6.3192 -0.461534 5.92868 -0.0710083C5.53815 0.319517 5.53815 0.952834 5.92868 1.34336L11.5853 7L5.92868 12.6569C5.53815 13.0474 5.53815 13.6805 5.92868 14.0711C6.3192 14.4616 6.95237 14.4616 7.34289 14.0711L13.7069 7.70711ZM0 8H13V6H0V8Z" />
            </svg>
        </button>
    );
};

export default Button;

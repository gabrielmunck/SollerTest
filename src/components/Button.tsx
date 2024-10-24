import React from "react";

interface ButtonProps {
    onClick?: () => void;
}

//Variante botao roxo
const Button: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button
            className="w-[306px] h-16 bg-transparent text-soller-feedback hover:text-soller-yellow hover:bg-soller-feedback border-[2px] border-soller-feedback font-bold rounded-full flex items-center justify-center group transition-colors"
            onClick={onClick}
        >
            <span className="text-[24px] tracking-[0.5px] font-[700] px-6">
                Request a Quote
            </span>
            <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                className="ml-1 fill-soller-feedback group-hover:fill-soller-yellow transition-colors"
            >
                <path
                    d="M10.586 5.65692L6.636 1.70692C6.45384 1.51832 6.35305 1.26572 6.35533 1.00352C6.3576 0.741321 6.46277 0.490508 6.64818 0.3051C6.83359 0.119692 7.0844 0.0145233 7.3466 0.0122448C7.6088 0.00996641 7.8614 0.110761 8.05 0.292919L13.707 5.94992C13.8002 6.04257 13.8741 6.15274 13.9246 6.27407C13.9751 6.3954 14.001 6.52551 14.001 6.65692C14.001 6.78833 13.9751 6.91844 13.9246 7.03978C13.8741 7.16111 13.8002 7.27127 13.707 7.36392L8.05 13.0209C7.95775 13.1164 7.84741 13.1926 7.7254 13.245C7.6034 13.2974 7.47218 13.325 7.3394 13.3262C7.20662 13.3273 7.07494 13.302 6.95205 13.2517C6.82915 13.2015 6.7175 13.1272 6.62361 13.0333C6.52971 12.9394 6.45546 12.8278 6.40518 12.7049C6.3549 12.582 6.3296 12.4503 6.33075 12.3175C6.3319 12.1847 6.35949 12.0535 6.4119 11.9315C6.46431 11.8095 6.54049 11.6992 6.636 11.6069L10.586 7.65692H1C0.734784 7.65692 0.48043 7.55156 0.292893 7.36403C0.105357 7.17649 0 6.92214 0 6.65692C0 6.39171 0.105357 6.13735 0.292893 5.94981C0.48043 5.76228 0.734784 5.65692 1 5.65692H10.586Z"             />
            </svg>
        </button>
    );
};

export default Button;

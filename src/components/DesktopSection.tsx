import yellowBubble from "../assets/yellowBubble.svg";
import Desktop from "../assets/Desktop.svg";
import Image from "next/image";

const DesktopSection = () => {
    return (
        <main className="relative pt-36">
            <article className="relative flex flex-col justify-center items-center z-10">
                <p className="mb-2 text-center text-soller-orange font-[500] text-[16px] lg:text-[20px] leading-[17.6px] lg:leading-[22px]">
                    No more waste
                </p>
                <h2 className="text-[32px] lg:text-[56px] leading-[35.2px] lg:leading-[61.6px] font-[700] lg:font-[800] text-center mb-4">
                    Pick the Sun
                </h2>
                <div className="w-full flex flex-col items-center mb-20">
                    <p className="max-w-[900px] text-center text-[16px] lg:text-[20px] leading-[22.4px] lg:leading-[36px] text-soller-font font-[400] px-5 mb-6">
                        Et pulvinar nec interdum integer id urna molestie porta
                        nullam. A, donec ornare sed turpis pulvinar purus
                        maecenas quam a. Erat porttitor pharetra sed in mauris
                        elementum sollicitudin.
                    </p>
                </div>
            </article>
            <figure className="absolute top-[240px] left-[-200px] z-0">
                <Image src={yellowBubble} alt="Yellow bubble" className="max-w-[250px] lg:max-w-full lg:w-full "/>
            </figure>
            <div className="hidden md:flex md:absolute top-0 -right-[50px] lg:right-0 lg:top-[400px] bg-[url('../assets/purpleBubble.svg')] bg-no-repeat bg-right-bottom bg-contain w-[300px] lg:w-full h-[600px] z-0 overflow-hidden">
            </div>
            <figure className="relative flex justify-center z-10 mb-20 lg:mb-2">
                <Image src={Desktop} alt="Desktop illustration" className=" w-full max-w-[1900px] lg:px-[200px] px-4"/>
            </figure>        
        </main>
    );
};

export default DesktopSection;

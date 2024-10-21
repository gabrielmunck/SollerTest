import React from 'react';
import Image from 'next/image';
import Button from './Button';
import HeadsetIcon from '../assets/headset.svg';

const Header: React.FC = () => {
    return (
        <header className="bg-transparent top-0 left-0 right-0 z-50 px-4 lg:px-20">
            <div className="mx-auto h-[112px] flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-[32px] font-bold text-soller-font mr-[42px]">soller</h1>
                    <nav className='hidden lg:flex items-center space-x-5'>
                        <ul className="flex space-x-9 text-soller-font">
                            <li><a href="#products" className="text-[16px] tracking-[0.5px] font-[500] hover:text-soller-tel">Products</a></li>
                            <li><a href="#solutions" className="text-[16px] tracking-[0.5px] font-[500] hover:text-soller-tel">Solutions</a></li>
                            <li><a href="#services" className="text-[16px] tracking-[0.5px] font-[500] hover:text-soller-tel">Services</a></li>
                            <li><a href="#configure" className="text-[16px] tracking-[0.5px] font-[500] hover:text-soller-tel">Configure</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="hidden lg:flex items-center">
                    <div className="flex items-center px-2 py-3 mr-4">
                        <Image src={HeadsetIcon} alt="Headset" width={20} height={20} className="" />
                        <span className='text-[16px] px-4 tracking-[0.5px] font-[500] text-soller-tel'>555 818 282</span>
                    </div>
                    <Button/>
                </div>
            </div>
        </header>
    );
};

export default Header;

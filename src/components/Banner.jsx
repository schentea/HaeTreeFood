import React, { useState, useEffect, useCallback } from 'react';
import { GrNext,GrPrevious } from "react-icons/gr";
import Banner1 from '../assets/Banner1.jpg';
import Banner2 from '../assets/Banner2.jpg';
import Banner3 from '../assets/Banner3.jpg';

export default function Banner() {
    const images = [Banner1, Banner2, Banner3];
    const [currentIndex, setCurrentIndex] = useState(0);

    // handleNext 함수를 useCallback으로 메모이제이션
    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    // 자동 슬라이드 효과를 위한 useEffect
    useEffect(() => {
        const interval = setInterval(handleNext, 3000); // 3초마다 이미지 변경

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    }, [handleNext]);

    // 이전 이미지로 이동하는 함수
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="w-full h-full flex justify-center items-center relative overflow-hidden">
            <div
                className="relative flex w-full h-[800px] transition-transform duration-700 ease-in-out "
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    
                    <img
                        key={index}
                        src={image}
                        alt=""
                        className="w-full h-full object-contain flex-shrink-0 bg-red-200"
                    />
                ))}
            </div>

            {/* 이전 버튼 */}
            <GrNext onClick={handleNext}
                className="absolute right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 focus:outline-none hover:bg-opacity-75 size-10"
                style={{ top: '50%' }}
/>
            

            {/* 다음 버튼 */}
            
            <GrPrevious
                onClick={handlePrev}
                className="absolute left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 focus:outline-none hover:bg-opacity-75 size-10"
                style={{ top: '50%' }}
            >
                &gt;
            </GrPrevious>
        </div>
    );
}

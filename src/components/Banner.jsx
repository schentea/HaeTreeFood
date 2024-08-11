import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../custom-css/Banner.css';

import Banner1 from '../assets/Banner1.jpg';
import Banner2 from '../assets/Banner2.jpg';
import Banner3 from '../assets/Banner3.jpg';

export default function Banner() {
    const settings = {
        dots: true, // 슬라이드 하단에 점(dot) 표시
        infinite: true, // 무한 루프
        speed: 500, // 슬라이드 전환 속도 (밀리초)
        slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
        slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
        autoplay: true, // 자동 재생
        autoplaySpeed: 3000, // 자동 재생 속도 (밀리초)
    };

    return (
        <div className="w-full flex justify-center">
            <Slider {...settings} className="w-full flex justify-center custom-dots">
                <div className="bg-yellow-500">
                    <img src={Banner1} alt="test1" className="w-[1280px] h-[800px] object-cover object-center mx-auto"/>
                </div>
                <div className="bg-yellow-500">
                    <img src={Banner2} alt="test2" className="w-[1280px] h-[800px] object-cover object-center mx-auto"/>
                </div>
                <div className="bg-yellow-500">
                    <img src={Banner3} alt="test3" className="w-[1280px] h-[800px] object-cover object-center mx-auto"/>
                </div>
            </Slider>
        </div>
    );
}

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Main() {
    const swiperRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const updatePagination = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const currentIndex = swiperRef.current.swiper.realIndex + 1; 
            setCurrentPage(currentIndex); 
        }
    };

    return (
            <Swiper
                ref={swiperRef}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                className="mySwiper"
                onSlideChange={updatePagination} 
            >
            
                 <SwiperSlide style={{ backgroundColor: '#0c8c8d' }}>
                <img className="visual" src="./img/main1.png" />
                <div className="image-container">
                    <img src="./img/main2.png" className="overlay-image" />
                </div>
            </SwiperSlide>
            <div className='c-main-visual'>
            <div className="c-inner">
                <div className='c-main-visual__control'>
                    <button className='c-swiper-button-play' type='button'>
                    </button>
                    <button className='c-swiper-button-prev' onClick={goPrev} aria-label='Previous slide'>
                    </button>
                    <span className='c-swiper-pagination-current'>{currentPage}</span> 
                    <span className='c-swiper-pagination-current'>/</span>
                    <span className='c-swiper-pagination-total'>2</span>
                    <button className='c-swiper-button-next' onClick={goNext} aria-label='Next slide'>
                    </button>
                    <div className='c-swiper-pagination c-swiper-pagination-fraction c-swiper-pagination-horizontal'>
                    
                    
                </div>
            </div>
            </div>
            </div>
            <SwiperSlide style={{ backgroundColor: '#0e6b46' }}>
                <img className="visual" src='./img/main3.jpg' />
                <div className="image-container">
                    <img src="./img/main4.png" className="overlay-image" />
                </div>
            </SwiperSlide>
           
        </Swiper>

        
    );
}

export default Main;
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { news } from '../../data'

function News() {
    return (
        <div className='news'>
            <div className='inner'>
                <div className='newsHeader'>
                    <h3>하나소식</h3>
                    <a className='more' href='#!'>More</a>
                </div>
                <div className='newsBody'>
                    <Swiper
                        
                    >
                        {
                            news.map((item, i) => (
                                <SwiperSlide key={ item.id }>
                                    <a href='#!'>
                                        <div className='thumb'>
                                            <img src={ item.img } alt='' />
                                        </div>
                                        <div className='description'>
                                            <p className='badge'><span>하나뉴스</span></p>
                                            <p className='title'>{ item.title }</p>
                                            <p className='date'>{ item.date }</p>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default News
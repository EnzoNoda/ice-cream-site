'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './styles.css'

import slides from './slides.json'
import Image from 'next/image'

export const SwiperComponent = () => {
    return (
        <div className="w-[90%]">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                loop
                pagination={{ clickable: true }}
                className="h-96 w-full"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50
                    }
                }}
                navigation
            >
                {slides.slides.map(slide => (
                    <SwiperSlide key={slide.img}>
                        <div className="flex justify-center items-center flex-col bg-primary-300 h-96 rounded-lg">
                            <Image
                                src={slide.img}
                                alt="ice-cream"
                                width={200}
                                height={200}
                            />
                            <h2 className="text-lg mt-5 font-fredoka">
                                {slide.flavor}
                            </h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

'use client';

import './depoiments.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

function Depoiments() {
    return (
        <section className="depoiments__container" id='depoiments'>
            <div className="depoiments container">
                <h3>Depoimentos dos nossos clientes</h3>
            </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={true}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                        alt="Image Two"
                    />
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                        alt="Image One"
                    />
                </SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </section>
    );
}

export { Depoiments };

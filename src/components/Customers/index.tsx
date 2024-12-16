'use client';

import './customers.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import Image from 'next/image';

function Customers() {
    return (
        <section className="customer__container">
            <div className="customer container">
                <h3>Algums de nossos clientes</h3>
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
                        <Image className='image-next' src='/piramide-logo.png' width={80} height={80} alt='Pirâmde logotipo' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='image-next' src='/piramide-logo.png' width={80} height={80} alt='Pirâmde logotipo' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='image-next' src='/piramide-logo.png' width={80} height={80} alt='Pirâmde logotipo' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='image-next' src='/piramide-logo.png' width={80} height={80} alt='Pirâmde logotipo' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export { Customers };

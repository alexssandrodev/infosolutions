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
          <h4>Pirâmide colégio e curso</h4>
          <p>O site que foi criado ficou muito bom, recomendo a infosolutions.</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4>JS automecânica</h4>
          <p>O sistema para oficinas me atende muito bem,
            ajuda na gestão da oficina
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export { Depoiments };

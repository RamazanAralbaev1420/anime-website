import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import TopRateCard from './TopRateCard';
import {useEffect, useState} from "react";
import {getUpdate} from "../../api/index.js";
import {Link} from "react-router-dom";


export const TopRateAnime = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (event) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);





    const [update, setUpdate] = useState([])
    const createUpdate = async () => {
        const timeOutUpdate = await getUpdate()
        setUpdate(timeOutUpdate.data.list)
    }

    useEffect(() => {
        createUpdate();
    }, []);

  return (
    <>
      <h2 className="text-3xl font-bold ">Обновленные аниме</h2>
      <Swiper
        className="slider my-5"
        spaceBetween={10}
        slidesPerView={width > 900 ? 7 : width < 900 && width > 700 ? 5 : 4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
          {
              update.map(item => {
                  return (
                      <SwiperSlide key={item.id} className="corusel-toprate">
                          <TopRateCard name={item.names.ru.length < 20 ? item.names.ru : item.names.ru.slice(0, 20) + '...'} img={item.posters.small.url} code={item.code}/>
                      </SwiperSlide>
                  )
              })
          }

      </Swiper>
    </>
  );
};

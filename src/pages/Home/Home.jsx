import {useEffect, useRef, useState} from 'react';
import { getSchedule } from '../../api';
import {Link} from "react-router-dom";
import {TopRateAnime} from "../../components/TopRate/TopRateAnime.jsx";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";

const Home = ({ text, setText }) => {
  const [schedule, setSchedule] = useState([])
  const createSchedule = async () => {
    const timeOutSchedyle = await getSchedule(text)
    setSchedule(timeOutSchedyle.data)
  }


  useEffect(() => {
    createSchedule();
  }, [text]);


  return (
      <div className=' '>

              <div className='Top-rate'>
                  <TopRateAnime />
              </div>
              <div className='new-anime'>

                     <h1 className='text-2xl'>Недавно вышедшие</h1>
                     <div className="anime-series flex flex-wrap gap-y-10 justify-between">
                         {schedule && schedule.list ?
                             schedule.list.map((item) => {
                                 return (
                                     <div className='card cursor-pointer duration-200' key={item.id} >
                                         <Link to={`/serials/${item.code}`}>
                                             <div className='anime-image'><img src={'https://anilibria.tv' + item.posters.small.url} alt=""/></div>
                                             <div className='anime-title p-1 font-bold text-center'>{item.names.ru.length < 30 ? item.names.ru : item.names.ru.slice(0, 30) + '...' }</div>
                                         </Link>
                                     </div>


                                 )
                             }) : <Skeleton />
                         }
                     </div>


              </div>
          </div>
  );
};

export default Home;

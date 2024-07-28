import Header from "../../components/Header/Header.jsx";
import {useEffect, useState} from "react";
import {getTitle} from "../../api/index.js";
import {useParams} from "react-router";
import ReactPlayer from "react-player";


function SinglePage() {
    const {code} = useParams()
    const [title, setTitle] = useState()
    const [activeEpisode, setActiveEpisode] = useState(1)

    const createTitle = async () => {
        const timeOutTitle = code && await getTitle(code)
        timeOutTitle && setTitle(timeOutTitle.data)
    }

    useEffect(() => {
        createTitle()
    }, [])
    return (
       <>
           {
               title ? <div className="singlePage">
                   <div className="singlePage-title text-3xl py-3 flex align-middle">{title.names.ru}</div>
                   <div className="singleInfo flex ">
                       <div className="singleAnimeImage flex ">
                           <img src={'https://anilibria.tv' + title.posters.small.url} alt=""/>
                       </div>
                       <div className="singleAnimeInfo ml-6">
                           <div className="singleHead px-2">
                               <span>{title.type.string}</span>
                               {
                                   title.type.length ? <span>{title.type.length}мин</span> : ''
                               }

                               <span>{title.season.string}</span>
                               <span>{title.season.year}</span>
                           </div>
                           <div className="singleBody">
                               <p><span className='font-bold'>Название:</span> <span>{title.names.ru} / {title.names.en}</span></p>
                               <p><span className='font-bold'>Студия:</span> <span>{title.team.timing}</span></p>
                               <p><span className='font-bold'>Жанры:</span> <span>{title.genres}</span></p>
                               <p><span className='font-bold'>Статус:</span>  <span>{title.status.string}</span></p>

                           </div>

                       </div>


                   </div>
                       <p className='mt-2'><span className='font-bold'>Описание:</span> <span>{title.description}</span></p>
                    <div className="series my-2 py-2">
                        <select className='bg-slate-800' value={activeEpisode} onChange={(e) => setActiveEpisode(e.target.value)}>
                            {title?.player.list.map(episode => {
                                return (<option className='text-white' key={episode.episode} value={episode.episode}>{episode.episode}</option>)

                            })}

                        </select>
                    </div>
                   <div className='py-5'>
                       {title?.player.list.map(episode =>
                               episode.episode == Number(activeEpisode) ? (
                                   <ReactPlayer
                                       width='100%'
                                       height='100%'
                                       controls
                                       url={`https://cache.libria.fun${episode.hls.hd}`}
                                   />
                               ) : (
                                   <> </>
                               )
                           )}
                   </div>
               </div>
               : <h1>Loading...</h1>
           }
       </>
    );
}

export default SinglePage;
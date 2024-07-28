import {Link} from "react-router-dom";


const TopRateCard = ({ name, img, code }) => {




    return (
       <>
           <Link to={`/serials/${code}`} className='topRate-card'>
               <div className=" ">
                   <div className="sl-img">
                     <img src={'https://anilibria.tv' + img} alt=""/>
                   </div>
                   <div className="sl-title">
                       <h2 className="slide-text absolute text-black bottom-0  ">
                           {name}
                       </h2>
                   </div>
               </div>
           </Link>

       </>
    );
};

export default TopRateCard;

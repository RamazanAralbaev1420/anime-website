import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {searchVal} from "../../store/Sliceses/SearchSlice.js";

const Header = ({text, setText}) => {

    // const [value, setValue] = useState('')
    // const dispatch = useDispatch()

        // const dispatchValue = (e) => {
        //     setValue(e.target.value)
        //     dispatch(searchVal(value))
        // }
    // console.log(value.length)
  return (
    <div className="Header flex justify-between items-center text-white">
      <div className="logo">
        <Link to="/" className="text-3xl font-bold text-white">
          Anime
        </Link>
      </div>
      <div className="nav_links flex gap-10">

      </div>
      <div className="search">
        <input className='text-black px-2' type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default Header;

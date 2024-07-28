import { Outlet } from 'react-router';
import Home from '../../pages/Home/Home';
import { TopRateAnime } from '../TopRate/TopRateAnime';
import Header from '../Header/Header';

export const Layout = ({ text, setText }) => {
  return (
    <div>
      <header className="head bg-slate-900 py-3">

        <div className="container">
          <Header text={text} setText={setText}/>
        </div>
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

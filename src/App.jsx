import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import  Home  from './pages/Home/Home.jsx'
import SinglePage from "./pages/SinglePage/SinglePage.jsx";
import {useState} from "react";

function App() {
    const [text, setText] = useState('')
      return (
    <div>
      <Routes>
        <Route path="/" element={<Layout text={text} setText={setText} />}>
          <Route path='/' element={<Home text={text} setText={setText} />} index/>
          <Route path="/serials/:code" element={<SinglePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

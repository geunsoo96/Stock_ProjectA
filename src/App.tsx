import Main from './Layout/Main';
import { Routes, Route } from 'react-router-dom';
import Top from './Pages/Top/Top';
import News from './Pages/News/News';
import Detail from './Pages/Detail/Detail';
import Algorithm from './Pages/Algorithm/Algorithm';
import Lotto from './Pages/Algorithm/Lotto';
import LoadingPage from './Pages/Loading/LoadingPage';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
        <Route path="/news" element={<News />}></Route>
        <Route path="/algorithm" element={<Algorithm />}></Route>
        <Route path="/lotto" element={<Lotto />}></Route>
        <Route path="/Top" element={<Top />}></Route>
        <Route path="/Detail/:code" element={<Detail />}></Route>
        <Route path="/Detail" element={<Detail />}></Route>
        <Route path='/loading' element={<LoadingPage/>}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

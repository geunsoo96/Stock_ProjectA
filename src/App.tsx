import Main from './Layout/Main';
import { Routes, Route } from 'react-router-dom';
import Top from './Pages/Top/Top';
import News from './Pages/News/News';
import Detail from './Pages/Detail/Detail';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Top />}></Route>
          <Route path="/Detail" element={<Detail />}></Route>
          <Route path="/News" element={<News />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

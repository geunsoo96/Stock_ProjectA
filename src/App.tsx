import Main from "./Layout/Main";
import { Routes, Route } from "react-router-dom";
import Top from "./Pages/Top/Top";
import News from "./Pages/News/News";
import Detail from "./Pages/Detail/Detail";
import "./App.css";
import Algorithm from "./Pages/Algorithm/Algorithm";
import Lotto from "./Pages/Algorithm/Lotto";

const App = () => {
    return (
    <>
    <Routes>
        <Route path="/" element={<Main />}>
<<<<<<< HEAD
          <Route path="/" element={<Top />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/algorithm" element={<Algorithm />}></Route>
          <Route path="/lotto" element={<Lotto />}></Route>
=======
            <Route path="/Top" element={<Top />}></Route>
            <Route path="/Detail" element={<Detail />}></Route>
            <Route path="/News" element={<News />}></Route>
>>>>>>> 359a1364ca4608f3c3cc4c0ce11748103bef3363
        </Route>
    </Routes>
    </>
    );
};

export default App;

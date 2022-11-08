import Main from "./Layout/Main";
import { Routes, Route } from "react-router-dom";
import Top from "./Pages/Top/Top";
import News from "./Pages/News/News";
import "./App.css";
import Algorithm from "./Pages/Algorithm/Algorithm";
import Lotto from "./Pages/Algorithm/Lotto";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Top />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/algorithm" element={<Algorithm />}></Route>
          <Route path="/lotto" element={<Lotto />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

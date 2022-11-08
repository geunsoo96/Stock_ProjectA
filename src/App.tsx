import Main from "./Layout/Main";
import { Routes, Route } from "react-router-dom";
import Top from "./Pages/Top/Top";
import News from "./Pages/News/News";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/Top" element={<Top />}></Route>
          <Route path="/News" element={<News />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

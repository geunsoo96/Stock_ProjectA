import Main from "./Layout/Main";
import { Routes, Route } from "react-router-dom";
import Top from "./Pages/Top/Top";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Top />}></Route>
        </Route>
      </Routes>
    </>
  );
};
//
export default App;

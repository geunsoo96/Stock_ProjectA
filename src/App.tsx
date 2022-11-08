import Main from './Layout/Main';
import {Routes,Route} from 'react-router-dom';
import Top from './Pages/Top/Top';
import Detail from './Pages/Detail/Detail';

const App = () => {

    return(<>
    <Routes>
    <Route path='/' element={<Main/>}>
    <Route path='/' element={<Top/>}></Route>
    </Route>
    </Routes>
    </>)
}

export default App;
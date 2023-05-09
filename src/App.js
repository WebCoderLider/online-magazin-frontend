import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Admin from "./Admin/Admin";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;

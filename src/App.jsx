import './App.css';
import Cards from './Components/Cards';
import Completed from './Components/Completed';
import DetailInput from './Components/DetailInput';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <main className=" min-h-[100svh] grid grid-cols-[30%_1fr]">
      <Cards />
      <Router>
        <Routes>
          <Route path='/' element={<DetailInput />} />
          <Route path='/completed' element={<Completed />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

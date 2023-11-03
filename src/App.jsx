import './App.css';
import Cards from './Components/Cards';
import Completed from './Components/Completed';
import DetailInput from './Components/DetailInput';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from 'react'; 

export const AppContext = createContext();

function App() {
  //default states on card
  const [nameCard, setNameCard] = useState("JANE APPLESEED");
  const [numberCard, setNumberCard] = useState("0000 0000 0000 0000");
  const [monthCard, setMonthCard] = useState("00");
  const [yearCard, setYearCard] = useState("00");
  const [cvcCard, setCvcCard] = useState("000")

  return (
    <AppContext.Provider value={{nameCard, setNameCard, numberCard, setNumberCard, monthCard, setMonthCard, yearCard, setYearCard, cvcCard, setCvcCard}}>
      <main className=" min-h-[100svh] grid grid-cols-[30%_1fr] lg1:grid-cols-[unset] lg1:grid-rows-[30%_1fr] ">
        <Cards />
        <Router>
          <Routes>
            {/* Route to the page that has the form */}
            <Route path='/' element={<DetailInput />} />
            
            {/* Route to the "thank you page" */}
            <Route path='/completed' element={<Completed />} />
          </Routes>
        </Router>
      </main>
    </AppContext.Provider>
  );
}

export default App;

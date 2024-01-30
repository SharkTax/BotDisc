import { useEffect, useState, createContext } from 'react';
import styles from'./App.css';
import {Home} from './pages/Home'
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { Navbar } from './pages/Navbar';
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';

export const AppContext = createContext();



function App() {
  const [userName, setusername] = useState("Victor")
  return (
    <div className="App">
      <AppContext.Provider value={{userName, setusername}}>
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<h1>Page not found</h1>}/>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;

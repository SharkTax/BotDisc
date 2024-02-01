import { useEffect, useState, createContext } from 'react';
import styles from'./App.css';
import {Home} from './pages/Home'
import { Contact } from './pages/Contact';
import { Form } from './pages/Form';
import { Navbar } from './pages/Navbar';
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext();



function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<h1>Page not found</h1>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;

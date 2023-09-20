import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Screening from './pages/Screening'
import Header from './components/Header'
import Footer from './components/Footer'
import Assessment from './pages/assesment/Assessment'
import Spelling from './pages/assesment/pages/spelling/Spelling'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import WordGame from 'pages/assesment/pages/word/word';
import MemoryGame from 'pages/assesment/pages/memoryGame/memoryGame'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Landing />}></Route>
        <Route path="/home" exact element={<Landing />}></Route>
        <Route path="/screening" exact element={<Screening />}></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
        <Route path="/login_pg" exact element={<Login />}></Route>
        <Route path="/assesment" exact element={<Assessment />}></Route>        
        <Route path="/spell" exact element={<Spelling />}></Route>     
        <Route path="/attention" exact element={<MemoryGame />}></Route>     
        <Route path="/wordGame" exact element={<WordGame />}></Route>     
        <Route path="/dashboard" exact element={<Dashboard />}></Route>     
      </Routes>
      <Footer />
    </div>

  );
}

export default App;

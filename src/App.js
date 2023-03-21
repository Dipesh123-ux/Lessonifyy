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
import ImageQuiz from './pages/assesment/pages/imageQuiz/index.jsx'
import Dashboard from './pages/Dashboard'
import Writing from 'pages/assesment/pages/writing'
import Speech from './pages/assesment/pages/speech'

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
        <Route path="/imagequiz" exact element={<ImageQuiz />}></Route>     
        <Route path="/dashboard" exact element={<Dashboard />}></Route>     
        <Route path="/writing" exact element={<Writing />}></Route>     
        <Route path="/speech" exact element={<Speech />}></Route>     

      </Routes>
      <Footer />
    </div>

  );
}

export default App;

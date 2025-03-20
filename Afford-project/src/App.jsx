import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import './App.css'
import Navbar from "./Components/Navbar";
import Trending_post from "./pages/Trending Post/Trending_post";
import Feed from "./pages/Feed/Feed";
import Top_user from "./pages/Top-users/Top_user";

function App() {
  
  return (
    <>
    <Router>
     <Navbar/>
    <Routes>
      
          <Route path="/" element={<Feed/>} />
          <Route path="/T-u" element={<Top_user/>} />
          <Route path="/f-d" element={<Trending_post/>} />
        </Routes>
    </Router>
    </>
  )
}

export default App

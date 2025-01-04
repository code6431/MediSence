import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Pricing from "./Components/Pricing";
import SignUp from "./Components/Signup/Index";
import Contact from "./Components/Contact";
 import CommunityPost from "./Components/Community";





const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact/>}/>
         <Route path="/community" element={<CommunityPost/>}/> 
        
      </Routes>
    </Router>
  );
};

export default App;

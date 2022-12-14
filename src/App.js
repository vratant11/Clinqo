
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import './App.css';
import Blog from './Pages/Bolg';
import Bloginfo from './Pages/Bloginfo';
function App() {
  return (
    <Router>
    <Routes>
     
      <Route path="/" element={<Blog />} />
      <Route path="/bloginfo" element={<Bloginfo />} />

    </Routes>
  </Router>
  );
}

export default App;

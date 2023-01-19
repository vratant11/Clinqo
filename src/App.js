
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import './App.css';
import Blog from './Pages/Bolg';
import Bloginfo from './Pages/Bloginfo';
import WriteBlog from './Pages/WriteBlog';


function App() {
  return (
    <Router>
    <Routes>
     
      <Route path="/" element={<Blog />} />
      <Route path="/bloginfo" element={<Bloginfo />} />
      <Route path="/write" element={<WriteBlog />} />


    </Routes>
  </Router>
  );
}

export default App;

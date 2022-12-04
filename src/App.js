
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import './App.css';
import Blog from './Pages/Bolg'

function App() {
  return (
    <Router>
    <Routes>
     
      <Route path="/" element={<Blog />} />
     
    </Routes>
  </Router>
  );
}

export default App;

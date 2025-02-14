import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import '@fontsource/poppins'; // Defaults to weight 400
import '@fontsource/poppins/300.css'; // Light weight
import '@fontsource/poppins/600.css'; // Semi-bold


const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;

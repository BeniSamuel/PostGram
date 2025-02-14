import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import '@fontsource/poppins'; // Defaults to weight 400
import '@fontsource/poppins/300.css'; // Light weight
import '@fontsource/poppins/600.css'; // Semi-bold
import Search from './pages/Search/Search';
import Messages from './pages/Messages/Messages';
import SavedPosts from './pages/SavedPosts/SavedPosts';
import Notifications from './pages/Notifications/Notifications';


const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />}/>
        <Route path="/notifications" element={<Notifications />}/>
        <Route path="/savedPosts" element={<SavedPosts />}/>
        <Route path="/messages" element={<Messages />}/>
      </Routes>
    </Router>
  )
}

export default App;

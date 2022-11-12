import './App.css';
//Task 1: Create and render the CampsiteCard component
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
//In App.js, add a Route component that will direct requests to the about path to the AboutPage component. You must import the AboutPage component in order to do this.
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='directory' element={<CampsitesDirectoryPage />} />
          <Route path='directory/:campsiteId' element={<CampsiteDetailPage />} />
          <Route path='about' element={<AboutPage />} />
        </Routes>
        <Footer />
    </div>
  );
}


export default App;

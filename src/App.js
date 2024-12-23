import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/landingpage/LandingPage';
import Auth from './pages/auth/Auth';
import Dashboard from './components/dashboard/Dashboard';
import Application from './pages/application/Application';
import MarketAnalysis from './components/marketanalysis/MarketAnalysis';
import Weather from './components/weather/Weather';
import Greenscan from './components/greenscan/Greenscan';
import ProfileView from './components/profileview/ProfileView';
import ProfileInput from './components/profileinput/ProfileInput';
import News from './components/news/News';
import CropPrediction from './components/crop-prediction/CropPrediction'
import Feed from './components/feed/Feed';
import Land from './components/land/Land';




function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage city="karanja" signInfo="Sign In" />} />
        <Route path="auth" element={<Auth />} />
        <Route path="application" element={<Application />} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="market" element={<MarketAnalysis />} />
            <Route path="weather" element={<Weather/>} />
            <Route path="profile-view" element={<ProfileView />} />
            <Route path="profile-input" element={<ProfileInput />} />
            <Route path="greenscan" element={<Greenscan />} />
            <Route path="news" element={<News />} />
            <Route path="crop-prediction" element={<CropPrediction />} />
            <Route path="agriloop" element={<Feed />} />
            <Route path="land" element={<Land />} />  
            
        </Route>
      </Routes>
     </BrowserRouter>
  );
}

export default App;

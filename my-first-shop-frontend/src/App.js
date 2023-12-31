
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GoodsList from './pages/GoodsList';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import AddGoods from './pages/AddGoods';
import Header from './components/UiComponent/Header';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/home" element={<Main />} />
          <Route path="/goods" element={<GoodsList />} />
          <Route path="/addgoods" element={<AddGoods />} />
          <Route path="/loginpage" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

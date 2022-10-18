import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './CSS/styles.min.css';
import Navbar from './Components/Navbar/Navbar'
import Showcase from './Components/Showcase/Showcase'
import PromoBanner from './Components/PromoBanner/PromoBanner';
import HomeView from './Components/Views/HomeView';
import ContactView from './Components/Views/ContactView';
import PageNotFound from './Components/Views/PageNotFound';
import ProductView from './Components/Views/ProductView';
import CategoriesView from './Components/Views/CategoriesView';
import CartView from './Components/Views/CartView';
import FavoritesView from './Components/Views/FavoritesView';
import LogInView from './Components/Views/LogInView';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/contact' element={<ContactView />} />
        <Route path='/product/:id' element={<ProductView />} />
        <Route path='/categories' element={<CategoriesView />} />
        <Route path='/cart' element={<CartView />} />
        <Route path='/favorites' element={<FavoritesView />} />
        <Route path='/login' element={<LogInView />} />

        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </Router>
    {/* Enable site scrolling */}
      <div style={{'height': '2000px'}}></div>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './CSS/styles.min.css';
import HomeView from './Components/Views/HomeView';
import ContactView from './Components/Views/ContactView';
import PageNotFound from './Components/Views/PageNotFound';
import ProductView from './Components/Views/ProductView';
import CategoriesView from './Components/Views/CategoriesView';
import CartView from './Components/Views/CartView';
import FavoritesView from './Components/Views/FavoritesView';
import LogInView from './Components/Views/LogInView';
import CategoriesViewSingle from './Components/Views/CategoriesViewSingle';
import ScrollToTop from './JS/ScrollToTop';
import Description from './Components/ProductSubRoutes/Description';
import Additional from './Components/ProductSubRoutes/Additional';
import Returns from './Components/ProductSubRoutes/Returns';
import Review from './Components/ProductSubRoutes/Review';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/contact' element={<ContactView />} />
        <Route path='/product/:id' element={<ProductView />}>
          <Route index path='description' element={<Description />} />
          <Route path='additional' element={<Additional />} />
          <Route path='returns' element={<Returns />} />
          <Route path='review' element={<Review />} />
          
        </Route>
        <Route path='/categories' element={<CategoriesView />} />
        <Route path='/cart' element={<CartView />} />
        <Route path='/favorites' element={<FavoritesView />} />
        <Route path='/login' element={<LogInView />} />
        <Route path='/categories/:category' element={<CategoriesViewSingle />} />

        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </Router>
    {/* Enable site scrolling */}
      <div style={{'height': '2000px'}}></div>
    </>
  );
}

export default App;

import React, { useEffect } from 'react';
import {Route, Switch} from 'react-router-dom'
import {AboutPage} from './pages/AboutPage'
import {HomePage} from './pages/HomePage'
import {CartPage} from './pages/CartPage'
import {MenuPage} from './pages/MenuPage'
import {CategoryPage} from './pages/CategoryPage'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {_404} from './pages/404'
import setProducts from './redux/actions/products'
import {useDispatch} from 'react-redux'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {

    (async () => {
      const response = await fetch('/products.json')
      const products = await response.json()
      dispatch(setProducts(products))
    })()

  }, [])

  const renderPage = Component => {
    window.scrollTo(0, 0)

    return Component
  } 

  return (
    <div>
      <Navbar />
      <Switch>
        <Route render={() => renderPage(<HomePage />)} path="/" exact />
        <Route render={() => renderPage(<AboutPage />)} path="/about" exact />
        <Route render={() => renderPage(<CartPage />)} path="/cart" exact />
        <Route render={() => renderPage(<MenuPage />)} path="/menu" exact />
        <Route render={() => renderPage(<CategoryPage />)} path="/category/:categoryName" exact />
        <Route render={() => renderPage(<_404 />)} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

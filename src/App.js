import React from 'react'
import './App.css'

import { Provider } from 'react-redux'
import store from './store'

import Header from './Components/Header/'
import ProductList from './Components/ProductList'

const App = () => {
    return (
        <>
        <Provider store={store}>
            <Header />
            
            <ProductList />
        </Provider>
        </>
    )
}

export default App
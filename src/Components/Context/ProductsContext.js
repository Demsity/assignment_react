import React, { createContext, useContext, useState } from "react";
import SearchBar from "../Searchbar/SearchBar";

const ProductsContext = createContext()

export const useProducts = () => {
    return useContext(ProductsContext)
}

export const ProductsProvider = ({children}) => {
    const url = 'https://win22-webapi.azurewebsites.net/api/products'
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [gridProducts, setGridProducts] = useState([])

    const getProducts = async () => {
        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getProduct = async (articleNumber) => {
        const res = await fetch(url + `/${articleNumber}`)
        setProduct(await res.json())
    }

    const getGridProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setGridProducts(await res.json())
        
    }


    

    return <ProductsContext.Provider value={{ product, products, gridProducts, getProducts, getProduct, getGridProducts }}>
        {children}
        <SearchBar />
    </ProductsContext.Provider>

}
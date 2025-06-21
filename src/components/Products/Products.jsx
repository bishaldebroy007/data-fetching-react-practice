import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';

const Products = ({ handelButtonClickData }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from the API:
        fetch('FakeData.json')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                products.map(product => <Product
                    key={product.id} // Must be unique for each product and must be added otherwise an error will occure.
                    product={product}
                    handelButtonClickData={handelButtonClickData} // Passing the function as a prop to Product component.
                />)
            }
        </div>
    )
}

export default Products

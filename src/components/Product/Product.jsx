import React from 'react'

const Product = ({ product, handelButtonClickData }) => {
    // Destructuring the product object to get its properties.
    const { id, name, age, profession, email, phone, image } = product;

    // const handelButtonClick = () => {
    //     alert(`You have added ${name} to the cart!`);
    //     // Here you can add functionality to handle the button click, like adding the product to a cart.
    //     console.log(`Product ID: ${id}, Name: ${name}`);
    // }

    return (
        <div className='m-10 p-5 border-2 border-green-400 rounded-3xl'>
            <h2 className='font-semibold text-2xl mb-3'>{name}</h2>
            <p>Age: {age}</p>
            <p>Profession: {profession}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            {/* <img src={image} alt={name} style={{ width: '100px', height: '100px' }} /> */}
            <button onClick={handelButtonClickData} className='bg-amber-800 p-2 rounded-xl shadow hover:bg-blue-400 mt-2 cursor-pointer'>Add to Cart!</button>
        </div>
    )
}

export default Product

import React from 'react'

const SingleCartData = ({ SingleData }) => {
    const { name, age, profession } = SingleData;
    // Destructuring the SingleData object to get its properties.
    return (
        <div>
            <h1> {name} </h1>
            <p>{age}</p>
            <p>{profession}</p>
            {/* <img src={image} alt={name} style={{ width: '100px', height: '100px' }} /> */}
            {/* <button onClick={handelButtonClickData} className='bg-amber-800 p-2 rounded-xl shadow hover:bg-blue-400 mt-2 cursor-pointer'>Add to Cart!</button> */}

        </div>
    )
}

export default SingleCartData

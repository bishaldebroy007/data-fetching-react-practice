import React from 'react'

const Placement = ({ cart }) => {
    return (
        <div className='mt-10'>
            <h1 className='text-2xl font-bold'>List</h1>
            {
                cart.map(SingleData => <SingleCartData
                    key={SingleData.id}
                    SingleData={singleData}
                // handelButtonClickData={handelButtonClickData} // Passing the function as a prop to Product component.
                />)
            }
        </div>
    )
}

export default Placement

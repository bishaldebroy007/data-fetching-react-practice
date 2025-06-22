import React, { useState } from 'react';


const SpecialButton = () => {
    const [isSpecial, setSpecial] = useState(false);

    const handelClick = () => {
        setSpecial(!isSpecial); // Toggle the state
        // This will change the text of the button when clicked.

    }

    return (
        <div>
            <button onClick={handelClick} className='border border-amber-600 bg-amber-800 p-5 mb-5 rounded-2xl hover:bg-blue-400 shadow-lg text-white font-bold text-xl cursor-pointer'>
                Click here to Change
            </button>
            <div>
                <p className='text-2xl font-bold'>{isSpecial ? 'I am a bad person' : 'I am a good person'}</p>
            </div>
        </div>
    )
}

export default SpecialButton

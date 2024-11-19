import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../features/counterSlice';

const Counter = () => {
    const { person } = useSelector((state) =>
        state.counter

    );

    const displatch = useDispatch();

    const handleIncrease = (productId) => {
        displatch(increment(productId))
    }

    return (
        <div>
            {person.map((val) => (
                <div key={val.id}>
                    <h1>
                        {val.name}
                    </h1>
                    <h1>
                        
                            {val.age}
                        
                    </h1>
            <button onClick={()=>handleIncrease(val.id)}>+</button>

                </div>
                
            ))}

        </div>
    )
}

export default Counter

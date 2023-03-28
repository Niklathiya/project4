import React from 'react'
import { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = {count};
    }, [count]);


    return (
        <div>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={() => setCount(count - 1)} className="btn btn-primary m-2">Decrement</button>
                <button onClick={() => setCount(count + 1)} className="btn btn-primary m-2">Increment</button>
            </div>
        </div>
    )
}

export default Counter

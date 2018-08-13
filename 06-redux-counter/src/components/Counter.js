import React from 'react';

function Counter(props) {
    const { value = 0, onIncrement, onDecrement } = props;
    return(
            <div>
                <p>
                    Counter value: {value}
                    {' '}
                    <button onClick={onIncrement}>
                        +
                    </button>
                    {' '}
                    <button onClick={onDecrement}>
                        -
                    </button>
                </p>
            </div>
        )
}

export default Counter

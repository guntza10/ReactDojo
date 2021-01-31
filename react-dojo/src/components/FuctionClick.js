import React from 'react';

function FuctionClick() {
    function clickHandler() {
        console.log('Button Clicked! in Function');
    }

    return (
        <div>
            {/* Function Call */}
            {/* <button onClick={clickHandler()}>Click</button> */}
            {/* Function */}
            <button onClick={clickHandler}>Click in Function</button>
        </div>
    );
}

export default FuctionClick;

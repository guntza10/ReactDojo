import React from 'react'

function MethodAsPropsChild(props) {
    return (
        <div>
            <button onClick={props.methodAsProps1}>Method As Props</button>
            <button onClick={() => props.methodAsProps2('Akuma')}>Method As Props with paremeter</button>
        </div>
    )
}

export default MethodAsPropsChild

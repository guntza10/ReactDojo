import React from 'react';

// Props ของ Functional Component
function PropDemo(props) {
    console.log('function props', props);
    return (
        <div>
            <h2>Hello {props.name} A.K.A {props.heroName}</h2>
            <div> {props.children}</div>
        </div>
    );
}

export default PropDemo;
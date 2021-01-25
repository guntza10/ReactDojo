import React from 'react';

// Props ของ Functional Component
// function PropDemo(props) {
//     console.log('function props', props);
//     return (
//         <div>
//             <h2>Hello {props.name} A.K.A {props.heroName}</h2>
//             <div> {props.children}</div>
//         </div>
//     );
// }

// Destructuring Props Approach 1
function PropDemo({ name, heroName }) {
    return (
        <div>
            <h2>Hello {name} A.K.A {heroName}</h2>
            <div> {props.children}</div>
        </div>
    );
}

// Destructuring Props Approach 2
// function PropDemo(props) {
//     const { name, heroName } = props;
//     return (
//         <div>
//             <h2>Hello {name} A.K.A {heroName}</h2>
//             <div> {props.children}</div>
//         </div>
//     );
// }

export default PropDemo;
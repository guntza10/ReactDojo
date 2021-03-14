import React from 'react'

function PersonList({ person, key }) {
    return (
        <div>
            <h2>{key} : I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>
        </div>
    )
}

export default PersonList

import React from 'react';
import PersonList from './PersonList';

function NameList() {
    const names = ['Bruce', 'Diana', 'Clark'];

    // Element Variables (เป็น 1 ใน Conditional Rendering)
    const nameList = names.map(name => <h2 key={name}>{name}</h2>);

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 25,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Diana',
            age: 30,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Clark',
            age: 27,
            skill: 'Vue'
        }
    ];

    const personeList = persons.map(person => <PersonList key={person.id} person={person} />);

    return (
        <div>
            {
                // names.map(name => <h2>{name}</h2>)
                nameList
            }
            { personeList}
        </div>
    )
}

export default NameList

import React from 'react'

class Task extends React.Component{
    render(){
        const array = ['Abracadabra', 'Barco', 'Corsa', 'Distintivo'];
        return (
            <ol>
                {array.map(ele => <li>{ele}</li>)}
            </ol>
        );
    };
}

export default Task
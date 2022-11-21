
import React from 'react';
type userT = {
    name: string;
    age: number;
    name1: string
    id: number
    isActive: boolean

}


const Userst = ({ name, name1, age, id, isActive }: userT) => {
    return (
        <div>
            <h2>{name}</h2>
            <h2>{name1}</h2>
            <p>{age}</p>
            <h2>{id}</h2>
            {isActive ? <p>Active user</p> : <p>user not active</p>}
        </div>
    );
};

export default Userst;


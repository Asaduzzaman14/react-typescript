import React from 'react';
type langProps = {
    user: {
        name: string;
        age: number;
        isregister: boolean;
        lang: string[];
    }
}

const Langauge = ({ user }: langProps) => {


    return (
        <div>
            <h2>   Name: {user.name}</h2>
            <h4>age: {user.age} years old</h4>

            <p> spaks:
                {
                    user.lang.map((language, index) => {
                        return <span key={index}>{language} </span>
                    })
                }
            </p>

        </div>
    );
};

export default Langauge;
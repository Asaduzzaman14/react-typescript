import React from 'react';

type userDemoProps = {
    users: {
        id: number;
        name: string;
        email: string;
        age: number;
    }[]
}


const UserDemo = ({ users }: userDemoProps) => {
    console.log(users);

    return (
        <div>
            {users.map((user) => {
                return (
                    <div style={{ border: "2px solid red" }}>
                        <h2>{user.name}</h2>
                        <h3>{user.email}</h3>
                        <h4>{user.age}</h4>
                        <h4>{user.age}</h4>
                        <h4>{user.id}</h4>
                    </div>
                )
            })}
        </div>
    );
};

export default UserDemo;
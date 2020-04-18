import React from 'react';

const data = {
    velopert:{
        name:'Kim Mans',
        description:'React like developer'
    },
    gildong:{
        name:'Hong Gil Dong',
        description:'Stroy main actor'
    }
};

const Profile = ({match})=>{
    const {username} = match.params;
    
    const profile = data[username];

    if(!profile){
        return <div>not existed user</div>;
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};
export default Profile;
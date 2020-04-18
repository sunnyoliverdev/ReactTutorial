import React from 'react';
import {Link, Route} from 'react-router-dom';
import Profile from './Profile';

const Profiles = () =>{
    return (
        <>
            <h3>
                User List
            </h3>
            <ul>
                <li><Link to='/profiles/velopert'>velopert</Link></li>
                <li><Link to='/profiles/gildong'>gildong</Link></li>
            </ul>

            <Route path="/profiles" exact render={()=><div>Select the user</div>} />
            <Route path='/profiles/:username' component={Profile} />
        </>
    )
}

export default Profiles;
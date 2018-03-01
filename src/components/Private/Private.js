import React from 'react';

export default class Private extends React.Component {
    render() {
        const user = this.props.user;
        return (
            <div className=''>
                <h1>Community Bank</h1><hr />
                <h4>Account information:</h4>
                { user ? <img className='avatar' src={user.img} alt='' /> : null }
                <p>Username: { user ? user.user_name : null }</p>
                <p>Email: { user ? user.email : null }</p>
                <p>ID: { user ? user.auth_id : null }</p>
                <h4>Available balance: { user ? this.bankBalance() : null } </h4>
                <a href='http://localhost:3005/auth/logout'><button>Log out</button></a>
            </div> 
        )
    }
}
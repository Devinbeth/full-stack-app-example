import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/users.js';

class Private extends Component {

    componentDidMount() {
        this.props.getUser();
    }

    bankBalance() {
        return '$' + Math.floor((Math.random() + 1) * 1000) + '.00';
    }

    render() {
        const user = this.props.user;
        return (
            <div className=''>
                <h1>Community Bank</h1><hr />
                <h4>Account information:</h4>
                { user ? <img className='avatar' src={user.img} alt='' /> : null }
                <p>Username: { user ? user.username : null }</p>
                <p>ID: { user ? user.auth_id : null }</p>
                <h4>Available balance: { user ? this.bankBalance() : null } </h4>
                <a href='http://localhost:3535/auth/logout'><button>Log out</button></a>
            </div> 
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, { getUser })(Private);

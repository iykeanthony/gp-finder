import React from 'react'
import './UserItem.css'

const UserItem=(props)=> {
        return (
            <div className='card text-center'>
                <div className="card-body">
                    <img alt='' src={props.user.avatar_url} className='round-img' />
                    <h3 className="card-title">{props.user.login}</h3>
                    <div>
                        <a className='btn btn-outline-success btn-sm' rel="noopener noreferrer" target="_blank" href={props.user.html_url}>More</a>
                    </div>
                </div>
            </div>
        )
    }

export default UserItem

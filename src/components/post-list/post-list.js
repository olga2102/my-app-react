import React from 'react';
import { ListGroup } from 'reactstrap';

import './post-list.css'

import PostListItem from '../post-list-item';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {
        return <li key = {item.id} className = 'list-group-item'>
            <PostListItem 
            onDelete = {()=> onDelete(item.id)}
            label={item.label} 
            important= {item.important}
            like= {item.like}
            onToggleImportant={() => onToggleImportant(item.id)}
            onToggleLiked={() => onToggleLiked(item.id)}/>
        </li>
    })

    return (
        <ListGroup className='app-list'>
            {elements}
        </ListGroup>
    )
}

export default PostList;
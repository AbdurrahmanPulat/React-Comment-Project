import React from 'react'
import { faker } from '@faker-js/faker';
const Comment = ({names,timeAgo,star,comment,avatar}) => {

  return (
    <div className="comment">
    <a className="avatar" href='/'>
      <img alt='' src={avatar}/>
    </a>
    <div className="content">
      <a className="author" href='/'>{names}</a>
      <div className="metadata">
        <div className="date">{timeAgo} days ago</div>
        <div className="rating">
          <i className="star icon"></i>
          {star} Faves
        </div>
      </div>
      <div className="text">
        {comment}
      </div>
    </div>
  </div>
  )
}

export default Comment

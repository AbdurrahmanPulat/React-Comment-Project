import React from 'react'

const Card = (props) => {
  return (
    <div className="ui card">
  <div className="content">
  {props.children}
    
  </div>
  <div className="extra content">
    <span className="left floated like">
      <i className="like icon"></i>
      Like
    </span>
    <span className="right floated star">
      <i className="star icon"></i>
      Favorite
    </span>
  </div>
</div>
  )
}

export default Card

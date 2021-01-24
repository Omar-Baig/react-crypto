import React from 'react';

const Card = props => {
    return(
        <div className="card">
            <div className="rank">{props.rank}</div>
            <div className="name">Name</div>
            <div className="price">Price</div>

        </div>
    )
}

export default Card;
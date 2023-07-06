import React from 'react';

export default function Avatar({image, isNew}) {
  return (
    <div className="avatar">
      <img className="image" src={image} alt="profile" />
      {isNew === true && <span className="tag">New</span>}
    </div>
  );
}


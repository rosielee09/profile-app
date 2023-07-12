import React from 'react';
import Avatar from './Avatar';

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className="profile">
      <Avatar image={image} isNew={isNew} />
      <h1 className="name">{name}</h1>
      <p className="title">{title}</p>
    </div>
  );
}

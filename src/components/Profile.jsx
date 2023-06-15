import React from 'react';

export default function Profile() {
  return (
    <div className="profile">
      <img className='image'
        src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="profile"
      />
      <h1 className="name">Rosie L</h1>
      <p className="title">Front-end Developer</p>
    </div>
  );
}

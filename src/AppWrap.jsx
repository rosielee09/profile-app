import React from 'react';

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          name="Bob"
          size={200}
        />
        <p>Hello!</p>
      </Navbar>
    </div>
  );
}

function Navbar({children}) {
  return (
    <header style={{ background: 'yellow' }}>
      {children}
    </header>
  );
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={name}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
}

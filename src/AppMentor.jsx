import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: 'Rosie',
    title: 'Front End Developer',
    mentor: {
      name: 'Andrew',
      title: 'Senior Developer',
    },
  });

  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>
        {person.name}'s mentor is {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt("what's your mentor's name?");
          setPerson((prev) => ({
            ...person,
            mentor: { ...person.mentor, name },
          }));
        }}
      >
        changge mentor's name
      </button>
      <button
        onClick={() => {
          const title = prompt("what's your mentor's title?");
          setPerson((prev) => ({
            ...person,
            mentor: { ...person.mentor, title },
          }));
        }}
      >
        changge mentor title
      </button>
    </div>
  );
}

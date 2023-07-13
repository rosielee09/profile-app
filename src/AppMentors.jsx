import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`who's name you want to change `);
    const current = prompt(`changed name will be `);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));
  };
  const handleAdd = () => {
    const name = prompt("Mentor's name");
    const title = prompt("Mentor's title");
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name, title }],
    }));
  };
  const handleDelete = () => {
    const name = prompt(`which mentor do you want to delete`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((m) => m.name !== name),
    }));
  };

  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>{person.name}'s mentor is:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>Change mentor's name</button>
      <button onClick={handleAdd}>Add mentor</button>
      <button onClick={handleDelete}>Delete mentor</button>
    </div>
  );
}

const initialPerson = {
  name: 'Rosie',
  title: 'Front End Developer',
  mentors: [
    {
      name: 'Bob',
      title: 'Senior Developer',
    },
    {
      name: 'James',
      title: 'Full Stack Developer',
    },
  ],
};

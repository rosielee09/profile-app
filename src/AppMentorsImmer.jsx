import React from 'react';
import { useImmer } from 'use-immer';

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`who's name you wnat to update?`);
    const current = prompt(`what name you want to change to`);
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };

  const handleAdd = () => {
    const name = prompt("Mentor's name");
    const title = prompt("Mentor's title");
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };

  const handleDelete = () => {
    const name = prompt(`which mentor do you want to delete`);
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      if(index < 0) return;
      person.mentors.splice(index, 1);
    });
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

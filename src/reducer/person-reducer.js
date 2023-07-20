export default function personReducer(person, action) {
  
  switch (action.type) {
    case 'updated': {
      const { prev, current } = action; //object deconstructing(action에 있는 prev,와 current값 가져옴)
      // same as const prev = action.prev; , const current = action.current;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case 'added': {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case 'deleted': {
      return {
        ...person,
        mentors: person.mentors.filter((m) => m.name !== name),
      };
    }
    default: {
      throw Error(`Undefined action type ${action.type}`);
    }
  }
}

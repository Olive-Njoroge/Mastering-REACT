// src/components/PeopleList.jsx
import { useEffect, useState } from 'react';
import api from '../services/api';

export default function PeopleList() {
  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    const res = await api.get('/');
    setPeople(res.data);
  };

  const deletePerson = async (id) => {
    await api.delete(`/${id}`);
    setPeople(people.filter(p => p._id !== id));
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">People</h2>
      <ul className="space-y-2">
        {people.map(person => (
          <li key={person._id}>
            <span>{person.name} — {person.email}</span>
            <button
              onClick={() => deletePerson(person._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

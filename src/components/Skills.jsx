import React, { useState, useEffect } from 'react'

export default function Skills({skills}) {
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoggedIn(true)
        }, 500)
    }, []);
  return (
    <div>
        <h2>List of skills</h2>
      <ul>
        {skills.map((skill) => (
            <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
      {
        loggedIn
            ? (<button>start working</button>)
            : (<button onClick={() => setLoggedIn(true)}>login </button>)
      }
    </div>
  )
}

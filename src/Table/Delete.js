import { useState } from 'react';

const Delete = () => {
    const [matboards, setMatboards] = useState([{id:1,name:"matboard1"},{id:2,name:"matboard2"}]);

    const deleteMatboard = (matboardId) => {
      setMatboards(matboards.filter(matboard => matboard.id !== matboardId));
    }
   
  return (
    <div>
    <ul>
      {matboards.map(matboard => (
        <li key={matboard.id}>
          <span>{matboard.name}</span>
          <button onClick={() => deleteMatboard(matboard.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Delete








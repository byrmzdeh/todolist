import React, { useState } from 'react';
import './sass/style.scss';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [ulvalue, setUlValue] = useState([]);

  const add = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setUlValue([...ulvalue, inputValue]);
      setInputValue('');
    }
  };

  const remove = (index) => {
    const updatedulvalue = [...ulvalue];
    updatedulvalue.splice(index, 1);
    setUlValue(updatedulvalue);
  };

  return (
    <div className='todolist'>
      <h1>TODO LIST</h1>
      <form onSubmit={add}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      <ul>
        {ulvalue.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => remove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;



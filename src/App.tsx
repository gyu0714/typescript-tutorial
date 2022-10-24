import React from 'react';
import './App.css';
import ReducerSample from './ReducerSample';
// import Counter from './Counter';
// import MyForm from './MyForm';
// import Grettings from './Greetings';

function App() {
  // const onClick = (name: string) => {
  //   console.log(`${name} says hello`);
  // }
  const onSubmit = (form: {name: string; description: string}) => {
    console.log(form);
  }
  return (
    // <Grettings name="Hello" onClick={onClick} />
    // <Counter />
    // <MyForm onSubmit={onSubmit} />
    <ReducerSample />
  );
}

export default App;

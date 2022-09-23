import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Numbers></Numbers>
      <Users></Users>
      
    </div>
  );
}


function Users (){
  const [users, setUsers] = useState([]);

  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  } , [])

  return(
    <div>  
     {
      users.map( user => loadUsers(user))  
     }
    </div>
  )
}

const loadUsers = (props) =>{

  console.log(props)
   return(
    <div>
      <h3>Name : {props.name}</h3>
      <p>Email: {props.email} </p>
      <p>City:{props.address.city} </p>
    </div>
   )
}


















const Numbers = () => {
  const [count, setCount] = useState(0);

   const increasesNum = ()=> {
    let newCount = count + 1;
    setCount(newCount)
  }


  const decreasesNumber = () => setCount(count - 1)
 
  return(
    <div>
      <h1>Number: {count}</h1>
      <button onClick={increasesNum}>Increases</button>
      <button onClick={decreasesNumber}>Decreases</button>
    </div>
  )
}






export default App;

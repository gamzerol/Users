import React, {useState} from 'react';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const deletedMember = (memberID) => {
    console.log(memberID)
    return users.filter(user => user.id !== memberID)
    
  }
  return (
    <div className="App">
      <UserForm users={users} setUsers={setUsers} />
      <Users memberList={users} setUsers={setUsers} />
    </div>
  );
}

export default App;

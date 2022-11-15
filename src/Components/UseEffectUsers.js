import React, { useEffect, useState } from 'react'

function UseEffectUsers() {
    const [users,setUserdata] = useState([]);
    // rules of Hooks
    // always call the hooks at the top level
    // dont call the hooks inside conditions, loops , nested funcitons

    const getUserData = async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUserdata(data);
        console.log(users)
    }

    // if your are passing any dependancy array, the useeffect will be called when the sate is updated.
    // mounting, updating phase
        useEffect(()=>{
            getUserData();
        },[])

  return (
    <div>
    <h2>Users</h2>
    <table class="table table-striped">
        <thead>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
        </thead>
      
      <tbody>
        {
            users.length>0 ?
            (users.map((user)=> (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
            ))):<p>no Data found</p>
        }
      </tbody>
    </table>
  </div>
  )
}

export default UseEffectUsers
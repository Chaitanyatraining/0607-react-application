import React, { Component } from 'react'

 class Users extends Component {
    constructor(props){
        super(props)
        console.log("constructor executed")
    }
    state = {
        userData : []
    }

    static getDerivedStateFromProps(){
        console.log("static getDerivedStateFromProps excuted")
        return null;
    }

    getUsersData = async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        this.setState({userData:data})
        console.log(this.state.userData)
    }

    componentDidMount(){
            this.getUsersData();
    }

  render() {
    console.log("render executed")
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
                this.state.userData.length>0 ?
                (this.state.userData.map((user)=> (
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
}

export default Users
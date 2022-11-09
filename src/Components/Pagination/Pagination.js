import React, { Component } from 'react'

class Pagination extends Component {

    state = {
        pageNumber : 0,
        users : []
    }

    getUserData = async ()=>{
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,{
            method:'GET',
            headers:{
                "app-id": "633e33e98efd49504c9c7643"    
            }
        })
        const {data} = await response.json();
        console.log(data);
        this.setState({users:data})
    }

    componentDidMount(){
        this.getUserData();
    }

    handlebuttonClick = (num)=>{
        console.log(num)
        this.setState({pageNumber:num})
    }

    componentDidUpdate(prevsProps,prevState){
        console.log(prevsProps,prevState)
        if(prevState.pageNumber !== this.state.pageNumber){
            this.getUserData();
        }
    }

  render() {
    return (
      <div>
        <h2>Pagination</h2>
        <div className="container">
            <div className='row'>
                {
                    this.state.users && this.state.users.length > 0 &&
                    this.state.users.map((user)=>(
                        <div className='col-md-6'>
                            <div className='card mt-4 p-3'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <img src={user.picture} alt={user.firstname} />
                                    </div>
                                    <div className='col-md-8'>
                                        <p>{user.id}</p>
                                        <h4>{user.title} {user.firstName} {user.lastName}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) 
                }
            </div>
        </div>
        <div>
            {
                [1,2,3,4,5,6,7,8,9].map((num)=><button className='btn btn-primary m-3'
                 onClick={()=>this.handlebuttonClick(num)}>{num}</button>)
            }
        </div>
      </div>
    )
  }
}

export default Pagination
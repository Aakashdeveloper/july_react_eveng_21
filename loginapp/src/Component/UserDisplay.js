import React from 'react';

const UserDisplay = (props) => {
    
    const rendertable = ({userdata})=> {
        if(userdata){
            return userdata.map((item) =>{
                return(
                    <tr>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <div className="container">
            <center><h3>User List</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {rendertable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default UserDisplay;
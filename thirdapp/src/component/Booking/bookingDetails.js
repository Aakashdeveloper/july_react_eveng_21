import React from 'react';

const BookingDisplay = (props) => {
    
    const rendertable = ({bookdata})=> {
        if(bookdata){
            return bookdata.map((item) =>{
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>Rs.{item.cost}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>{item.bank}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <div className="container">
            <center><h3>BookingList</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Hotel</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Bank</th>
                    </tr>
                </thead>
                <tbody>
                    {rendertable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default BookingDisplay;
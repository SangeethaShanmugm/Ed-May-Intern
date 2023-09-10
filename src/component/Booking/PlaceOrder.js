import Header from "../../Header"
import { useState } from "react"
const url = "http://localhost:5000/menuItem"
const purl = "http://localhost:5000/placeorder"

export const PlaceOrder = (props) => {
  console.log(props)

  let sessionData = sessionStorage.getItem("userInfo")
  console.log(sessionData)
  let data = JSON.parse(sessionData)
  console.log(data)


  const initialValue = {
    id: Math.floor(Math.random() * 100000),
    rest_name: props.match.params.restName,
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: "plot no 35,Delhi",
    cost: sessionStorage.getItem("totalPrice"),

  }
  const [values, setValues] = useState(initialValue)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }



  const checkout = () => {
    console.log(values)
    fetch(purl, {
      method: 'POST',
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values),
    })
      .then((props.history.push("/viewBooking")))

  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3>Order for {props.match.params.restName}</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-6 form-group">
                <label for="fname" className="control-label">Name</label>
                <input className="form-control" id="fname"
                  name="name" value={values.name} onChange={handleInputChange} />
              </div>
              <div className="col-md-6 form-group">
                <label for="email" className="control-label">Email</label>
                <input className="form-control" id="email"
                  name="email" value={values.email} onChange={handleInputChange} />
              </div>
              <div className="col-md-6 form-group">
                <label for="email" className="control-label">Phone</label>
                <input className="form-control" id="phone"
                  name="phone" value={values.phone} onChange={handleInputChange} />
              </div>
              <div className="col-md-6 form-group">
                <label for="address" className="control-label">Address</label>
                <input className="form-control" id="address"
                  name="address" value={values.address} onChange={handleInputChange} />
              </div>

            </div>
            <div className="row">
              <div className="col-md-12">
                <h2>Total Price is Rs. {values.cost}</h2>
              </div>
            </div>
            <button className='btn btn-success' onClick={checkout} >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
















// import React, { Component } from "react";
// import Header from "../../Header";

// export default class PlaceOrder extends Component {
//   constructor(props) {
//     super(props);
//     = {
//       id: Math.floor(Math.random() * 1000),
//       hotel_name: props.match.params.restName,
//       name: "John",
//       email: "john@gmail.com",
//       phone: "9886543867",
//       address: "plot no 35,Delhi",
//       menuItem: sessionStorage.getItem("menu"),
//     };
//   }

//   renderItem = (data) => {
//     if (data) {
//       return data.map((item) => {
//         return (
//           <>
//             <img
//               src={item.menu_image}
//               alt={item.menu_name}
//               style={{ width: 80, height: 50, marginBottom: "30px" }}
//             />

//             <p>
//               {item.menu_name} - Rs/- {item.menu_price}
//             </p>
//           </>
//         );
//       });
//     }
//   };

//   render() {
//     return (
//       <>
//         <Header />
//         <div className="container">
//           <div className="panel panel-primary">
//             <div className="panel-heading">
//               <h3>Order for {hotel_name}</h3>
//             </div>
//             <div className="panel-body">
//               <form action="http://localhost:7000/create" method="POST">
//                 <div className="row">
//                   <input type="hidden" name="cost" value={cost} />
//                   <input type="hidden" name="id" value={id} />
//                   <input
//                     type="hidden"
//                     name="hotel_name"
//                     value={hotel_name}
//                   />
//                   <div className="form-group col-md-6">
//                     <label for="fname" className="control-label">
//                       FirstName
//                     </label>
//                     <input
//                       className="form-control"
//                       name="name"
//                       value={name}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="form-group col-md-6">
//                     <label for="email" className="control-label">
//                       Email
//                     </label>
//                     <input
//                       className="form-control"
//                       name="email"
//                       value={email}
//                       onChange={handleChange}
//                       readOnly
//                     />
//                   </div>
//                   <div className="form-group col-md-6">
//                     <label for="phone" className="control-label">
//                       Phone
//                     </label>
//                     <input
//                       className="form-control"
//                       name="phone"
//                       value={phone}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="form-group col-md-6">
//                     <label for="address" className="control-label">
//                       Address
//                     </label>
//                     <input
//                       className="form-control"
//                       name="address"
//                       value={address}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 {renderItem(menuItem)}
//                 <div className="row">
//                   <div className="col-md-12">
//                     <h2>Total Price is Rs.{cost}</h2>
//                   </div>
//                 </div>
//                 <button
//                   className="btn btn-success"
//                   //   onClick={checkout}
//                   onClick={handlePayment}
//                   type="submit"
//                 >
//                   Place Order
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

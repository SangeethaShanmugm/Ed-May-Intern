import React, { Component } from "react";
import Header from "../../Header";

export default class PlaceOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 1000),
      hotel_name: this.props.match.params.restName,
      name: "John",
      email: "john@gmail.com",
      phone: "9886543867",
      address: "plot no 35,Delhi",
      menuItem: sessionStorage.getItem("menu"),
    };
  }

  renderItem = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <>
            <img
              src={item.menu_image}
              alt={item.menu_name}
              style={{ width: 80, height: 50, marginBottom: "30px" }}
            />

            <p>
              {item.menu_name} - Rs/- {item.menu_price}
            </p>
          </>
        );
      });
    }
  };

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3>Order for {this.state.hotel_name}</h3>
            </div>
            <div className="panel-body">
              <form action="http://localhost:7000/create" method="POST">
                <div className="row">
                  <input type="hidden" name="cost" value={this.state.cost} />
                  <input type="hidden" name="id" value={this.state.id} />
                  <input
                    type="hidden"
                    name="hotel_name"
                    value={this.state.hotel_name}
                  />
                  <div className="form-group col-md-6">
                    <label for="fname" className="control-label">
                      FirstName
                    </label>
                    <input
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="email" className="control-label">
                      Email
                    </label>
                    <input
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      readOnly
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="phone" className="control-label">
                      Phone
                    </label>
                    <input
                      className="form-control"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="address" className="control-label">
                      Address
                    </label>
                    <input
                      className="form-control"
                      name="address"
                      value={this.state.address}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {this.renderItem(this.state.menuItem)}
                <div className="row">
                  <div className="col-md-12">
                    <h2>Total Price is Rs.{this.state.cost}</h2>
                  </div>
                </div>
                <button
                  className="btn btn-success"
                  //   onClick={this.checkout}
                  onClick={this.handlePayment}
                  type="submit"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

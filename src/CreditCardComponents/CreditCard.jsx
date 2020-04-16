import React from "react";
import "./card.css";

class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardHolder: "",
      validThru: "....",
      cardNumber: "**** **** **** ****",
    };
  }

  numberChangeHandler = (event) => {
    let numberregex = /^[0-9]*$/;
    event.target.value.match(numberregex)
      ? this.setState({
          cardNumber: event.target.value,
        })
      : alert("Please enter only numbers");
  };
  validChangeHandler = (f) => {
    this.setState({
      validThru: f.target.value,
    });
  };
  nameChangeHandler = (g) => {
    this.setState({
      cardHolder: g.target.value.toUpperCase(),
    });
  };
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="chip">
            <img
              className="chip-logo"
              src="https://www.eatamplified.com/assets/images/chip.png"
              alt=""
            />
            <h1>Company Name</h1>
          </div>
          <h3 className="card-nbr">
            {this.state.cardNumber
              .replace(/\s/g, "")
              .replace(/(.{4})/g, "$1 ")
              .trim()
              .toString()
              .padEnd(18, "*")}
          </h3>
          <div className="master">
            <h3>
              {" "}
              {this.state.validThru
                .replace(/(.{2})/, "$1 / ")
                .toString()
                .padEnd(4, ".")}{" "}
            </h3>

            <img
              className="master-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
              alt=""
            />
          </div>
          <h2 className="card-holder"> {this.state.cardHolder.toString().padEnd(20,'')} </h2>
        </div>
        <div className="inputs">
          <div className="input-group m-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Card Number"
              maxLength="16"
              onChange={this.numberChangeHandler}
            />
          </div>
          <div className="input-group m-3">
            <input
              type="text"
              className="form-control"
              maxLength="4"
              placeholder="Enter Validation Date"
              onChange={this.validChangeHandler}
            />
          </div>
          <div className="input-group m-3">
            <input
              type="text"
              className="form-control"
              maxLength="20"
              placeholder="Enter Card Holder Name"
              onChange={this.nameChangeHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCard;

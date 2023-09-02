import React, { Component } from "react";
import "./quickSearch.css";
import { QuickDisplay } from "./QuickDisplay";
const qurl = "http://localhost:5000/quickSearch";
export default class QuickSearch extends Component {
  constructor() {
    super();
    this.state = {
      mealType: "",
    };
  }

  render() {
    return (
      <div id="quickSearch">
        <div id="quickHeading">Quick Searches</div>
        <div id="quickSubHeading">Discover restaurants by type of meal</div>
        <QuickDisplay mealData={this.state.mealType} />
      </div>
    );
  }

  componentDidMount() {
    fetch(`${qurl}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ mealType: data });
        console.log(data);
      });
  }
}

import React, { Component } from "react";
import "./Search.css";
export default class Search extends Component {
  render() {
    return (
      <div id="search">
        <div id="logo">
          <span>e!</span>
        </div>
        <div id="heading">
          <div>Find the best restaurants, cafés, and bars</div>
        </div>
        <div id="dropdown">
          <select>
            <option>Please type a location</option>
            <option>Sarjapur Road</option>
            <option>HSR Layout</option>
            <option>Kormangala</option>
          </select>
          <select>
            <option>Search for restaurants</option>
            <option>Empire Restaurant</option>
            <option>CreamStone</option>
            <option>Punjabi Rasoi</option>
          </select>
        </div>
      </div>
    );
  }
}

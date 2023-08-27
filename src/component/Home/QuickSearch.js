import React, { Component } from "react";
import "./quickSearch.css";
export default class QuickSearch extends Component {
  render() {
    return (
      <div id="quickSearch">
        <div id="quickHeading">Quick Searches</div>
        <div id="quickSubHeading">Discover restaurants by type of meal</div>
        <div className="mainTileContainer">
          <div className="tileContainer">
            <div className="tileItem1">
              <img src="./image1.jpg" alt="breakfast" />
            </div>
            <div className="tileMainHeading">
              <div className="tileHeading">
                <a href="#">Breakfast</a>
              </div>
            </div>
            <div className="tileSubheading">
              <div>Start your day with exclusive breakfast options</div>
            </div>
          </div>

          <div className="tileContainer">
            <div className="tileItem1">
              <img src="../../Image/image2.jpg" alt="lunch" />
            </div>
            <div className="tileMainHeading">
              <div className="tileHeading">
                <a href="#">Lunch</a>
              </div>
            </div>
            <div className="tileSubheading">
              <div>Start your day with exclusive breakfast options</div>
            </div>
          </div>

          <div className="tileContainer">
            <div className="tileItem1">
              <img src="../Image/image3.jpg" alt="snacks" />
            </div>
            <div className="tileMainHeading">
              <div className="tileHeading">
                <a href="#">Snacks</a>
              </div>
            </div>
            <div className="tileSubheading">
              <div>Start your day with exclusive breakfast options</div>
            </div>
          </div>

          <div className="tileContainer">
            <div className="tileItem1">
              <img src="../Image/image4.jpg" alt="dinner" />
            </div>
            <div className="tileMainHeading">
              <div className="tileHeading">
                <a href="#">Dinner</a>
              </div>
            </div>
            <div className="tileSubheading">
              <div>Start your day with exclusive breakfast options</div>
            </div>
          </div>

          <div className="tileContainer">
            <div className="tileItem1">
              <img src="../Image/image5.jpg" alt="drinks" />
            </div>
            <div className="tileMainHeading">
              <div className="tileHeading">
                <a href="#">Drinks</a>
              </div>
            </div>
            <div className="tileSubheading">
              <div>Start your day with exclusive breakfast options</div>
            </div>
          </div>

          <div className="tileContainer">
            <div className="tileItem1">
              <img src="../Image/image6.jpg" alt="nightlife" />
            </div>
            <div className="tileMainHeading">
              <div className="tileHeading">
                <a href="#">Nightlife</a>
              </div>
            </div>
            <div className="tileSubheading">
              <div>Start your day with exclusive breakfast options</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

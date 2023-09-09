import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./component/Home/Home";
import Footer from "./Footer";
import ListingApi from "./component/Listing/ListingApi";
import Details from "./component/Details/Details";
import { PlaceOrder } from "./component/Booking/PlaceOrder";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import { RestCountry } from "./RestCountry";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}></Route>
        <Route path="/listing/:mealId" component={ListingApi} />
        <Route path="/details" component={Details} />
        <Route path="/placeOrder/:restName" component={PlaceOrder} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/rest" component={RestCountry} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;



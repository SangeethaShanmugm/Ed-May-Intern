import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./component/Home/Home";
import Footer from "./Footer";
import ListingApi from "./component/Listing/ListingApi";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}></Route>
        <Route path="/listing/:mealId" component={ListingApi}></Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

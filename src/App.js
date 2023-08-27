import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./component/Home/Home";
import Footer from "./Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}></Route>
        <Route path="/user" component={User}></Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function User() {
  return <div>User Page</div>;
}

export default App;

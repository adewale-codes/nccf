import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Programs } from "./components/Pages/Programs";
import { Donate } from "./components/Pages/Donate";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/programs" component={Programs} />
            <Route path="/donate" component={Donate} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

import "./App.css";

import logo from "./assets/img/netflix_logo.svg";
import data from "./assets/data/data.json";

import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo netflix" />

      {data.map((elem, index) => {
        return (
          <Section key={index} title={elem.category} images={elem.images} />
        );
      })}
    </div>
  );
}

export default App;

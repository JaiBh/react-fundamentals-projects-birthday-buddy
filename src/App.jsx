import data from "./data";
import { useState } from "react";
import People from "./components/People";

const App = () => {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <People people={people}></People>
        <button className="btn btn-block" onClick={handleClick}>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;

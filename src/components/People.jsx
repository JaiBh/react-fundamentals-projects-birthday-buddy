import Person from "./Person";

const People = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} person={person}></Person>;
      })}
    </section>
  );
};

export default People;

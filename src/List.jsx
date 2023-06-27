import Person from "./Person"
const List = ({ people ,removeItem}) => {
  return (
    <section>
      {people.map((person) => { 
        return <Person key={person.id}{...person} removeItem={ removeItem} />
      })}
    </section>
  )
}
export default List
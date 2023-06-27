import { useState } from "react"
import data from "./data"
import List from "./List"

const App = () => {
const [people,setPeople]=useState(data)
  const removeItem = (id) => {
   let newPeople = people.filter((person) =>  person.id !== id )
    setPeople(newPeople)
  }
  return (
    <main>
      <section className="container">
        <h3 style={{textAlign:"center"}}>{people.length}:-birthday today</h3>
        <List people={people} removeItem={ removeItem} />
        { people.length?(<button type="button" className="btn btn-block" onClick={() => setPeople([])}>cleatAll</button>
):(<button type="button" className="btn btn-block" onClick={() => setPeople(data)}>Setpeople</button>
)}
      </section>
    </main>
  )
}
export default App
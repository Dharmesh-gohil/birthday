import { useState } from "react"
import data from "./data"
import List from "./List"

const App = () => {
const [people,setPeople]=useState(data)

  return (
    <main>
      <section className="container">
        <h3>{people.length}:-birthday today</h3>
        <List people={people} />
        { people.length?(<button type="button" className="btn btn-block" onClick={() => setPeople([])}>cleatAll</button>
):(<button type="button" className="btn btn-block" onClick={() => setPeople(data)}>Setpeople</button>
)}
      </section>
    </main>
  )
}
export default App
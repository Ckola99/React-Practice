import Entry from "./components/Entry"
import Header from "./components/Header"
import data from "./data"

function App() {

  const entryElements = data.map((data) => {
    return (
      <Entry
        key={data.id}
        data = {data}
      />
    )
  })

  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  )
}

export default App

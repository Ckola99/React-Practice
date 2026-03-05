import Entry from "./components/Entry"
import Header from "./components/Header"
import data from "./data"

function App() {

  const entryElements = data.map((data) => {
    return (
      <Entry
        img={data.img}
        title={data.title}
        country={data.country}
        googleMapsLink={data.googleMapsLink}
        dates={data.dates}
        text={data.text}
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

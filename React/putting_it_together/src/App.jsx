import PersonCard from './components/PersonCard'
import './App.css'

function App() {


  return (
    <>
    <h1>Prop It Up</h1>
      <PersonCard firstName={"Roger"} lastName={"Rogers"} age={69} hairColor={"Pink"}/>
      <PersonCard firstName={"Jeffery"} lastName={"Jeffries"} age={96} hairColor={"Pinkish"}/>
      <PersonCard firstName={"Dan"} lastName={"Daniels"} age={34} hairColor={"Red"}/>
      <PersonCard firstName={"Belinda"} lastName={"Bennington"} age={44} hairColor={"Yellow"}/>
    </>
  )
}

export default App

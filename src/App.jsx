
import './App.css'

function App() {
 

  return (
    <>
     
      <h1>Vite + React</h1>
      <Person> </Person>
      <Person> </Person>
      <Sports></Sports>
      <Person> </Person>
      <Person> </Person>
      <Sports> </Sports>
      <Pet></Pet>
      <Data></Data>


   
     
    </>
  )
}

function Person () {
  const age = 17 ; 
  const name = " Arman Mir "; 
  return (
    <p> I am a person{name} {age} </p>
  )
}
function Pet() {
  return(
    <p>Its a cat</p>
  )
}

function Data() {
  return(
    <div>
      <h1>This Is Al SAIUL ARMAN MIR, learning ReactJs For the first time with jhonkar Mahbub vai..</h1>
      <p>I am enjoying the reactjs. this is so much interesting. I hope that it will get even more interesting in the upcoming days , hope to work with it for a long time...</p>
    </div>
  )
}

function Sports () {
  return(
    <div>
      <h3>
        Cricket
      </h3>
      <ul>
        <li>kola</li>
        <li>Komola</li>
        <li>Pepe</li>

      </ul>
      <p>
        Playing & loosing
      </p>
    </div>
  )
}

export default App

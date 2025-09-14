
import './App.css'

function App() {
 

  return (
    <>
     
      <h1>React Core Concepts</h1>
      <Student> </Student>
      <Student> </Student>
      <Person></Person>
      <Developer name="Satul Moni" tech="JavaScript"></Developer>
      <Developer name = "Arman Mir" tech="ReactJS"></Developer>
      <Developer name = "BongoBolturPola" tech="JaVa"></Developer>
      <Device device="Phone" model="Samsung F23 5G" brand="Samsung" price="35000$" color="SkyBlue"></Device>
      <Device  device="Laptop" model="HP VivoBook" brand="HP" price="65000$" color="Black"></Device>
      <Device  device="SmartWatch" model="XinXI Cobee C1 Pros" brand="Cobee" price="3900$" color="Black"></Device>
      <Device  device="HeadPhones" model="DX DigitalX" brand="Digital X" price="1550$" color="Whitish Black"></Device>


   
     
    </>
  )
}

function Device (props) {
  return (
    <div className='device'>
      <p>Device: {props.device} </p>
      <p>Model: {props.model} </p>
      <p>Brand: {props.brand} </p>
      <p>Price: {props.price} </p>
      <p>Color: {props.color} </p>
    </div>

  )
}

function Developer(props) {
  console.log(props)
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px',
      marginTop: '10px'
    }}>
      <h3>
        Developer: {props.name}
      </h3>
      <p>
        Technology: {props.tech}
      </p>
    </div>
  )
}

function Person () {
  const age = 17 ; 
  const name = " Arman Mir "; 
  const personStyle = {
    color: 'red',
    textAlign: 'right'
  }

  return (
    <p id='' title='tooltip' style={personStyle} > I am a person{name} {age} </p>
    
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



function Student (){
  return (
    <div className='student'>
      <p>
        Name: 
      </p>
      <p>
        Dept: 
      </p>
    </div>
  )
}

export default App

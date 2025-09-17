
import './App.css';
import ToDo from './ToDo'
// import Food from './ToDo.jsx'
import Actor from './Actor';
import Singer from './Singer';



function App() {

  const actors = ['Robert Downey Jr.', 'Chris Hemsworth', 'Chris Pratt', 'Bappa Raj', 'Omar Sunny', 'Salman Shah', 'Jasim', 'Rajjak', 'Hero Alom'];

  const singers = [
    { id: 1, name: 'Dr. Mahfuz', age: 68 },
    { id: 2, name: 'Tahsan Vai', age: 45 },
    { id: 3, name: 'Shuvro Dev', age: 57 },
    { id: 4, name: 'Bob Dylan', age: 86 },
    { id: 5, name: 'Michael Jackson', age: 0 },
    { id: 6, name: 'Ed Sheeran', age: 40 },
    { id: 7, name: 'Ariana Grande', age: 35 }


  ];


  // const time = 50;


  return (
    <>

      <h1>React Core Concepts</h1>

      {
        singers.map(singer => <Singer key={singer.id} singer={singer} ></Singer>)
      }
{/* 
      {
        actors.map(actor => <Actor actor={actor}></Actor>)
      }
 */}
      {/* <ToDo task=" Learn React"
        isDone={true}
        time={time}></ToDo>

      <ToDo task=" Revise JS"
        isDone={false}></ToDo>

      <ToDo task="Take a Shower"
        isDone={true}
        time="100"></ToDo>
 */}


      {/* <Food isHungry={true} 
      food="Biriyani"
      restaurant="Kacchi vai"
      ></Food>

      <Food isHungry={false} 
      food="Biriyani"
      restaurant="Kacchi vai"
      ></Food>

      <Food isHungry={true} 
      food="Burger And Pasta"
      restaurant="Burger King"
      ></Food>
 */}


      {/* <Student> </Student>
      <Student> </Student>
      <Person></Person>
      <Developer name="Satul Moni" tech="JavaScript"></Developer>

      <Developer name="Arman Mir" tech="ReactJS"></Developer>

      <Developer name="BongoBolturPola" tech="JaVa"></Developer>

      <Device device="Phone" model="Samsung F23 5G" brand="Samsung" price="35000$" color="SkyBlue"></Device>

      <Device device="Laptop" model="HP VivoBook" brand="HP" price="65000$" color="Black"></Device>

      <Device device="SmartWatch" model="XinXI Cobee C1 Pros" brand="Cobee" price="3900$" color="Black"></Device>

      <Device device="HeadPhones" model="DX DigitalX" brand="Digital X" price="1550$" color="Whitish Black"></Device>

    <Player name="TamimBalHasan" runs ="5000"></Player>
    <Player name="CristianoRonaldo" runs = "75940"></Player>

    <Salami event="Romjaner Eid" amount="20$"></Salami>
    <Salami event="Graduation" ></Salami> */}


    </>
  )
}
function Salami({ event, amount = 0 }) {
  return (
    <div className='device'>
      <p>Salami for: {event}</p>
      <p>Amount: {amount}  </p>
    </div>
  )
}


// const {name, runs} = {name: "TamimBalHasan" , runs: "5000"}

function Player({ name, runs }) {
  return (
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Runs: {runs} </p>

    </div>
  )
}
// const {name, tech} = {name: "Arman Mir", tech:"ReactJS"}

function Device(props) {
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

function Person() {
  const age = 17;
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
  return (
    <p>Its a cat</p>
  )
}

function Data() {
  return (
    <div>
      <h1>This Is Al SAIUL ARMAN MIR, learning ReactJs For the first time with jhonkar Mahbub vai..</h1>
      <p>I am enjoying the reactjs. this is so much interesting. I hope that it will get even more interesting in the upcoming days , hope to work with it for a long time...</p>
    </div>
  )
}

function Sports() {
  return (
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



function Student() {
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

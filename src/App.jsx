import { useState } from 'react'
import './App.css'
import Admin from './components/Admin'
import Button from './components/Button'
import Events from './components/Events'
import LoginPage from './components/LoginPage'
import Products from './components/Products'
import State, { Buttonn } from './components/State'
import Onchangeevents from './components/Onchangeevents'
import Formevents from './components/Formevents'
import Updaterfunctions from './components/Updaterfunctions'
import UpdateObjectState from './components/UpdateObjectState'
import UpdateArrayState from './components/UpdateArrayState'
import UpdateObArrState from './components/UpdateObArrState'
import ToDoList from './components/ToDoList'



const data = {
  name: 'L Messi',
  imgurl: 'https://www.vedantu.com/seo/content-images/a2de1c30-d35c-40f2-8bbf-1c8905273394_compressed_2.jpg',
  imgsize: 90
}

const status = true


function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      {/* Writing markup with JSX */}
      <h1>This is a Button</h1>
      <Button />
      <br /><br />
      {/* Conditional rendering  */}
      <div>
        {status ? (<Admin />) :
          <LoginPage />}
      </div>


      {/* Displaying data */}
      <h1>{data.name}</h1>
      <img
        className='avatar'
        src={data.imgurl}
        alt={`photo of ${data.name}`}
        style={{
          width: data.imgsize,
          height: data.imgsize
        }}
      />

      <Products />
      <Events /><br /><br />
      {/* you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.*/}
      <State /><br /><br />
      <State /><br /><br />

      {/*Sharing data between components*/}

      <Buttonn count={count} onClick={handleClick} /><br /><br />
      <Buttonn count={count} onClick={handleClick} /><br /><br />

      {/*onChange = event handler used primarily with form elements */}
      <Onchangeevents /><br /><br />

      {/*Form events*/}
      <Formevents />

      {/*Updater Function*/}
      <Updaterfunctions/>

      {/* Update Object State */}
      <UpdateObjectState/>

      {/* Update Array State */}
      <UpdateArrayState/>

      {/* Update Object and Array State */}
      <UpdateObArrState/>

      {/* TO DO LIST */}
      <ToDoList/>

    </>
  )
}

export default App

import React from 'react'
import {  Route, Routes, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Admin from '../components/Admin'
import Button from '../components/Button'
import CounterApp from '../components/CounterApp'
import Events from '../components/Events'
import LoginPage from '../components/LoginPage'
import Products from '../components/Products'
import State, { Buttonn } from '../components/State'
import Onchangeevents from '../components/Onchangeevents'
import Formevents from '../components/Formevents'
import Updaterfunctions from '../components/Updaterfunctions'
import UpdateObjectState from '../components/UpdateObjectState'
import UpdateArrayState from '../components/UpdateArrayState'
import UpdateObArrState from '../components/UpdateObArrState'
import ToDoList from '../components/ToDoList'
import UseEffects from '../components/UseEffects'
import UseEffectex2 from '../components/UseEffectex2'
import DigitalClock from '../components/DigitalClock'
import ComponentA from '../components/ComponentA'
import UseRef from '../components/UseRef'
import UseMemo from '../components/UseMemo'


function Mainrouter() {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Login'>Login</Link></li>
                <li><Link to='/button'>Button</Link></li>
                <li><Link to='/admin'>Admin</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/events'>Events</Link></li>
                <li><Link to='/state'>State</Link></li>
                <li><Link to='/counter'>Counter</Link></li>
                <li><Link to='/onchangeevents'>Onchangeevents</Link></li>
                <li><Link to='/formevents'>Formevents</Link></li>
                <li><Link to='/updaterfunctions'>Updaterfunctions</Link></li>
                <li><Link to='/updateobjectstate'>Updateobjectstate</Link></li>
                <li><Link to='/updatearraystate'>Updatearraystate</Link></li>
                <li><Link to='/updateobarrstate'>Updateobarrstate</Link></li>
                <li><Link to='/todolist'>Todolist</Link></li>
                <li><Link to='/useeffects'>Useeffects</Link></li>
                <li><Link to='/useeffectex2'>Useeffectex2</Link></li>
                <li><Link to='/digitalclock'>Digitalclock</Link></li>
                <li><Link to='/componentA'>UseContext</Link></li>
                <li><Link to='/useref'>UseRef</Link></li>
                <li><Link to='/usememo'>UseMemo</Link></li>
            </ul>
            
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Login' element={<LoginPage />}></Route>
                    <Route path='/button' element={<Button />}></Route>
                    <Route path='/admin' element={<Admin />}></Route>
                    <Route path='/products' element={<Products />}></Route>
                    <Route path='/events' element={<Events />}></Route>
                    <Route path='/state' element={<State />}></Route>
                    <Route path='/counter' element={<CounterApp />}></Route>
                    <Route path='/onchangeevents' element={<Onchangeevents />}></Route>
                    <Route path='/formevents' element={<Formevents />}></Route>
                    <Route path='/updaterfunctions' element={<Updaterfunctions />}></Route>
                    <Route path='/updateobjectstate' element={<UpdateObjectState />}></Route>
                    <Route path='/updatearraystate' element={<UpdateArrayState />}></Route>
                    <Route path='/updateobarrstate' element={<UpdateObArrState />}></Route>
                    <Route path='/todolist' element={<ToDoList />}></Route>
                    <Route path='/useeffects' element={<UseEffects />}></Route>
                    <Route path='/useeffectex2' element={<UseEffectex2 />}></Route>
                    <Route path='/digitalclock' element={<DigitalClock />}></Route>
                    <Route path='/componentA' element={<ComponentA/>}></Route>
                    <Route path='/useref' element={<UseRef />}></Route>
                    <Route path='/usememo' element={<UseMemo />}></Route>
                </Routes>   

        </div>
    )
}

export default Mainrouter
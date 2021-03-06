import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Nav from './Components/Nav'
import StartScreen from './Components/StartScreen'
import GameScreen from './Components/GameScreen'
import EndingScreen from './Components/EndingScreen'
import LeaderBoard from './Components/LeaderBoard'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Err404 from './Components/Err404'
import logo from './logo.svg'
import '../src/scss/App.scss'
import UserScores from './Components/UserScores';

export const BASE_URL = 'https://prod-celebrity-dead-alive.herokuapp.com/api';

export default function App() {
  return (
    <div className='App'>
      <Nav />
      <div className='content'>
        <img src={logo} className='App-logo' alt='logo' />
        <Switch>
          <Route exact path='/' component={StartScreen} />
          <Route path='/play' component={GameScreen} />
          <Route path='/end' component={EndingScreen} />
          <Route path='/leaderboard' component={LeaderBoard} />
          <Route path='/userscores' component={UserScores} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route component={Err404} />
        </Switch>
      </div>
    </div>
  )
}

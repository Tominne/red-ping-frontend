import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import { useQuery } from '@tanstack/react-query'
import { getUserFeed } from '../apis/userFeed'
import { useEffect, useState } from 'react'
import uploader from './ProfilePage'

export default function HomePage() {
  const [timeOfDay, setTimeOfDay] = useState('waiting')
  const [greeting, setGreeting] = useState('Hello!')
  useEffect(() => {
    const now = new Date()
    const hours = now.getHours()

    let greeting
    if (hours < 12) {
      setGreeting('Good Morning! 🐔')
      setTimeOfDay('dawn')
    } else if (hours < 18) {
      setGreeting('Good Afternoon 🐈')
      setTimeOfDay('waiting')
    } else if (hours >= 18 && hours < 24) {
      setGreeting('Good Evening 🥰')
      setTimeOfDay('dusk')
    } else {
      setTimeOfDay('waiting')
    }
  }, [])

  return (
    <div className={`${timeOfDay}`}>
      <h1>{`${greeting}`}</h1>
      <br></br>
      <Alert className="alert">
        Welcome to Your Personal Digital Alert App
      </Alert>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

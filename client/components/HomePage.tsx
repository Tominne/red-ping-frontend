import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import { useQuery } from '@tanstack/react-query'
import { getUserFeed } from '../apis/userFeed'
import { useEffect, useState } from 'react'
import uploader from './ProfilePage'
import { MDBNavbarLink } from 'mdb-react-ui-kit'

export default function HomePage() {
  const [timeOfDay, setTimeOfDay] = useState('waiting')
  const [greeting, setGreeting] = useState('Hello!')
  const [buttonColor, setButtonColor] = useState('primary')
  useEffect(() => {
    const now = new Date()
    const hours = now.getHours()

    let greeting
    if (hours < 12) {
      setGreeting('Good Morning! 🐔')
      setTimeOfDay('dawn')
      setButtonColor('success')
    } else if (hours < 18) {
      setGreeting('Good Afternoon 🐈')
      setTimeOfDay('waiting')
      setButtonColor('warning')
    } else if (hours >= 18 && hours < 24) {
      setGreeting('Good Evening 🥰')
      setTimeOfDay('dusk')
      setButtonColor('danger')
    } else {
      setTimeOfDay('waiting')
    }
  }, [])

  return (
    <div className={`${timeOfDay}`}>
      <h1>{`${greeting}`}</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="button-container">
        <MDBNavbarLink href="/">
          <Button variant={buttonColor} size="lg" className="round-button">
            Alert List
          </Button>
        </MDBNavbarLink>
        <MDBNavbarLink href="/profile">
          <Button variant={buttonColor} size="lg" className="round-button">
            Profile
          </Button>
        </MDBNavbarLink>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Alert className="alert">
        Welcome to Your Personal Digital Alert App
      </Alert>
    </div>
  )
}

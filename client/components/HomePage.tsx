import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import { signUp } from '../apis/alert'
import { useEffect, useState } from 'react'
import { MDBNavbarLink } from 'mdb-react-ui-kit'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await signUp(email, password)
      if (response.success) {
        setMessage('Signup successful!')
        setEmail('')
        setPassword('')
      } else {
        setMessage('loser it failed yikes')
      }
    } catch (err) {
      console.log(err)
      setMessage('soz loser')
    }
  }

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"> Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br></br>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <br></br>
        <input type="submit" value="Sign Up"></input>
      </form>
      <p>{message}</p>
    </div>
  )
}

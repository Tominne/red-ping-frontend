import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import { useQuery } from '@tanstack/react-query'
import { getUserFeed } from '../apis/userFeed'
import { useEffect } from 'react'

export default function HomePage() {
  /* const { data: userFeed, isError, isLoading } = useQuery(['user'], getUserFeed)
  if (isError) {
    return <div>There was an error loading your Home-Page</div>
  }*/
  const now = new Date()
  const hours = now.getHours()

  let greeting
  if (hours < 12) {
    greeting = 'Good Morning! 🐔'
  } else if (hours < 18) {
    greeting = 'Good Afternoon 🐈'
  } else {
    greeting = 'Good Evening 🥰'
  }

  return (
    <div className="background">
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

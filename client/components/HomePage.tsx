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
  return (
    <div className="background">
      <h1>GoodMorning</h1>
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

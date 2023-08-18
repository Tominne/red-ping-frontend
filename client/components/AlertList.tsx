import { getAlerts } from '../apis/alert'
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import { useQuery } from '@tanstack/react-query'
import AlertForm from './AlertForm'
import { Uploader } from 'uploader'
const uploader = Uploader({
  apiKey: 'free',
})
import AlertListItem from './AlertListItem'

export default function AlertList() {
  const { data: alerts, isError, isLoading } = useQuery(['alerts'], getAlerts)
  useEffect(() => {
    return () => {}
  }, [])
  if (isError) {
    return <div>There was an error loading alerts</div>
  }

  if (alerts === 'null' || isLoading) {
    return <div className="loading">Loading alerts...</div>
  }

  if (!alerts || isLoading) {
    return <div>Loading alerts...</div>
  }

  return (
    <div className="background">
      <section className="alert-list">
        <h2>Alert List:</h2>
        <br></br>
        <Alert variant="danger">{`${[alerts]}`}</Alert>
        <br></br>
        <h2>Customize an alert</h2>
        <AlertForm />
      </section>
    </div>
  )
}

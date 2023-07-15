import { getAlerts } from '../apis/alert'
import { Link } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'
import AlertForm from './AlertForm'

import AlertListItem from './AlertListItem'

export default function AlertList() {
  const { data: alerts, isError, isLoading } = useQuery(['alerts'], getAlerts)

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
    <>
      <section className="alert-list">
        <h2>Alert List:</h2>
        <h1>{`${alerts}`}</h1>

        <h2>Customize an alert</h2>
        <AlertForm />
      </section>
    </>
  )
}

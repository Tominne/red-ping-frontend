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

  if (!alerts || isLoading) {
    return <div>Loading alerts...</div>
  }

  return (
    <>
      <section className="alert-list">
        <h2>alert List</h2>
        <div>
          {alerts.map((alerts) => (
            <div key={alerts.id}>
              <h3>
                <Link to={`${alerts.id}`} id="link">
                  {alerts.AlertName}
                </Link>
              </h3>
              <div>
                <AlertListItem
                  key={alerts.id}
                  alertId={alerts.id}
                  alertName={alerts.AlertName}
                />
                <br />
              </div>
            </div>
          ))}
        </div>

        <h2>Add A alert</h2>
        <AlertForm />
      </section>
    </>
  )
}

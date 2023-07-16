import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { getalertById } from '../apis/alert'

export default function alertDetails() {
  const { alertId } = useParams()

  const alertDetailsQuery = useQuery(['alerts', alertId], () =>
    getalertById(alertId as string)
  )

  if (alertDetailsQuery.isError) {
    return <div>There was an error getting your alert</div>
  }

  if (alertDetailsQuery.isLoading) {
    return <div>Loading your alert</div>
  }

  return (
    <section className="alert-details">
      <h2>alert Details</h2>
      <p>{`${alert}`}</p>
    </section>
  )
}

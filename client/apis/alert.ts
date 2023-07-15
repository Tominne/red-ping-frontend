import request from 'superagent'
import { Alert, AlertData } from '../../models/alert'

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const alertURL = '/api/v1/alert'

//get alert
export async function getAlerts(): Promise<Alert[]> {
  const response = await request.get(`${alertURL}/`)
  return response.body.alert
}

// GET /api/v1/alert/:alertId
export async function getalertById(alertId: string): Promise<Alert> {
  const response = await request.get(`${alertURL}/${alertId}`)
  return response.body.alert
}

// POST /api/v1/alert
export async function addalert(newalert: AlertData): Promise<Alert> {
  const response = await request.post(alertURL).send({ newalert })
  console.log(response.body)
  return response.body.alert
}
interface Deletealert {
  alertId: Alert['id']
}
// DELETE /api/v1/alert/:alertId
export async function deletealert({ alertId }: Deletealert): Promise<void> {
  await request.delete(`${alertURL}/${alertId}`)
}

interface Updatealert {
  alertId: Alert['id']
  newalertName: Alert['AlertName']
}

export async function updatealert({
  alertId,
  newalertName,
}: Updatealert): Promise<void> {
  await request
    .patch(`${alertURL}/${alertId}`)
    .send({ alertName: newalertName })
}

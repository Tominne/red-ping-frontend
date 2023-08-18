import request from 'superagent'
import { Alert, AlertData } from '../../models/alert'
import React, { useState } from 'react'

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const alertURL = 'https://red-ping-api-poc.isaacirvine.me'

export const signUp = async (email: string, password: string) => {
  try {
    // send a POST request to the API with the email and password
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json()
    if (data.success) {
      return { success: true }
    } else {
      return { success: false, message: data.message }
    }
  } catch (err) {
    console.log(err)
    return { success: false, message: 'An error occurred. Please try again.' }
  }
}

export const login = async (username: string, password: any) => {
  const response = await fetch(alertURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: '<type>',
      username,
      password,
      scope: '<SCOPE>',
      client_id: '<CLIENT_ID>',
      client_secret: '<CLIENT_SECRET>',
    }),
  })

  if (!response.ok) {
    throw new Error('Login failed')
  }

  const data = await response.json()
  return data
}

//get alert
export async function getAlerts(): Promise<any> {
  try {
    const response = await request.get(`${alertURL}/`)
    console.log(response.body)
    const stringed = JSON.stringify(response.body)
    const cleanedString = stringed.replace(/[{}:"]/g, ' ')
    return cleanedString
  } catch (error) {
    console.error(error)
  }
}

// GET /api/v1/alert/:alertId
export async function getalertById(alertId: string): Promise<Alert> {
  const response = await request.get(`${alertURL}/${alertId}`)
  return response.body
}

// POST /api/v1/alert
export async function addalert(newalert: AlertData): Promise<Alert> {
  const response = await request.post(alertURL).send({ newalert })
  console.log(response.body)
  return response.body
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

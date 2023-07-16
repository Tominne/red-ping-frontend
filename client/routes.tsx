import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout'
import AlertList from './components/AlertList'
import AlertDetails from './components/AlertDetails'
import HomePage from './components/HomePage'

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route index element={<AlertList />} />

    <Route path=":alertId" element={<AlertDetails />} />
    <Route path="/home" element={<HomePage />} />
  </Route>
)

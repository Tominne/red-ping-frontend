import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout'
import AlertList from './components/AlertList'
import AlertDetails from './components/AlertDetails'

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route index element={<AlertList />} />

    <Route path=":alertId" element={<AlertDetails />} />
  </Route>
)

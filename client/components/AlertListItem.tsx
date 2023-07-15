import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { deletealert, updatealert } from '../apis/alert'

interface Props {
  alertId: number
  alertName: string
}

export default function AlertListItem({ alertId, alertName }: Props) {
  const [updating, setUpdating] = useState(false)
  const [rename, setRename] = useState(alertName)

  const queryClient = useQueryClient()

  const deletealertMutation = useMutation(deletealert, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['alerts'])
    },
  })

  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    deletealertMutation.mutate({ alertId })
    console.log('deleting', alertId)
  }

  const updatealertMutation = useMutation(updatealert, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['alerts'])
    },
  })

  const handleUpdateSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    updatealertMutation.mutate({
      alertId,
      newalertName: rename,
    })

    console.log('submitting', rename)

    setUpdating(false)
  }

  const handleStopUpdatingClick = () => {
    setUpdating(false)
    setRename(alertName)
  }

  const handleStartUpdatingClick = () => {
    setUpdating(true)
  }

  return (
    <>
      <div>
        {updating ? (
          <form onSubmit={handleUpdateSubmit} aria-label="Update alert Form">
            <label htmlFor="updateName">Rename: </label>
            <input
              type="text"
              name="alertName"
              id="updateName"
              value={rename}
              onChange={(e) => setRename(e.target.value)}
            />

            <button type="submit">Save</button>
            <button type="button" onClick={handleStopUpdatingClick}>
              Stop
            </button>
          </form>
        ) : (
          <p>
            <button onClick={handleDeleteClick}>Delete</button>
            <button onClick={handleStartUpdatingClick}>Update</button>
          </p>
        )}
      </div>
    </>
  )
}

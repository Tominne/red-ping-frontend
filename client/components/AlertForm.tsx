import { ChangeEvent, FormEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addalert } from '../apis/alert'
import { AlertData } from '../../models/alert'
import { Button, Stack } from 'react-bootstrap'

const initialFormData = {
  AlertName: '',
}

export default function AlertForm() {
  const [form, setForm] = useState<AlertData>(initialFormData)

  const queryClient = useQueryClient()

  const addalertMutation = useMutation(addalert, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['alerts'])
    },
  })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addalertMutation.mutate(form)
    setForm(initialFormData)
  }

  if (addalertMutation.isError) {
    return <div>There was an error trying to add your alert</div>
  }

  if (addalertMutation.isLoading) {
    return <div>Adding your alert</div>
  }

  return (
    <>
      <section id="add-alert-to-list" className="formContainer">
        <form onSubmit={handleSubmit} aria-label="Add alert Form">
          <p>
            <label htmlFor="alertName">Alert Title</label>
            <input
              type="text"
              id="alertName"
              onChange={handleChange}
              name="alertName"
              value={form.AlertName}
              required
            />
          </p>

          <Stack direction="horizontal" gap={2}>
            <Button as="a" variant="primary" type="submit">
              Add alert
            </Button>{' '}
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButtonDark"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Examples
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButtonDark"
            >
              <li>
                <a className="dropdown-item active" href="#">
                  Mild Discomfort
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Require Urgent Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Keep Tabs
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  On The Mend
                </a>
              </li>
            </ul>
          </Stack>
        </form>
      </section>
    </>
  )
}

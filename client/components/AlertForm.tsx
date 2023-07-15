import { ChangeEvent, FormEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addalert } from '../apis/alert'
import { AlertData } from '../../models/alert'

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
            <label htmlFor="alertName">alert Title</label>
            <input
              type="text"
              id="alertName"
              onChange={handleChange}
              name="alertName"
              value={form.AlertName}
              required
            />
          </p>

          <button type="submit">Add alert</button>
        </form>
      </section>
    </>
  )
}

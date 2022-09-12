import React, { useState } from 'react'
import { addCharacter } from '../actions/index'
import { useDispatch } from 'react-redux'

const initialFormData = {
  name: '',
  image: '',
  class: '',
  bio: '',
}

function AddCharacter() {
  // const [characters, setCharacters] = useState([])
  const [form, setForm] = useState(initialFormData)
  const dispatch = useDispatch()

  function handleChange(e) {
    const { name, value } = e.target
    const newForm = {
      ...form,
      [name]: value,
    }
    setForm(newForm)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addCharacter(form))
    setForm(initialFormData)
    // addCharacter(form)
    //   .then((newCharacter) => {
    //     setCharacters([...characters, newCharacter])
    //     setForm(initialFormData)
    // })
    // .catch((err) => {
    //   console.error(err.message)
    // })
  }

  return (
    <div>
      <h2>Add new character</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            onChange={handleChange}
            value={form.name}
            name="name"
          />
        </label>
        <label htmlFor="name">
          Image:
          <input
            id="image"
            onChange={handleChange}
            value={form.image}
            name="image"
          />
        </label>
        <label htmlFor="name">
          Class:
          <input
            id="class"
            onChange={handleChange}
            value={form.class}
            name="class"
          />
        </label>
        <label htmlFor="name">
          Bio:
          <input id="bio" onChange={handleChange} value={form.bio} name="bio" />
        </label>
        <button>Add Character</button>
      </form>
    </div>
  )
}

export default AddCharacter

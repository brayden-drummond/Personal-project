import React, { useState } from 'react'

const initialData = { review: '' }

function AddReview() {
  const [data, setData] = useState(initialData)
  const { review } = data

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    //Need to define an add review function in dlc to add to it
    addReview(review)
    setData(initialData)
  }

  return (
    <div className="add-dlc-review">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="review">Review</label>
          <input
            type="text"
            id="review"
            name="review"
            value={review}
            onChange={handleChange}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}

export default AddReview

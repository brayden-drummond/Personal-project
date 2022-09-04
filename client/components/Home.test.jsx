import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Home from './Home'

describe('<Home />', () => {
  it('renders homepage', () => {
    render(<Home />)

    const headings = screen.getAllByRole('heading')
    expect(headings[0]).toHaveTextContent('Follow me')
  })
})

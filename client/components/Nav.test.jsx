import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Nav from './Nav'

describe('<Nav />', () => {
  it('renders a list of games', () => {
    render(<Nav />)

    const heading = screen.getByRole('listitem')
    expect(heading).toHaveTextContent('Destiny')
  })
})

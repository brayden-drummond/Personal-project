import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Game from './Game'

describe('<Game />', () => {
  it('renders a list of dlcs', () => {
    render(<Game />)

    const listitems = screen.getByRole('listitem')
    expect(listitems).toHaveTextContent('Haunted')
  })
})

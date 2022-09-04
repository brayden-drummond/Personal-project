import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Dlc from './Dlc'

describe('<Home />', () => {
  it('renders Dlc page', () => {
    render(<Dlc />)

    const headings = screen.getAllByRole('heading')
    expect(headings[0]).toHaveTextContent('Follow me')
  })
})

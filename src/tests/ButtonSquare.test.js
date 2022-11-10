import React from 'react'
import { render } from '@testing-library/react'
import ButtonSquare from '../Components/Buttons/ButtonSquare'




describe(ButtonSquare, () => {

    it('renders button with correct text', () => {
        const  { getByTestId } = render(<ButtonSquare title='Click me' />)

        expect(getByTestId('buttonSquare').textContent).toEqual('Click me')

    })
})
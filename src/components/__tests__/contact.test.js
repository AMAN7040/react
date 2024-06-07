import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'

test('render the contact from with all fields and a submit button', () => {
    render(<Contact/>);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();

})
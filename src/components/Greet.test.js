import { render,screen } from '@testing-library/react';
import Greet from './Greet';
 
describe('Greet Component', () => {
    test('renders correctly', () => {
        render(<Greet />);
        // const hOneElement = screen.getByRole('heading',{
        //     level: 1
        // })
        // const hOneElement = screen.getByRole('heading',{
        //     name: "Hello"
        // })
        // "hello" -> does not ignore caps[output=fail]
        // const hOneElement = screen.getByText(/hello/i);
        const hOneElement = screen.getByText("Hello", {
            exact: false
        });
        expect(hOneElement).toBeInTheDocument()
    });
    
    test('renders with name prop', () => {
        render(<Greet name={"Ayusha"}/>);
        const h1Elem = screen.getByText("Hello Ayusha")
        expect(h1Elem).toBeInTheDocument()
    });
});

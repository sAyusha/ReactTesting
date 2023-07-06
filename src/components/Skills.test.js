import { logRoles, render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills Component', () => {
    const skills = [
        {id:1, name:'plumbing'},
        {id:2, name:'wiring'},
        {id:3, name:'painting'},
    ];
    test('renders correctly', () => {
        const view = render(<Skills skills={skills}/>);
        logRoles(view.container)
        const h2Elem = screen.getByRole('heading', {
            level: 2
        });
        expect(h2Elem).toBeInTheDocument();

        const listELem = screen.getByRole('list');
        expect(listELem).toBeInTheDocument();
    });

    test('renders all list items', () => {
        render(<Skills skills= {skills}/>);
        const itemElem = screen.getAllByRole('listitem');
        expect(itemElem).toHaveLength(3);
    });
    test('renders all list items in proper order', () => {
        render(<Skills skills= {skills}/>);
        const itemElem = screen.getAllByRole('listitem');
        expect(itemElem[0]).toHaveTextContent('plumbing');
    });
    test("login button is rendered", () => {
        render(<Skills skills = {skills}/>);
        const loginBtn = screen.getByRole('button', {
            name: "login"
        });
        expect(loginBtn).toBeInTheDocument();
    });
    test("start working is not rendered", () => {
        render(<Skills skills = {skills}/>);
        const workingBtn = screen.queryByRole('button',{
            name: "start working"
        })
        expect(workingBtn).not.toBeInTheDocument();
    });
    test("start working is rendered later", async() => {
        render(<Skills skills = {skills}/>);
        const workingBtn = await screen.findByRole('button',{
            name: "start working"
        }, { timeout: 2000 });
        expect(workingBtn).toBeInTheDocument();
    });
});
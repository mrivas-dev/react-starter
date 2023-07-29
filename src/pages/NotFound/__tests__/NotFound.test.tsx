import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom'

import NotFound from '../';

const setup = () => render((
    <BrowserRouter>
        <NotFound />
    </BrowserRouter>
));

describe('NotFound Unitary Tests', () => {
    afterEach(() => {
        cleanup();
    });

    it('Renders NotFound', async () => {
        const { container,
            getAllByRole,
            getAllByText, getAllByAltText } = setup();
        expect(container).toBeDefined();
        expect(getAllByText("404 error 😰")).toBeDefined();
        expect(getAllByText("Oh snap! The cat eat your page again!")).toBeDefined();
        expect(getAllByRole("button")[0]).toHaveTextContent("Go back home!");
        expect(getAllByRole("img")).toHaveLength(1);
        expect(getAllByAltText("Not found")).toBeDefined();
    });
});
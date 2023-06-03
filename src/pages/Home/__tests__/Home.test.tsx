import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from '..';

const INITIAL_PROPS: any = {
    isLoading: false
};

const setup = (newProps?: any) => (
    <Home {...{...INITIAL_PROPS, ...newProps}} />
);

describe('Home Unitary Tests', () => {
    afterEach(() => {
        cleanup();
    });

    it('Renders Home', async () => {
        const { container } = render(setup());
        expect(container).toBeDefined();
    });
});
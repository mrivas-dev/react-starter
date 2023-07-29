import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import NotFound from '../';

const INITIAL_PROPS: any = {
    isLoading: false
};

const setup = (newProps?: any) => (
    <NotFound {...{...INITIAL_PROPS, ...newProps}} />
);

describe('NotFound Unitary Tests', () => {
    afterEach(() => {
        cleanup();
    });

    it('Renders NotFound', async () => {
        const { container } = render(setup());
        expect(container).toBeDefined();
    });
});
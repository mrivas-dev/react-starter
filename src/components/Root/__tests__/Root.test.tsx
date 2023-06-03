import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Root from '../';

const INITIAL_PROPS: any = {
    isLoading: false
};

const setup = (newProps?: any) => (
    <Root {...{...INITIAL_PROPS, ...newProps}} />
);

describe('Root Unitary Tests', () => {
    afterEach(() => {
        cleanup();
    });

    it('Renders Root', async () => {
        const { container } = render(setup());
        expect(container).toBeDefined();
    });
});
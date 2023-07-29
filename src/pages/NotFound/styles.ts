import styled from 'styled-components';
import { NOTFOUNDBG } from '../../shared/constants/colors';

export const NotFoundWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: #${NOTFOUNDBG};
    display: flex;
    justify-content: center;
    align-items: center;
`;
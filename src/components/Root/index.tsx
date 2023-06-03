import { RouterProvider } from 'react-router-dom';
import { RootWrapper } from './styles';
import router from '../../navigation/router';

const Root = (): JSX.Element => {
    return (
        <RootWrapper>
            <RouterProvider router={router} />
        </RootWrapper>
    );
};

export default Root;
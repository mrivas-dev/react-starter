import { RouterProvider } from 'react-router-dom';
import { RootWrapper } from './styles';
import router from '../../navigation/router';
import Layout from '../../shared/Layout';

const Root = (): JSX.Element => {
    return (
        <RootWrapper>
            <Layout>
                <RouterProvider router={router} />
            </Layout>
        </RootWrapper>
    );
};

export default Root;
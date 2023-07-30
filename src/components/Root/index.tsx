import { RouterProvider } from 'react-router-dom';
import { RootWrapper } from './styles';
import router from '../../navigation/router';
import Layout from '../../shared/Layout';
import AppProvider from '../../provider/AppProvider';
import { ConfigProvider } from 'antd';
import { PRIMARY_BLUE } from '../../shared/constants/colors';

const Root = (): JSX.Element => {
    return (
        <RootWrapper>
            <AppProvider>
                <ConfigProvider
                    theme={{ token: { colorPrimary: PRIMARY_BLUE } }}
                >
                    <Layout>
                        <RouterProvider router={router} />
                    </Layout>
                </ConfigProvider>
            </AppProvider>
        </RootWrapper>
    );
};

export default Root;
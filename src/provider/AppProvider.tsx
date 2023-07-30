

import React from 'react';
import { notification } from 'antd';
import { AppContextType, SendNotificationParams } from './types';
import { INITIAL_STATE } from './utils';

const NOTIFICATION_PLACEMENT = 'top';
export const AppContext = React.createContext<AppContextType>(INITIAL_STATE);

const AppProvider = ({ children }: any) => {
    const [api, contextHolder] = notification.useNotification();

    const sendNotification = ({ title: message, description, type }: SendNotificationParams) => {
        api[type || 'info']({
            message,
            description,
            placement: NOTIFICATION_PLACEMENT,
        });
    };

    return (
        <AppContext.Provider
            value={{
                sendNotification,
            }}
        >
            {contextHolder}
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
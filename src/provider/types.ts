export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface AppContextType {
    sendNotification: ({ title, description }: SendNotificationParams) => void;
};

export interface SendNotificationParams {
    title: string;
    description: string;
    type: NotificationType;
};

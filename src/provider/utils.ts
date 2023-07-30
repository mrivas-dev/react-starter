import { SendNotificationParams } from "./types";

export const INITIAL_STATE = {
    sendNotification: ({ title = '', description = '' }: SendNotificationParams) => { },
};
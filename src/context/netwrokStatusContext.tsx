// State to manage:

// isOnline (boolean to check if the app is online)
import React, { createContext } from 'react';

export interface IStatus{
    isOnline: boolean;
    setIsOnline:(status: boolean) => void;
}

// Create a Context
export const UserNetworkContext = createContext<IStatus>({
    isOnline: true,
    setIsOnline: () => {},
});

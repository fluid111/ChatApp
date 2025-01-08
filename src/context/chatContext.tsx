// State to manage:

// rooms (list of chat rooms)
// currentRoom (the currently active chat room)
// messages (messages in the current chat room)
// sendMessage() function
import React, { createContext } from 'react';

// Create a Context
export const UserContext = createContext(null);

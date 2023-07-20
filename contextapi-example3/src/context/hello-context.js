import { createContext } from "react";

export const messages = {
    message1: {
        firstWord: 'hello',
        secondWord:'world'
    },
    message2: {
        firstWord: 'hi',
        secondWord:'everyone'
    }
}

export const HelloContext = createContext({
    message: messages.message1,
    toggleMessage: () => {},
});
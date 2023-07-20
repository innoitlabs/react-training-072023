import { createContext } from "react";

export const fireAlertMessage = (message) => () => { 
    alert(message);
}

export const fireAsyncAlertMessage = (message, duration) => async () => { 
    const theMessage = await messagePromise(message, duration)
    alert(theMessage);
}

const messagePromise = (message, duration) => { 
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            if (!!message) {
                resolve(message)
            }
            else { 
                reject('Empty message found');
            }
        }, duration);
    });
}


export const ActionContext = createContext({
    alertMessage: () => { },
    asyncAlertMessage: () => { }
});

export default ActionContext;

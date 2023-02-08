const sendNuiMessage = (action: string, array: any): void => {
    SendNUIMessage({
        action,
        array
    });
}

const registerNuiCallback = (name: string, callback: any): void => {
    RegisterNuiCallbackType(name);
    on(`__cfx_nui:${name}`, callback);
}

export {
    sendNuiMessage,
    registerNuiCallback
}
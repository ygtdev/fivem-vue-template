import { sendNuiMessage, registerNuiCallback } from './utils.ts';

registerNuiCallback('SendMessage', (message: string) => {
    console.log(message);
});

registerNuiCallback('HideContainer', () => {
    SetNuiFocus(false);
});

RegisterCommand('template', () => {
    SetNuiFocus(true, true);
    sendNuiMessage('ShowContainer', 'Hello!!');
}, false);

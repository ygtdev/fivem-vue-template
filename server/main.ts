on('onResourceStart', (resName: string) => {
    if (resName === GetCurrentResourceName()) {
        console.log(`${resName} started!`);
    }
})

RegisterCommand('test', (source: number, args: Array<any>) => {
    console.log(source, args);
}, false);
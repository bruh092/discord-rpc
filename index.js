var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "[word]",
assets : {
large_image : "[word]",
large_text : "[word]", // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "[word]" , url : "[url]"},{label : "[word]",url : "[url]"}],
timestamps: {start: Date.now()},
}
})
})
client.login({ clientId : "[Your clientId" }).catch(console.error);

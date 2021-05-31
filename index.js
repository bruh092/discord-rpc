var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Get forked !",
assets : {
large_image : "h",
large_text : "hw", // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "add friend me on lichess" , url : "https://lichess.org/@/Dabruh123"},{label : "send me money for vps",url : "https://www.paypal.com/paypalme/Forex24259"}],
timestamps: {start: Date.now()},
}
})
})
client.login({ clientId : "848533083183251466" }).catch(console.error);
let EventEmitter = require("events");
let emitter = new EventEmitter();
emitter.on("Work Done",()=>{
    console.log("sallery 10K..")
})
// emitter.emit("Work Done");

setTimeout(() => {
    emitter.emit("Work Done");
}, 3000);
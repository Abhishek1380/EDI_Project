const mongoose1 = require("mongoose");

mongoose1.connect("mongodb://localhost:27017/youtubeRegistration", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})

// mongodb://localhost:27017/youtubeRegistration
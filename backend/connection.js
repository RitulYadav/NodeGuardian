const mongoose = require('mongoose');
const url = 'mongodb+srv://ritulsinghyadav302:RitulYadav@cluster0.nxmbpkh.mongodb.net/mydatabase?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.error(err);
    
});
module.exports = mongoose;

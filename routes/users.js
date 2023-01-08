let mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://0.0.0.0:27017/task');

let schema = mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        }
    }
)
module.exports=mongoose.model('tasks',schema);

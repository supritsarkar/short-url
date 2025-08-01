import mongoose from 'mongoose';
mongoose.set("strictQuery", true); 

const urlSchema = new mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true,

    },
    redirectURL:{
          type: String,
        required: true,
    },
    visitHistory:[{
        timestamp:{type:Number}
    }],

},{
    timestamps: true
}
  
)

const URL = mongoose.model('url',urlSchema);

export default URL;
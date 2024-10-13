import mongoose,{ Schema,Model, model } from 'mongoose';

const userSchema = new Schema(
    {
        email : {
            type: String,
            required: true,
            unique: true
        },
        preferences : {
            type : [String],
            default : []
        },
        readingHistory : {
            type : [String],
            default : []
        }
    }
)

const User = model("User",userSchema);
export default User;
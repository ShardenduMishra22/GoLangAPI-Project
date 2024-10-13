import mongoose,{ Schema,Model, model } from 'mongoose';

const articlesSchema = new Schema(
    {
        title : {
            type: String,
            required: true,
        },
        url : {
            type: String,
            required: true,
        },
        publishedAt : {
            type: String,
            default : new Date().toISOString()
        },
        source : {
            type: String,
        },
        userId : {
            types : Schema.Types.ObjectId,
            ref : "User",
        }
    }
)

const Article = model("Article",articlesSchema);
export default Article;
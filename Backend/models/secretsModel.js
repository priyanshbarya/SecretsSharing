import mongoose from "mongoose";

const secretsModel = mongoose.Schema(
    {
        sender: {type:mongoose.Schema.Types.ObjectID, ref:"User"},
        secret: {type: String},
    },
    {timestamps:true,}
);

const Secret = mongoose.model("Secret",secretsModel);
export default Secret;
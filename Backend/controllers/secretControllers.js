import asyncHandler from "express-async-handler"
import Secret from "../models/secretsModel.js";
const postSecrets= asyncHandler(
    async(req,res)=>{
        const secret=(req.body);
        const newSecret=await Secret.create(secret);
    
        if(newSecret){
            res.send({
                massage: "Secret Posted"
            });
        }else{
            res.status(401);
            throw new Error("Secret Didn't Posted");
        }
    });

const getSecrets=asyncHandler(async (req,res)=>{
    try {
        const allData = await Secret.find().sort({$natural:-1});
        res.json(allData);
      } catch (error) {
        res.status(500);
        throw new Error("Internal Server Error");
      }
});
export {postSecrets,getSecrets};
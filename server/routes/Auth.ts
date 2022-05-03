import express from 'express'
import bcrypt from 'bcrypt'
import User from '../models/User';
const authRouter = express.Router();

//register route

authRouter.post('/register',async (req: express.Request, res: express.Response) => {

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        let nuser= {...req.body}
        nuser.password = hashedPassword
        //create a new user
        const newUser = new User(
            nuser
        //     {
        //     username:req.body.username,
        //     email:req.body.email,
        //     password:hashedPassword
        // }
        );
        // validate input
        let errors = await newUser.validateSync();
        console.log('validation',errors);
        // if(errors){
        //    return res.status(500).json(errors)
        // }
        // save user in database
        const user = await newUser.save();
        return  res.status(200).json(user);
    } catch (error:any) {
        return  res.status(500).json(error);
    }

});

// login user
authRouter.post('/login', async(req: express.Request,res: express.Response)=>{

    try {
        //check if user already exist
        const user= await User.findOne({email: req.body.email}).exec();
        if(!user) return res.status(404).json("user not found");

        //check if password is correct
        const isValidPassword = await bcrypt.compare(req.body.password, user.password);
        if(!isValidPassword)return res.status(404).json("wrong password");

        // return valid user
        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).json(error);
    }
});


export default authRouter;
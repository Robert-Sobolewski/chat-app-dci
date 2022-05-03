import {Types} from 'mongoose'
export namespace Chat{

    type ID = Types.ObjectId

    interface IFriend{
        _id:ID,
        username:string
        profilePicture:string
    }
    interface IUser{
        _id:ID
        __v:number
        username:string
        updatedAt:string
        profilePicture:string
        password:string
        isAdmin:boolean
        followings:string[]
        followers:string[]
        email:string
        createdAt:string
        coverPicture:string
    }
    interface IMessage{
        conversationId: string,
        sender:string
        text:string,
        createdAt?:string,
        updatedAt?:string
    }
    interface IChat{
        _id:string
        members:string[]
        createdAt?:string
        updatedAt?:string
    }


}
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
          type: String,
          require: true,
          minlength: [3,'Must be at least 3, got {VALUE}'],
          maxlength: 20,
          unique: true,
        },
        email: {
          type: String,
          required: true,
          maxlength: 50,
          unique: true,
        },
        password: {
          type: String,
          required: true,
        },
        profilePicture: {
          type: String,
          default: "",
        },
        coverPicture: {
          type: String,
          default: "",
        },
        followers: {
          type: Array,
          default: [],
        },
        followings: {
          type: Array,
          default: [],
        },
        isAdmin: {
          type: Boolean,
          required: true,
          default: false,
        },
        desc: {
          type: String,
          maxlength: 50,
        },
        city: {
          type: String,
          maxlength: 50,
        },
        from: {
          type: String,
          maxlength: 50,
        },
        relationship: {
          type: Number,
          enum: [1, 2, 3],
        },
      } ,{
     timestamps: {
        createdAt: true,//'created_at',  Use `created_at` to store the created date
        updatedAt: true  // 'updated_at'and `updated_at` to store the last updated date
      }
    }
);

const User = mongoose.model("User",UserSchema);
export default User;
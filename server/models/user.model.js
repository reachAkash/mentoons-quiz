const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parentName: {
      type: String,
      default: "Parent name",
    },
    nickname: {
      type: String,
      default: "Janu",
    },
    dateOfBirth: {
      type: String,
    },
    mobileNo: Number,
    hoursSpent: {
      type: Array,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePic: {
      type: String,
      default:
        "https://i.pinimg.com/564x/21/98/b9/2198b977407f2b783176f7d269f3fe6c.jpg",
    },
    scoreHistory: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;

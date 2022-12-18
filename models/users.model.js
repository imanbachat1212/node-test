import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    profession: {
        type: String,
        required: true,
      },
    age: {
        type: Number,
        required: true,
    },
    isFeelingGood: {
        type: Boolean,
        required: false,
    }
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model('User', userSchema);

export default User;
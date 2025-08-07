import ErrorHandler from "../middleware/error.js";
import { catchAsyncError } from "../middleware/catchAsyncError";
import { User } from "../model/userModel.js";

export const register = catchAsyncError(async (req, res, next) => {
  try {
    const { name, email, phone, password, verificationMethod } = req.body;
    if (!name || !email || !phone || !password || !verificationMethod) {
      return next(new ErrorHandler("All field are required", 400));
    }
    function validatePhoneNumber(phone) {
      const phoneRegex = /^+923\d{9}$/;
      return phoneRegex.test(phone);
    }
    if (!validatePhoneNumber(phone)) {
      return next(new ErrorHandler("Invalid phone number. ", 400));
    }
    const existingUser = await User.findOne({
      $or: [
        {
          email,
          accountVerified: true,
        },
        { phone, accountVerified: true },
        {
          phone,
          accountVerified: true,
        },
      ],
    });
    if (existingUser) {
      return next(new ErrorHandler("Phone or Email is already used", 400));
    }
    const registerAttemptsByUser = await User.find({
      $or: [
        { phone, accountVerified: false },
        { email, accountVerified: false },
      ],
    });
    if (registerAttemptsByUser.length > 3) {
      return next(
        new ErrorHandler(
          "You have exceeded the maximum number of attempts (3). Please try again after an hour."
        )
      );
    }

    const user = await User.create(userData);
    const verificationCode = await user.generateVerificationCode();
    await user.save();
    sendVerificationCode(verificationMethod, verificationCode, email, phone);
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
});

async function  sendVerificationCode(verificationMethod, verificationCode, email, phone){
    if(verificationMethod === "email"){
        const message = generateEmailTemplate(verificationCode);
    }
}

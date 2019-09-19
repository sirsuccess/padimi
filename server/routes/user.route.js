import express from "express";
import trimRequest from "trim-request";
import verifyToken from "../middleware/tokenHandler";
import validation from "../helpers/validation";
import userValidation from "../middleware/user.validation";
import userController from "../controllers/user.controller";
import createImage from "../helpers/photoRequestChecker";

const router = express.Router();

router.post(
  "/auth/signup",
  validation.signUpValidation,
  userValidation.validateUserReq,
  userController.registerUser
);

router.post(
  "/auth/signin",
  validation.signInValidation,
  userValidation.validateUserReq,
  userController.loginUser
);

router.post(
  "/profile",
  verifyToken.validate,
  trimRequest.body,
  createImage.upload.single("img_url"),
  userValidation.validatePostImage,
  userController.createPhoto
);

router.patch(
  "/password",
  verifyToken.validate,
  trimRequest.body,
  validation.passwordReset,
  userValidation.validateUserReq,
  userController.updatePassword
);

router.post(
  "/buy",
  verifyToken.validate,
  trimRequest.body,
  validation.buyRequest,
  userValidation.validateUserReq,
  userController.buyPlan
);

export default router;

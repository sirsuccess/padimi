import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import userService from "../services/user.services";
import cloudinary from "../config/cloudinary";

dotenv.config();
const secret = process.env.SECRET;
class UserController {
  static async registerUser(req, res) {
    try {
      const {
        first_name,
        last_name,
        email,
        password,
        address,
        gender,
        phone,
        state
      } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);
      const user = {
        firstName: first_name.toLowerCase(),
        lastName: last_name.toLowerCase(),
        email: email.toLowerCase(),
        hashPassword,
        gender,
        phone,
        state,
        address: address.toLowerCase()
      };
      const checkIfUserExist = await userService.checkUser(user.email);
      if (checkIfUserExist > 0) {
        throw new Error("User already registered please sign in");
      }
      const result = await userService.createUser(user, false);
      const jwtToken = jwt.sign(
        {
          user: result.id,
          admin: false,
          info: `${result.first_name} ${result.last_name}`
        },
        secret,
        {
          expiresIn: "12h"
        }
      );
      return res.status(201).json({
        status: 201,
        data: {
          token: jwtToken,
          id: result.id,
          first_name: result.first_name,
          last_name: result.last_name,
          email: result.email,
          address: result.address,
          gender: result.gender,
          phone: result.phone,
          state: result.state,
          is_admin: result.is_admin
        }
      });
    } catch (error) {
      return res.status(409).json({
        status: 409,
        error: error.message
      });
    }
  }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const checkIfUserExist = await userService.findUser(email);
      if (checkIfUserExist.length <= 0) {
        throw new Error("User not registered please signup");
      }
      const checkPassword = await bcrypt.compare(
        password,
        checkIfUserExist[0].password
      );
      if (!checkPassword) {
        throw new Error("invalid password or email");
      }
      const jwtToken = await jwt.sign(
        {
          user: checkIfUserExist[0].id,
          admin: checkIfUserExist[0].is_admin,
          info: `${checkIfUserExist[0].first_name} ${checkIfUserExist[0].last_name}`
        },
        secret,
        {
          expiresIn: "12h"
        }
      );
      return res.status(200).json({
        status: 200,
        data: {
          token: jwtToken,
          id: checkIfUserExist[0].id,
          first_name: checkIfUserExist[0].first_name,
          last_name: checkIfUserExist[0].last_name,
          email: checkIfUserExist[0].email,
          address: checkIfUserExist[0].address,
          gender: checkIfUserExist[0].gender,
          phone: checkIfUserExist[0].phone,
          state: checkIfUserExist[0].state,
          is_admin: checkIfUserExist[0].is_admin
        }
      });
    } catch (error) {
      if (error.message === "invalid password or email") {
        return res.status(400).json({
          status: 400,
          error: error.message
        });
      }
      return res.status(404).json({
        status: 404,
        error: error.message
      });
    }
  }

  static async updatePassword(req, res) {
    try {
      const { new_password, password } = req.body;
      const checkIfUserExist = await userService.findUserById(
        req.userData.user
      );
      if (checkIfUserExist.length <= 0) {
        throw new Error("User not registered please signup");
      }
      const checkPassword = await bcrypt.compare(
        password,
        checkIfUserExist[0].password
      );
      if (!checkPassword) {
        throw new Error("invalid password Enter your old password");
      }

      const hashPassword = await bcrypt.hash(new_password, 10);
      const user = {
        hashPassword
      };
      const result = await userService.updateUser(user, req.userData.user);

      const jwtToken = await jwt.sign(
        {
          user: checkIfUserExist[0].id,
          info: `${checkIfUserExist[0].first_name} ${checkIfUserExist[0].last_name}`
        },
        secret,
        {
          expiresIn: "12h"
        }
      );
      return res.status(200).json({
        status: 200,
        data: { result, token: jwtToken }
      });
    } catch (error) {
      if (error.message === "invalid password or email") {
        return res.status(400).json({
          status: 400,
          error: error.message
        });
      }
      return res.status(404).json({
        status: 404,
        error: error.message
      });
    }
  }

  static async createPhoto(req, res) {
    try {
      if (req.file) {
        const uploadImage = await cloudinary.uploader.upload(req.file.path);
        const newUserInfo = await userService.addImage(req, uploadImage);
        return res.status(201).json({
          status: 201,
          data: {
            newUserInfo
          }
        });
      } else {
        throw new Error("Please add an image file");
      }
    } catch (error) {
      if (error.message === "User not registered") {
        return res.status(401).json({
          status: 401,
          error: error.message
        });
      }
      return res.status(409).json({
        status: 409,
        error: error.message
      });
    }
  }

  static async buyPlan(req, res) {
    try {
      const buyOurPlan = await userService.buyOurPlan(req);
      console.log(req.body);
      return res.status(201).json({
        status: 201,
        data: {
          buy: buyOurPlan[0]
        }
      });
    } catch (error) {
      if (error.message === "User not registered") {
        return res.status(401).json({
          status: 401,
          error: error.message
        });
      }
      return res.status(409).json({
        status: 409,
        error: error.message
      });
    }
  }
}
export default UserController;

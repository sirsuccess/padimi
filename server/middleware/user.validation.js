import validation from "../helpers/userRequestChecker";
import imageInfoChecker from "../helpers/photoRequestChecker";

let validationError;
class checkRequestInput {
  static async validateUserReq(req, res, next) {
    try {
      await validation.checkRequest(req);
      return next();
    } catch (error) {
      return res.status(400).json({
        status: 400,
        error: error.mapped()
      });
    }
  }

  static async validatePostImage(req, res, next) {
    try {
      const result = await imageInfoChecker.createImageCheck(req);
      validationError = result;
      if (Object.entries(result).length > 0) {
        throw new Error();
      }
      return next();
    } catch (err) {
      return res.status(400).json({
        status: 400,
        error: validationError
      });
    }
  }
}

export default checkRequestInput;

import { body, param } from "express-validator/check";

const signUpValidation = [
  body("email")
    .isEmail()
    .withMessage("A valid email is required")
    .normalizeEmail()
    .trim(),
  body("password", "Please enter a password at least 6 characters long")
    .trim()
    .isLength({ min: 6 }),
  body("first_name", "First name with minimum of 2 characters long is required")
    .isLength({ min: 2 })
    .trim(),
  body("gender", "Gender should be M or F and  is required")
    .isLength({ min: 1 })
    .trim(),
  body("phone", "Enter accurate phone number and  is required")
    .trim()
    .isLength({ min: 11 })
    .isMobilePhone(),
  body("state", "Enter valid state in Nigeria")
    .isLength({ min: 2 })
    .trim(),
  body("last_name", "Last name with minimum of 2 characters long is required")
    .isLength({ min: 2 })
    .trim(),
  body("address", "Address with minimum of 2 characters long is required")
    .isLength({ min: 4 })
    .trim()
];

const signInValidation = [
  body("email")
    .isEmail()
    .withMessage("A valid email is required")
    .normalizeEmail()
    .trim(),
  body("password", "Please enter a password at least 6 characters long")
    .trim()
    .isLength({ min: 6 })
];

const buyRequest = [
  body("plan")
    .matches(/^padi_lite$|^padi_start$|^padi_connect$|^padi_premium$/i)
    .withMessage("A valid padi plan is required")
    .trim(),
  body("type")
    .matches(/^hmo$|^insurance$|^finance$/i)
    .withMessage("A valid padi type is required")
    .trim(),
  body("amount", "Please enter buying amount")
    .trim()
    .isNumeric(),
  body("payment_reciept_id", "Please enter reciept id")
    .trim()
    .isNumeric(),
  body("location", "Please enter plan location")
    .isLength({ min: 2 })
    .trim()
];

const passwordReset = [
  body("password", "Please enter a password at least 6 characters long")
    .trim()
    .isLength({ min: 6 }),
  body("new_password", "Please enter a password at least 6 characters long")
    .trim()
    .isLength({ min: 6 })
];

const purchaseOrder = [
  body("car_id", "car id should be numeric").isNumeric(),
  body("amount", "price offered should be number").isNumeric()
];
const orderPrice = [body("price", "price should be numbers only").isNumeric()];
const orderIdParam = [param("order_id", "Invalid order id").isNumeric()];

export default {
  signUpValidation,
  signInValidation,
  passwordReset,
  purchaseOrder,
  orderPrice,
  buyRequest,
  orderIdParam
};

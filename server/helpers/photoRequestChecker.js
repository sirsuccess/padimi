import multer from "multer";

const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname);
  }
});

const upload = multer({ storage });

const createImageCheck = req => {
  const groupError = {};

  if (
    req.file === undefined ||
    !req.file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)
  ) {
    groupError.img_url =
      "profile image file required NOTE: only image (jpg, jpeg, png, gif) files are allowed!";
  }

  return groupError;
};

export default {
  upload,
  createImageCheck
};

const { check, validationResult } = require("express-validator");

exports.validateLoginForm = [
  check("email").isEmail().withMessage("Email cannot be empty!"),
  check("password").not().isEmpty().withMessage("Password cannot be empty!"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.array() });
    }
    next();
  },
];

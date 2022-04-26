const { check, validationResult } = require("express-validator");

exports.validateUser = [
  check("email").isEmail().withMessage("Invalid email address!"),
  check("first_name")
    .not()
    .isEmpty()
    .withMessage("First name cannot be empty!"),
  check("last_name").not().isEmpty().withMessage("Last name cannot be empty!"),
  check("password").not().isEmpty().withMessage("Please enter password!"),
  //   check("first_name").isEmpty().withMessage("First name cannot be empty!"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ errors: errors.array() });
      //.status(422);
    }
    next();
  },
];

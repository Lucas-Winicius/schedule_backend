const { isEmail } = require("validator");

module.exports = class {
  static containsEmailOrPhone({ telephone, email }) {
    if (!telephone && !email) {
      throw {
        statusCode: 400,
        message: "Please provide a telephone or email.",
        secondaryMessage:
          "Oops! It seems like you forgot to give us a way to reach you. We're more lost than a duck in a storm! Please send us a phone number or email.",
        date: Date.now(),
        success: false,
      };
    }
  }

  static containsName({ name }) {
    if (!name) {
      throw {
        statusCode: 400,
        message: "Please provide a name.",
        secondaryMessage:
          "Oops! You forgot to type your name, it's more empty here than a box of chocolates after Christmas.",
        date: Date.now(),
        success: false,
      };
    }
  }

  static containsAuthorId({ authorId }) {
    if (!authorId) {
      throw {
        statusCode: 400,
        message: "Please provide an author id.",
        secondaryMessage:
          "Oops! It seems that the author ID is more lost than a sock in a laundry!",
        date: Date.now(),
        success: false,
      };
    }
  }

  static validateEmail({ email }) {
    if (email && !isEmail(email)) {
      throw {
        statusCode: 400,
        message: "Please provide a valid email.",
        secondaryMessage: "Oops! That email is as valid as a Hogwarts diploma.",
        date: Date.now(),
        success: false,
      };
    }
  }

  static hasContact(contacts) {
    if(contacts.length <= 0) {
      throw {
        statusCode: 200,
        message: "This user doesn't have any saved contacts.",
        secondaryMessage:
        "Oops! Looks like the result went missing! Maybe it went out for a coffee or took a nap. Let's wait a bit and see if it comes back.",
        date: Date.now(),
        success: false,
      };
    }
  }

};

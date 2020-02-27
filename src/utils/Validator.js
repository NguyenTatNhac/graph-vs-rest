class Validator {

  static verifyAuthorRequiredParams(body) {
    const {firstName, lastName, email} = body;

    if (!firstName) {
      return "'firstName' is required!";
    }

    if (!lastName) {
      return "'lastName' is required!";
    }

    if (!email) {
      return "'email' is required!";
    }

    return undefined;
  }

  static verifyArticleRequiredParams(body) {
    const {authorId, title, content} = body;

    if (!authorId) {
      return "'authorId' is required!";
    }

    if (!title) {
      return "'title' is required!";
    }

    if (!content) {
      return "'content' is required!";
    }

    return undefined;
  }
}

export default Validator;

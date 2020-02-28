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

    if (!Number(authorId)) {
      return "'authorId' must be a number!";
    }

    if (!title) {
      return "'title' is required!";
    }

    if (!content) {
      return "'content' is required!";
    }

    return undefined;
  }

  static verifyCommentRequiredParams(body) {
    const {authorId, articleId, content} = body;

    if (!content) {
      return "'content' is required!";
    }

    if (!authorId) {
      return "'authorId' is required!";
    }

    if (!Number(authorId)) {
      return "'authorId' must be a number!";
    }

    if (!articleId) {
      return "'articleId' is required!";
    }

    if (!Number(articleId)) {
      return "'articleId' must be a number!";
    }

    return undefined;
  }
}

export default Validator;

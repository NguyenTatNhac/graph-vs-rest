import AuthorService from "../services/AuthorService";
import ArticleService from "../services/ArticleService";
import CommentService from "../services/CommentService";

const getAuthor = async ({id}) => {
  const author = await AuthorService.getAuthor(id);

  return author != null ? author : null;
};

const getAllAuthors = async () => {
  return await AuthorService.getAllAuthors();
};

const getArticle = async ({id}) => {
  const article = await ArticleService.getArticle(id);
  if (article == null) {
    return null;
  }

  const comments = getArticleComments({articleId: id});
  const author = getAuthor({id: article.authorId});

  return {
    ...article,
    comments,
    author
  }
};

const getAllArticles = async () => {
  return await ArticleService.getAllArticles();
};

const getArticleComments = async ({articleId}) => {
  const comments = await CommentService.getCommentByArticleId(articleId);
  return comments.map(comment => {
    const author = getAuthor({id: comment.authorId});
    return {
      ...comment,
      author
    };
  });
};

const getComment = async ({id}) => {
  return await CommentService.getComment(id);
};

const getAuthorsArticles = async (parent, args, ctx, info) => {
  const authorId = parent.id;
  console.log("Trying to get articles of Author ID: " + authorId);
};

// The root provides a resolver function for each API endpoint
const Resolver = {
  author: getAuthor,
  authors: getAllAuthors,
  article: getArticle,
  articles: getAllArticles,
  comment: getComment,
  Author: {
    articles: getAuthorsArticles
  }
};

export default Resolver;

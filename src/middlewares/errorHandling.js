const errorHandlingMiddleware = (err, req, res, next) => {
  console.log(err);

  res.status(err.status || 500).json({ message: err.message || 'A problem occurred. Please try again later' });
}; /* Isolamento do Middleware error hendling */

export default errorHandlingMiddleware;

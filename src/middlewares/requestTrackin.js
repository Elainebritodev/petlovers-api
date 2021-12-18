const resquestTrackMiddleware = (req, res, next) => {
  console.log(`Receiving "${req.method}" request to route "${req.path}"`);
  next();
};

export default resquestTrackMiddleware;

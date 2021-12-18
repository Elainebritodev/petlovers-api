const resourceNotFoundMiddleware = (req, res) => (
  res.status(404).json({ message: `Resource '${req.method}' to '${req.path}' not found` })
);
/* Isolamento do Middleware de rota não encontrada */

export default resourceNotFoundMiddleware;

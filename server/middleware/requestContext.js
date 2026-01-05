// server/middleware/requestContext.js
const { randomUUID } = require('crypto');

module.exports = function requestContext(req, res, next) {
  const incomingId = req.headers['x-correlation-id'];
  const correlationId = incomingId || randomUUID();

  req.correlationId = correlationId;
  res.setHeader('x-correlation-id', correlationId);

  const start = Date.now();
  res.on('finish', () => {
    const ms = Date.now() - start;
    console.log(
      `[${correlationId}] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${ms}ms)`
    );
  });

  next();
};

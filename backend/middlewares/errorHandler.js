const errorHandler = (err, req, res, next) => {
  console.log(err);

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode).json({
    status: "error",
    error: {
      code: statusCode,
      message: err.message || "Internal Server Error",
    },
  });
};

module.exports = errorHandler;

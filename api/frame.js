module.exports = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  res.status(200).json({
    version: "v1",
    frame: true,
    message: "Frame working"
  });
};

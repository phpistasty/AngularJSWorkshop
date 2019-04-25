module.exports = {
  loginHandler: (req, res) => {
    if (req.body.password === "password") {
      res.send({ username: req.body.username });
    } else {
      res.status(403).send({error: 'Invalid Password'})
    }
  },
};
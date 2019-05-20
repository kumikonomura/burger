const { getBurger, addBurger, updateBurger, deleteBurger } = require('../config/connection')

module.exports = app => {
  // GET a burger
  app.get('/burgers/:t', (req, res) => {
    getBurger({ movie: req.params.t })
      .then(movie => res.json(movie))
      .catch(e => console.log(e))
  })
  // POST a burger
  app.post('/burgers', (req, res) => {
    addBurger(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  // PUT a burger
  app.put('/burgers/:id', (req, res) => {
    updateBurger({ id: req.params.id }, req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  // DELETE a burger
  app.delete('/burgers/:id', (req, res) => {
    deleteBurger({ id: req.params.id })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}

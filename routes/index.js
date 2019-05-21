const { getBurgers, getBurger, addBurger, updateBurger, deleteBurger } = require('../controllers/burgers_controller.js')

module.exports = app => {
  // GET all burgers
  app.get('/burgers', (req, res) => {
    getBurgers()
      .then(burgers => res.json(burgers))
      .catch(e => console.log(e))
  })
  // GET a burger
  app.get('/burgers/:t', (req, res) => {
    getBurger({ burger: req.params.t })
      .then(burger => res.json(burger))
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

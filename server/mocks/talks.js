var DATA = [
  { id: 11, title: 'Ember in Action' },
  { id: 12, title: 'React in Action' },
  { id: 13, title: 'Angular in Action' }
];

module.exports = function(app) {
  var express = require('express');
  var talksRouter = express.Router();

  talksRouter.get('/', function(req, res) {
    res.send({
      'talks': DATA
    });
  });

  talksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  talksRouter.get('/:id', function(req, res) {
    res.send({
      'talks': DATA.filter(function (item) {
        return item.id == req.params.id;
      })[0]
    });
  });

  talksRouter.put('/:id', function(req, res) {
    res.send({
      'talks': {
        id: req.params.id
      }
    });
  });

  talksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/talks', talksRouter);
};

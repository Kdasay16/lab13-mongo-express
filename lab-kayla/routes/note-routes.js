'use strict';

const Note = require('../model/note');

module.exports = function(router) {
  router.get('/api/note', (req, res) => {
    if(!req.query.id) {
      Note.find()
      .then()
      .catch();
    } else {
      Note.findById(req.params.id)
      .then(note => {
        res.json(note);
      })
      .catch(err => res.status(404).send(err.message));
    }
  });

  router.post('/api/note', (req, res) => {
    new Note(req.body).save()
    .then(note => {
      console.log(note);
      res.json(note);
    })
    .catch(err => res.status(400).send(err.message));
  });

// router.put('/api/note/:id', (req, res) => {
//
// });
//
// router.delete('/api/note/:id', (req, res) => {
//
// })

};

const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  Post.findAll({
    attributes: [
      'id',
      'calories',
      'title',
      'created_at'
    ],
    include:
      {
        model: User,
        attributes: ['username']
      }
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      const userId = function(user_id) {
        if(user_id === req.session.user_id)
        return true
      };
      res.render('homepage', {
        posts,
        user: userId(req.body.user_id),
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/edit/:id', withAuth, (req, res) => {
  // All of the users posts are obtained from the database
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'calories',
      'title',
      'created_at',    ],
    include: 
      {
        model: User,
        attributes: ['username']
      }
  })
    .then(dbPostData => {
      // if no post by that id exists, return an error
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      // serialize data before passing to template
      const post = dbPostData.get({ plain: true });
      res.render('edit-post', { post, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
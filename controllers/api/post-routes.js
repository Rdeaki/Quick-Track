const router = require('express').Router();
const { Post, User } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'calories',
        'title',
        'created_at',
        'user_id'
      ],
      order: [['created_at', 'DESC']], 
      include: {
        model: User,
        attributes: ['username']
      }
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'calories',
        'title',
        'created_at'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
        .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    Post.create({
      title: req.body.title,
      calories: req.body.calories,
      user_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Post.update(
      {
        title: req.body.title,
        calories: req.body.calories
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
        .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
        .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});


module.exports = router;
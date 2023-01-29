const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    console.log(req.session)
    try {
      const postData = await Post.findByPk(req.session.user_id, {
        include: [
          User,
          {
            model: Comment,
            include: [User],
          },
        ],
      });
  
      const post = postData.get({ plain: true });
      console.log(post)
  
      res.render('dashboard', {
        ...post,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
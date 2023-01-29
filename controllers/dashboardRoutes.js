const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  console.log(req.session)
  try {
    const postData = await Post.findall(req.session.id, {
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
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/new', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/edit/:id', withAuth, async (req, res) => {
  try {
    const updatedPost = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    })

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
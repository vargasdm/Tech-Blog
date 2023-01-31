const router = require('express').Router();
const { Post, } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id }
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', {
      posts,
      logged_in: req.session.loggedIn,
    });
  } catch (err) {
    console.log({ error: err })
    res.status(500).json(err);
  }
});

// route to get the post-form.handlebars
router.get('/new', withAuth, async (req, res) => {
  try {
    res.render('post-form');
  } catch (err) {
    console.log({ error: err })
    res.status(500).json(err);
  }
});

// route to getthe update-form.handlebars
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    res.render('update-form', { id: req.params.id });
  } catch (err) {
    console.log({ error: err })
    res.status(500).json(err); s
  }
});

// route to update a post
router.put('/edit/:id', withAuth, async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to delete a post
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
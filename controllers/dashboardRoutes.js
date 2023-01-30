const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  console.log({line6:req.session,user_id:req.session.user_id})
  try {
    const postData = await Post.findAll({
        where:{user_id:req.session.user_id}
    });

    console.log({postData})

    const posts = postData.map((post)=>post.get({ plain: true }));
    console.log(posts)

    res.render('dashboard', {
      posts,
      logged_in: req.session.loggedIn,
    });
  } catch (err) {
    console.log({error:err})
    res.status(500).json(err);
  }
});

// for post-form.handlebars
router.get('/new', withAuth, async (req, res) => {
  try {
    res.render('post-form');
  } catch (err) {
    console.log({error:err})
    res.status(500).json(err);
  }
});

// for update-form.handlebars
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    // Serialize data so the template can read it
    const posts = postData.get({ plain: true });
    res.render('update-form', {posts, logged_in: req.session.loggedIn});
  } catch (err) {
    console.log({error:err})
    res.status(500).json(err);
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
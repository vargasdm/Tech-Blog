const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// router.post('/', withAuth, async (req, res) => {
//     try {
//       const newComment = await Comment.create({
//         ...req.body,
//         // post_id: req.session.post_id,
//         user_id: req.session.user_id,
//       });
  
//       res.status(200).json(newComment);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        // post_id: req.session.post_id,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
      const newComment = await Comment.findAll({
        // include: [
        //   {
        //     model: User,
        //     attributes: ['username'],
        //   },
        // ],
      });
      res.status(200).json(newComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
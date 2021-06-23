const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const User = require('../../models/User');
const Immunize = require('../../models/Immunize');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/immunize
// @desc     Create immunize
// @access   Private
router.post(
  '/',auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {

      const newImmunize = new Immunize({
        vaccineName: req.body.vaccineName
      });
      console.log(req.body)
      const immunize = await newImmunize.save();

      res.json(immunize);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/immunizes
// @desc     Get immunize
// @access   Private
router.get('/',auth,async (req, res) => {
  try {
    const immunizes = await Immunize.find().sort({ date: -1 });
    res.json(immunizes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/immunize/:id
// @desc     Get immunize by ID
// @access   Private
router.get('/:id',auth, checkObjectId('id'), async (req, res) => {
  try {
    const immunize = await Immunize.findById(req.params.id);

    if (!immunize) {
      return res.status(404).json({ msg: 'Record not found' });
    }

    res.json(immunize);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/immunize/:id
// @desc     Delete a immunize
// @access   Private
router.delete('/:id', [ auth,checkObjectId('id')], async (req, res) => {
  try {
    const immunize = await Immunize.findById(req.params.id);

    if (!immunize) {
      return res.status(404).json({ msg: 'Record not found' });
    }

    await immunize.remove();

    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

module.exports = router;

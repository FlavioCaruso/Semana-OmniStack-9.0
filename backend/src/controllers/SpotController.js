const User = require('../models/User')
const Spot = require('../models/Spot')

module.exports = {
  async index(req, res) {
    const {
      tech, _id
    } = req.query;

    if(_id){
      const spot = await Spot.findById({
        _id
      })
      return res.json(spot);
    }

    const spots = await Spot.find({
      techs: tech
    })

    return res.json(spots);
  },

  async delete(req, res) {
    const {
      spot_id
    } = req.params;

  await Spot.deleteOne({
      _id: spot_id
    })

    return res.json();
  },


  async store(req, res) {
    const {
      filename
    } = req.file;
    const {
      company,
      techs,
      price
    } = req.body;
    const {
      user_id
    } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({
        error: 'User does not exist'
      })
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(',').map(tech => tech.trim()),
      price
    })

    return res.json({
      spot
    })
  },

  async edit(req, res) {
    const {
      spotId
    } = req.params;
    
    const {
      company,
      techs,
      price,
    } = req.body;

    const spot = await Spot.findByIdAndUpdate(spotId, req.body,{
      new: true,
      upsert: true
    })

    return res.json(spot)
  }
}
const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  Name: String,
  CoverPhoto:String,
  IntroText: String,
  IntroPhotos: [String],
  ItiText1: String,
  ItiPhotos1: [String],
  //ItiText2: String,
 // ItiPhotos2: [String],
 // ItiText3: String,
 // ItiPhotos3: [String],
 // ItiText4: String,
 // ItiPhotos4: [String],
 // FoodText:String,
 // FoodPhotos: [String],
 // BonusText:String,
 // BonusPhotos:[String],
  
});

const Destinations = mongoose.model('Destinations', destinationSchema);

module.exports = Destinations;
/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Maui Hotels API!');
});

/// /////////////////////////////////
/// ////Hotels Endpoints/////////////
/// /////////////////////////////////

// Get all hotels
router.get('/hotel', async (req, res) => {
  try {
    const hotel = await db.Hotels.findAll()
    const reply = hotel.length > 0 ? { data: hotel } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.send('Server Error');
  }
});

// Get one hotel from hotel
router.get('/hotel/:hotel_id', async (req, res) => {
  try {
    const hotel = await db.Hotels.findAll({
      where: {
        hotel_id: req.params.hotel_id
      }
    });
    res.json(hotel);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
/// /////////////////////////////////
/// ////Amenities Endpoints/////////////
/// /////////////////////////////////

// Get all amenities
router.get('/amenity', async (req, res) => {
  try {
    const amenity = await db.Amenities.findAll()
    const reply = amenity.length > 0 ? { data: amenity } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.send('Server Error');
  }
});

// Get one amenity from amenity
router.get('/amenity/:amenity_id', async (req, res) => {
  try {
    const amenity = await db.Amenities.findAll({
      where: {
        amenity_id: req.params.amenity_id
      }
    });
    res.json(amenity);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Comment Endpoints////////////
/// /////////////////////////////////

// Get all comments
router.get('/comments', async (req, res) => {
  try {
    const comments = await db.Comments.findAll();
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Get one comment from id
router.get('/comments/:comment_id', async (req, res) => {
  try {
    const comment = await db.Comments.findAll({
      where: {
        comment_id: req.params.comment_id
      }
    });
    res.json(comment);
  } catch (err) {
    console.error(err);
    res.error('Server error')
  }
});

// Get comments for a specific hotel
router.get('/hotel/:hotel_id/comments', async (req, res) => {
  try {
    const comments = await db.Comments.findAll({
      where: {
        hotel_id: req.params.hotel_id
      }
    });
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.error('Server Error');
  }
});

// Add comment
router.post('/hotel/:hotel_id/comments', async (req, res) => {
  const comments = await db.Comments.findAll();
  const currentId = (await comments.length) + 1;
  try {
    const newComment = await db.Comments.create({
      comment_id: currentId,
      hotel_id: req.body.hotel_id,
      name: req.body.name,
      comment: req.body.comment
    });
    res.json(newComment);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

// Update or Change a comment

router.put('/comments', async (req, res) => {
  try {
    await db.Comments.update(
      {
        hotel_id: req.body.hotel_id,
        name: req.body.hall_name,
        comment: req.body.comment
      },
      {
        where: {
          comment_id: req.body.comment_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});


// Remove comment
router.delete('/comments/:comment_id', async (req, res) => {
  try {
    await db.Comments.destroy({
      where: {
        comment_id: req.params.comment_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});


/// /////////////////////////////////
/// ////Location Endpoints///////////
/// /////////////////////////////////

// Get hotels in a location range
router.get('/region/:sub_region_id', async (req, res) => {
  try {
    const hotels = await db.Hotels.findAll({
      where: {
        sub_region_id: req.params.sub_region_id
      }
    });
    res.json(hotels);
  } catch (err) {
    console.error(err);
    res.error('Server error')
  }
});


/// /////////////////////////////////
/// ////Beds Endpoints///////////////
/// /////////////////////////////////

// Get all beds
router.get('/bed', async (req, res) => {
  try {
    const alpha = await db.Beds.findAll()
    const reply = alpha.length > 0 ? { data: alpha } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.send('Server Error');
  }
});

// Get one bed from beds
router.get('/bed/:bed_id', async (req, res) => {
  try {
    const alpha = await db.Beds.findAll({
      where: {
        bed_id: req.params.bed_id
      }
    });
    res.json(alpha);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// /////////////////////////////////
/// ////Rooms Endpoints//////////////
/// /////////////////////////////////

// Get all rooms
router.get('/room', async (req, res) => {
  try {
    const bravo = await db.Rooms.findAll()
    const reply = bravo.length > 0 ? { data: bravo } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.send('Server Error');
  }
});

// Get one room from rooms
router.get('/room/:room_id', async (req, res) => {
  try {
    const bravo = await db.Rooms.findAll({
      where: {
        room_id: req.params.room_id
      }
    });
    res.json(bravo);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});



/// //////////////////////////////////
/// ///////Custom SQL Endpoint////////
/// /////////////////////////////////
const macrosCustom = 'SELECT `Dining_Hall_Tracker`.`Meals`.`meal_id` AS `meal_id`,`Dining_Hall_Tracker`.`Meals`.`meal_name` AS `meal_name`,`Dining_Hall_Tracker`.`Macros`.`calories` AS `calories`,`Dining_Hall_Tracker`.`Macros`.`carbs` AS `carbs`,`Dining_Hall_Tracker`.`Macros`.`sodium` AS `sodium`,`Dining_Hall_Tracker`.`Macros`.`protein` AS `protein`,`Dining_Hall_Tracker`.`Macros`.`fat` AS `fat`,`Dining_Hall_Tracker`.`Macros`.`cholesterol` AS `cholesterol`FROM(`Dining_Hall_Tracker`.`Meals`JOIN `Dining_Hall_Tracker`.`Macros`)WHERE(`Dining_Hall_Tracker`.`Meals`.`meal_id` = `Dining_Hall_Tracker`.`Macros`.`meal_id`)';
router.get('/table/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(macrosCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

const mealMapCustom = `SELECT hall_name,
  hall_address,
  hall_lat,
  hall_long,
  meal_name
FROM
  Meals m
INNER JOIN Meals_Locations ml 
  ON m.meal_id = ml.meal_id
INNER JOIN Dining_Hall d
ON d.hall_id = ml.hall_id;`;
router.get('/map/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(mealMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/custom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;

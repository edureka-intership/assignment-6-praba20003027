const express=require('express')
const Router=express.Router()
const restaurantcontroller= require('../controllers/resturant')
const locationController= require('../controllers/location')


//configure all routes
Router.get('/resturants',restaurantcontroller.getAllRestaurants)
Router.get('/resturants/:city',restaurantcontroller.getAllRestaurantsBycity)
Router.post('/resturants/filter/:pageNo',restaurantcontroller.getAllRestaurantsByFilter)

//location route
Router.get('/locations',locationController.getAllLocations)

module.exports=Router
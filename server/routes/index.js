let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.DisplayHomePage); 

/* GET home page. */
router.get('/home', indexController.DisplayHomePage);

/* GET Products page. */
router.get('/projects', indexController.DisplayProductsPage);

/* GET Services page. */
router.get('/services', indexController.DisplayServicesPage);

/* GET About page. */
router.get('/about', indexController.DisplayAboutPage);

/* GET Contact page. */
router.get('/contact', indexController.DisplayContactPage);

/* login / logout / register routes */

/* GET - Display Login Page */
router.get('/login', indexController.DisplayLoginPage);

/* POST - Process Login Page */
router.post('/login', indexController.ProcessLoginPage);

/* GET to perform Logout */
router.get('/logout', indexController.PerformLogout);

module.exports = router;

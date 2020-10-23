let express = require('express');
let router = express.Router();
/*let mongoose = require ('mongoose');*/
/*let passport = require('passport');*/

let buisnessController = require('../controllers/buisness');


function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


/* GET Component-list page. READ */
router.get('/', buisnessController.DisplayBuisnessList);
  
/* GET Display Add page. CREATE  */
router.get('/add', requireAuth, buisnessController.DisplayAddPage);

/* POST process the Add page. CREATE */
router.post('/add',requireAuth, buisnessController.ProcessAddPage);

/* GET Display Edit page. UPDATE */
router.get('/edit/:id',requireAuth,  buisnessController.DisplayEditPage);

/* POST process the Edit page. UPDATE */
router.post('/edit/:id',requireAuth,  buisnessController.ProcessEditPage);

/* GET process the Delete page. DELETE */
router.get('/delete/:id',requireAuth,  buisnessController.ProcessDeletePage);


module.exports = router;
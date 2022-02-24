const express = require('express')
const router = express.Router()

const { 
  addNewForm, 
  getForms,
  getForm,
  UpdateForm,
  deleteForm
} = require('../controllers/formController.js')

      router.route('/forms').get(getForms)
      // POST endpoint
      router.route('/forms').post(addNewForm)
      // Get specific form
      router.route('/forms/:id').get(getForm)
      // update a specific form
      router.route('/forms/:id').put(UpdateForm)
      // update a specific form
      router.route('/forms/:id').delete(deleteForm);

module.exports = router;
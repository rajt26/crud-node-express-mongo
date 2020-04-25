const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Employee = require('../models/Employee.model')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//get post
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find()
    res.send(employees)

  } catch (err) {
    res.json({ message: err })
  }
})

//create post
router.post('/', (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    age: req.body.age,
    address: req.body.address
  })
  employee.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Something wrong while creating the product."
      });
    });
})


//specific Employee

router.get('/:employeeId', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.employeeId)
    res.send(employee)
  } catch (error) {
    res.send(error)
  }
})

// delete Employee
router.delete('/:employeeId', async (req, res) => {
  try {
    const deleteEmployee = await Employee.remove({ _id: req.params.employeeId })
    res.send(deleteEmployee)
  } catch (error) {
    res.send(error)
  }
})

// update Employee
router.patch('/:employeeId', async (req, res) => {
  try {
    const updateEmployee = await Employee.update({ _id: req.params.employeeId }, { $set: { name: req.body.name, email: req.body.email } })
    res.send(updateEmployee)
  } catch (error) {
    res.send(error)
  }
})




module.exports = router
const express = require('express');
const Employee = require('../models/employee');

const router = express.Router();

// Get all employees
router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({ status: true, data: employees });
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
});

// Create new employee
router.post('/employees', async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(201).json({ status: true, data: newEmployee });
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
});

// Get employee by ID
router.get('/employees/:eid', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.eid);
        if (!employee) return res.status(404).json({ status: false, message: 'Employee not found.' });
        res.status(200).json({ status: true, data: employee });
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
});

// Update employee details
router.put('/employees/:eid', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.eid, req.body, { new: true });
        if (!updatedEmployee) return res.status(404).json({ status: false, message: 'Employee not found.' });
        res.status(200).json({ status: true, data: updatedEmployee });
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
});

// Delete employee by ID
router.delete('/employees', async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.query.eid);
        if (!deletedEmployee) return res.status(404).json({ status: false, message: 'Employee not found.' });
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
});

module.exports = router;
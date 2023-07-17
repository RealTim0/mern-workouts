const express = require('express')
const {
    createWorkout,
    findWorkout,
    findWorkouts,
    deleteWorkout,
    updateworkout,
    updateWorkout
} = require('../controllers/workout')

const router = express.Router()

router.get('/', findWorkouts)
router.get('/:id', findWorkout)
router.post('/', createWorkout)
router.patch('/:id', updateWorkout)
router.delete('/:id',deleteWorkout)

module.exports = router
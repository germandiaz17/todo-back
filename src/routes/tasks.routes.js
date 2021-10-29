const { Router } = require('express');
  const { getTasksCtrl, getTasksByIdCtrl, postTaskCtrl, updateTaskByIdCtrl, deleteTasksByIdCtrl} = require('../controllers/task.controller');

const router = Router();

//metodos get
router.get('/tasks', getTasksCtrl)
router.get('/tasks/:id', getTasksByIdCtrl)

//metodos post
router.post('/tasks/', postTaskCtrl)

//metodos put
router.put('/tasks/:id', updateTaskByIdCtrl)

//metodos delete
router.delete('/tasks/:id', deleteTasksByIdCtrl)


module.exports = router;

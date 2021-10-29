const { getAllTasks, getTaskById, postTask, updateTaskById, deleteTasksById } = require('../services/tasks.services');

const getTasksCtrl = async (req, res, next) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    next(error)
  }
};


const getTasksByIdCtrl = async (req, res) => {
    try {
        const task = await getTaskById(req.params.id)
        res.json(task)   
    } catch (error) {
        console.log(error)
    }
}


const postTaskCtrl = async (req, res) => {
    try {
        const tasks = await postTask(req.body)
        res.json(tasks)

    } catch (error) {
        console.log(error)
    }
}


const updateTaskByIdCtrl = async (req, res) => {
  try {
    const tasks = await updateTaskById(req.params.id, req.body.task, req.body.status)
    res.json(tasks)
  } catch (error) {
    console.log(error)
  }
}


const deleteTasksByIdCtrl = async (req, res) => {
  try {
    const tasks = await deleteTasksById(req.params.id)
    res.json(tasks)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getTasksCtrl,
  getTasksByIdCtrl,
  postTaskCtrl,
  deleteTasksByIdCtrl,
  updateTaskByIdCtrl
};
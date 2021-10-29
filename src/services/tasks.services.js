const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const TASK_PATH = path.resolve(__dirname, '..', 'tasks.json');

//OBTENER TODAS LAS TAREAS
const getAllTasks = async () => {
  try {
    const tasks = await fs.readFile(TASK_PATH, 'utf8');
    return JSON.parse(tasks);
  } catch (error) {
      throw error
  }
};


//OBTENER TAREAS POR ID
const getTaskById = async (id) => {
  try {
      const tasks = await getAllTasks()
      const response = tasks.filter((task) => task.id === id)[0]
      return response
  } catch (error) {
      console.log(error)
  }
};



//ASIGNAR TAREAS
const postTask = async (taskObj) => {

  try {
    const tasks = await getAllTasks()
    taskObj = {...taskObj, id: uuidv4()}
    tasks.push(taskObj)
    await fs.writeFile(TASK_PATH, JSON.stringify(tasks))
    return tasks
    
  } catch (error) {
    console.log(error)
  }
}



//ACTUALIZAR TAREAS
const updateTaskById = async (id, bodyTask, bodyStatus) => {

  const tasks = await getAllTasks()
  let task = await getTaskById(id)
  task = {...task, task: bodyTask, status: bodyStatus}

  const newObj = tasks.map((tarea) => {
    if(tarea.id === id) {
      return tarea = {...tarea, task: bodyTask, status: bodyStatus}
    }else {
      return tarea
    }
  })

  await fs.writeFile(TASK_PATH, JSON.stringify(newObj))

  return newObj
}



//BORRAR TAREAS
const deleteTasksById = async (id) => {
  try {
    const tasks = await getAllTasks()
    const taskById = await getTaskById(id)
    const newObj = tasks.filter((task) => task.id !== taskById.id)
    await fs.writeFile(TASK_PATH, JSON.stringify(newObj))

    return newObj

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllTasks,
  getTaskById,
  postTask,
  deleteTasksById,
  updateTaskById
};
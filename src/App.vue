<template>
  <Header @toggle-add-task="toggleTask" title="Todo App" :showAddTask="showAddTask"/>
  <div v-show="showAddTask">
    <AddTask @NewTask="AddTasks" />
  </div>
  <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'


export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data(){
    return {
      tasks: [],
      showAddTask: false,
    }
  },
  methods:{
      toggleTask(){
        this.showAddTask = !this.showAddTask
      },
      async AddTasks(task){
        const res = await fetch('api/tasks', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(task)
        })

        const data = await res.json()

        this.tasks = [...this.tasks, data]
      },
      async deleteTask(id){
        if (confirm("Are you sure?")){
          const res = await fetch(`api/tasks/${id}`, {
            method: 'DELETE'
          })

          res.status === 200 ? (
            this.tasks = this.tasks.filter((task) => task.id !== id)
          ) : "Error deleting task"
        }
      },

     async toggleReminder(id){
        const taskToToggle = await this.fetchTask(id)
        const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
        const res = await fetch(`api/tasks/${id}`, {
          method: 'PUT',
          headers:{
            "Content-type": 'application/json'
          },
          body: JSON.stringify(updTask)
        })

        const data = await res.json()

        this.tasks = this.tasks.map((task)=> task.id === id ? {...task, reminder: data.reminder} : task)
      },
      async fetchTasks(){
        const res = await fetch('api/tasks')
        const data = await res.json()

        return data
      },
      async fetchTask(id){
        const res = await fetch(`api/tasks/${id}`)
        const data = await res.json()

        return data
      },
    
  },
  async created(){
    this.tasks = await this.fetchTasks()
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  padding: 20px;
  align-content: center;
  background: #000;
  color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
.btn{
  height: fit-content;
  padding: 10px;
  border-style: none;
  border-radius: 5px;
}

</style>

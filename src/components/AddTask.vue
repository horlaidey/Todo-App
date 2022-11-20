<template>
   <form @submit="AddTasks" action="" class="form">
    <div class="form-control">
        <label for="">
            Task
        </label>
        <input v-model="text" type="text" placeholder="Add Task" name="Add Task">
    </div>
    <div class="form-control">
        <label for="">
            Day and Time
        </label>
        <input v-model="time" type="text" placeholder="Day and time" name="time">
    </div>
    <div class="form-control">
        <label for="">
           Reminder
        </label>
        <input v-model="reminder" type="checkbox" name="reminder">
    </div>
    <div class="form-control">
        <input type="submit" value="Save Task" class="btn">  
    </div>
   </form>
</template>

<script scoped>
    export default{
        name: 'AddTask',

        data(){
            return{
            text:'',
            time:'',
            reminder: false
            }
        },
        methods:{
            AddTasks(e){

                e.preventDefault()

                if(!this.text){
                    alert('Enter a valid task')
                }
                const newTask ={
                    id: Math.floor(Math.random()*1000),
                    text: this.text,
                    time: this.time,
                    reminder: this.reminder
                }
                this.$emit('NewTask', newTask)

                this.text = ''
                this.time =''
                this.reminder =''
            }
        }
    }
</script>

<style>

    .form{
        margin: 20px 0;
        padding: 10px;
        width: 50%;
        background: #fff;
        color: #000;
    }
    .form-control{
        display: flex;
        justify-content: center;
        margin: 10px auto;
    }
    .form-control>label{
        flex: 1;
    }
    .form-control>input{
        flex: 2;
        border-radius: 10px;
    }
    .btn{
        max-width: fit-content;
        height: fit-content;
        padding: 5px;
        background: gray;
        text-align: center;
    }
    @media screen and (max-width: 480px) {
        .form{
            width: 80%;
            margin: auto;
            padding: 10px;
        }
        .form-control{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
        }
        .form-control>label{
            margin: auto;
        }
        .form-control>.btn{
            margin: auto !important;
        }
        
    }
</style>
<template>
    <div :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3 @click="$emit('toggle-reminder', task.id)">{{task.text}}
        </h3>
        <span><i @click="$emit('delete-task', task.id)" class="fas fa-times"></i></span>
        <p>{{task.time}}</p>
    </div>
</template>

<script>
    export default{
        name: 'Task',
        props:{
            task: Object,
        },
    
    }
</script>

<style scoped>

    span{
        position: absolute;
        right: 5%;
        top: 30%;
        background: #fff;
        padding: 10px;
        width: fit-content;
    }
    .fas{
        color: red;
        margin: auto;
    }
    .task{
        position: relative;
        background: rgba(128, 128, 128, 0.612);
        padding: 10px;
        color: #fff;
        margin: 5px;
        cursor: pointer;
        display: inline-block;
        width: 50%;
        max-height: fit-content;
        text-align: center;
    }
    .reminder{
        border-left: green solid 3px;
    }
    @media screen and (max-width:480px){
        .task{
            width: 100%;
        }
    }
</style>
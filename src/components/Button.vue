<template>
    <button @click="click()" :style="{background: color}" class="btn">{{title}}</button>
</template>

<script>
    export default{
        name:'Button',
        props:{
            title: String,
            color: String
        },
        methods:{
    click(){
        this.$emit('btn-click')
    }
    }
}

</script>

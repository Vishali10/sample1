<script setup>
const props = defineProps({
    label:String,
    type:String,
    placeholder:String,
    maxlength:String,
    modelValue:{
    type:[String,Number],
    default:'',
    
    }
}

)
</script>
<template>
<div class="formControl">
        <label :for="label">{{label}} </label>
        <input :type="type" v-bind="$attrs" :maxlength="maxlength"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('updateInput', $event.target.value)"/>
   
    </div>

</template>
<style>
.formControl{
    padding-top:15px ;
    display: flex;
    flex-direction: column;
}
input{
margin-top: 5px;
background: #FAFAFA;
border: 1px solid #D1D5DB;
box-sizing: border-box;
border-radius: 8px;
height: 50px;
width: 95%;
padding: 10px;
}
input:active,input:focus, input:focus-visible{
    outline:none;
border: 1px solid #4169E1;
box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16);
}
input.error
{
    border:1px solid #FF7171;
}

input ::placeholder{
    font-family: Inter, sans-serif;
font-weight: normal;
font-size: 14px;
line-height: 17px;
display: flex;
align-items: center;
color: #C6C9CF;
}
</style>
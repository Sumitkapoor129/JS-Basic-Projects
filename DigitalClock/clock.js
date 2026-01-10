const body =document.body;
setInterval(()=>{
const time=new Date;
const hour=time.getHours()
const minute=time.getMinutes()
const second=time.getSeconds()
console.log(second);

const onj=document.querySelector('#time');
onj.value=`${hour}:${minute}:${second}`
},0)




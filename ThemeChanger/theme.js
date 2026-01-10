function random(){
    const colours=["top","bottom","left","right","up","down","back","front"];
    return colours[Math.floor(Math.random()*colours.length)];
}
const btn=document.querySelectorAll('button');
btn.forEach((b)=>{
    b.addEventListener('click',()=>{
        const body=document.querySelector('body');
        if(b.className=='random()'){
            body.className=random();
        }
        else{
        body.className=b.className;}
    })
})

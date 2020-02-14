const github=new Github;
const searchUser=document.querySelector('#searchUser');

searchUser.addEventListener('keyup',(e)=>{

    const userText=e.target.value;

    if(userText!=='')
    {
        github.getUser(userText)
            .then(data=>console.log(data))
            .catch(err=>console.log(err))
    }
})

const github=new Github;
const searchUser=document.querySelector('#searchUser');

searchUser.addEventListener('keyup',(e)=>{

    const userText=e.target.value;

    if(userText!=='')
    {
        github.getUser(userText)
            .then(data=>{
                if(data.profile.message==='Not Found')
                {

                }else
                {
                    const ui=new UI;
                    ui.showProfile(data.profile);
                }

            })
            .catch(err=>console.log(err))
    }else
    {
        //clear user profile
    }
})

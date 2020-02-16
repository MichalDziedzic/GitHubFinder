class UI{

    constructor()
    {
        this.profile=document.querySelector('#profile');
        this.searchContainer=document.querySelector('.searchContainer');
    }
    showProfile(user)
    {
        //console.log(user);
        this.profile.innerHTML=`<div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="" class="img-fluid mb-2"> 
                    <a href="${user.html_url}" class="btn btn-primary btn-block mb-4">View profile</a>
                </div>
                    <div class="col-md9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-danger">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Public Followers: ${user.followers}</span>
                        <span class="badge badge-info">Public Following: ${user.following}</span>
                        <br><br>
                            <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>  
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }
    clearProfile()
    {
        this.profile.innerHTML='';
    }
    clearAlert()
    {
        const CurrentAlert=document.querySelector('.alert');

        if(CurrentAlert)
        {
            CurrentAlert.remove();
        }
    }
    showAlert(message,className)
    {
        this.clearAlert();
        const div=document.createElement('div');
        div.className=className;
        div.appendChild(document.createTextNode(message));
        const search=document.querySelector('.search');
        this.searchContainer.insertBefore(div,search);
        
        setTimeout(()=>{
            this.clearAlert()
        },3000)

    }
    
}

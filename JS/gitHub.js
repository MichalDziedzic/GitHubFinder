class Github
{
    constructor()
    {
        this.client_id='787cbf3500d1ba8d93c1';
        this.client_secret='57ab994d7162958df9a14bafc1894b304a59959d';
    }
     async getUser(user)
    {
        const profileResponse= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
       
        const profile= await profileResponse.json();

        return{
            profile 
        }
    }

}

const search = document.querySelector('#search');
let input = document.querySelector('.inputname');
let nameUser = document.querySelector('h2');
let lienGithub = document.querySelector('.lien-github');
let joined = document.querySelector('.joined');
let bio = document.querySelector('.bio');
let repos = document.querySelector('.reposOut');
let followers = document.querySelector('.followersOut');
let followings = document.querySelector('.followingsOut');
let position = document.querySelector('.position-user');
let lienSite = document.querySelector('.lien-site-web');
let lienTwitter = document.querySelector('.lien-twitter');
let lienCompany = document.querySelector('.lien-company');
let profil = document.querySelector('.profil');
let error = document.querySelector('.erorr');
let srcImg = profil.getAttribute("src");







const api = function (octo){
    let url = `https://api.github.com/users/${octo}`;

    fetch (url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)  

        let date = new Date(data.created_at);

        const mois = ["Jan", "Feb", "Mar", "Apri", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        joined.textContent = "Joined " + date.getDate() + " " + mois[date.getMonth()] + " " + date.getFullYear();

        nameUser.textContent = data.name;
        lienGithub.textContent = "@" + data.login;
        srcImg = data.avatar_url;
        profil.setAttribute("src", srcImg);
        
        if(data.bio == null){
            bio.textContent = 'This profile has nos bio';
        }else{
            bio.textContent = data.bio;
        }

        repos.textContent = data.public_repos;
        followers.textContent = data.followers;
        followings.textContent = data.following;


        if(data.location == null){
            position.textContent = 'not available'; 
        }else{
            position.textContent = data.location;
        }

        if(data.blog == null){
            lienSite.textContent = 'not available';
        }else {
            lienSite.textContent = data.blog;
        }

        if(data.twitter_username == null){
            lienTwitter.textContent = 'not available';
        }else{
            lienTwitter.textContent = data.twitter_username;
        }

        if(data.company == null){
            lienCompany.textContent = 'not available';
        }else{
           lienCompany.textContent = data.company; 
        }
        
    })
}
search.addEventListener('click', () => {
    let userVal = input.value;
    api(userVal);
    console.log(userVal);
    var element = document.body;
   element.classList.toggle("dark-mode");
})

api('octocat');























































































// Réaliser une fonction qui génère un tableau de n nombres ( en commencant par 1 ).

// Réaliser une fonction qui prend en paramètre un tableau et retourne la somme de tout les nombres compris dans ce tableau.

// function createTable (n){
//     let tab = [];
//     for (let i = 0; i <= n; i++){
//         tab.push(i)
//     }
//     return tab
// }

// console.log(createTable(01));

// function sum (tab){
//     let sum = 0;
//     for (let i = 0; i < tab.length; i++) {
//         sum += tab[i];
//     }
//     return sum
// }
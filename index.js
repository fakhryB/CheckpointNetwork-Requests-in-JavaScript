writeDate=()=>{
    var getcurrentdate= new Date()
var day = getcurrentdate.getDay()
var month= getcurrentdate.getMonth()
var year = getcurrentdate.getUTCFullYear()
var nhar = getcurrentdate.getUTCDate()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const t = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
return `${t[day]}, ${nhar} ${months[month].slice(0,3)} ${year}`
}

const date = document.querySelector('.date')
date.innerText=writeDate()


const consommationAPI =async()=>{
    try {
     const res = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Tunisia,tn&APPID=584b4a7a31e71c8645f53d22222a0184')
     const temperature = document.querySelector('#tmp')
     temperature.innerText = Math.trunc(res.data.main.temp -273)

     if (Math.trunc(res.data.main.temp -273)>20) {
        const weather = document.querySelector('#weather')
        weather.setAttribute('src','https://as2.ftcdn.net/v2/jpg/00/33/72/93/1000_F_33729304_Vj34rUd5A7fyDePMusykCcLZHTM7616R.jpg')
     } else {
        weather.setAttribute('src','https://previews.123rf.com/images/dvarg/dvarg1207/dvarg120700524/14657591-ic%C3%B4ne-m%C3%A9t%C3%A9o-simple-cloud-avec-la-pluie-et-la-foudre.jpg')

     }
     const country = document.querySelector('.city')
     country.innerText = res.data.name
    } catch (error) {
        console.log(error)
    }
} 

consommationAPI()

const consNews =async()=>{
    try {
       const res = await axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=21508358eb0e4b6c8806d08f0742d454')
        const articles =res.data.articles
        const news = document.querySelector('#news')
        for (let i = 0; i < articles.length; i++) {
            const newDiv = document.createElement('div')
            const title = document.createElement('h4')
            title.innerText = articles[i].title
            const par = document.createElement('p')
            par.innerText = articles[i].content
            newDiv.appendChild(title)
            newDiv.appendChild(par)
            news.appendChild(newDiv)
            
        }
        console.log(articles)
    } catch (error) {
        console.log(error)
    }
}

consNews()
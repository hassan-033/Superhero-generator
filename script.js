const SUPERHERO_TOKEN = '488037113669942'
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const newHeroBtn = document.getElementById('getNewHeroButton')
const imageDiv = document.getElementById('image-wrapper')
const heroInfo = document.getElementById('hero-info-wrapper')

const getSuperHero = (id) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        // console.log(json)
        imageDiv.innerHTML = `<img src = '${json.image.url}' height = 200 width = 200>`
        imageDiv.innerHTML += `<h1>${json.name}</h1>`
        imageDiv.innerHTML += `<h4>Strength: ${json.powerstats.strength}</h4>
        <h4>Agility: ${json.powerstats.strength}</h4>
        <h4>Speed: ${json.powerstats.speed}</h4>
        <h4>Intelligence: ${json.powerstats.intelligence}</h4>
        <h4>Durability: ${json.powerstats.durability}</h4>
        <h4>Power: ${json.powerstats.power}</h4>
        <h4>Combat: ${json.powerstats.combat}</h4>
        <h4>Occupation: ${json.work.occupation}</h4>
        `
       
    })
}

const randomHero = () => {
    const numOfHeroes = 731
    return Math.floor(Math.random() * numOfHeroes) + 1
}
newHeroBtn.onclick = () => getSuperHero(randomHero())

const searchBtn = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')
searchBtn.onclick = () => getSearchedSuperHero(searchInput.value)


const getSearchedSuperHero = (name) => {
    fetch(`${BASE_URL}/search/${name}`)
  .then(response => response.json())
  .then(json => {
    // console.log(hero)
    if (searchInput.value == "") {
      window.alert("Superhero parameter is empty. Enter a valid superhero name")
    } else if (searchInput.value == undefined) {
      window.alert("Invalid superhero name. Enter a valid superhero name")
    }
    const hero = json.results[0]
    imageDiv.innerHTML = `<img src = '${hero.image.url}' height = 200 width = 200>`
    imageDiv.innerHTML += `<h1>${hero.name}</h1>
    <h4>Strength: ${hero.powerstats.strength}</h4>
    <h4>Agility: ${hero.powerstats.strength}</h4>
    <h4>Speed: ${hero.powerstats.speed}</h4>
    <h4>Intelligence: ${hero.powerstats.intelligence}</h4>
    <h4>Durability: ${hero.powerstats.durability}</h4>
    <h4>Power: ${hero.powerstats.power}</h4>
    <h4>Combat: ${hero.powerstats.combat}</h4>
    <h4>Occupation: ${hero.work.occupation}</h4>`
  })
}




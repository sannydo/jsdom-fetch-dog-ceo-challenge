console.log('%c HI', 'color: firebrick')

​
​
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
​
​
​
document.addEventListener('DOMContentLoaded', () =>{
    let allBreeds = []
    const dogBreedUl = document.getElementById('dog-breeds')
​
    dogBreedUl.addEventListener('click', function(event){
        event.target.style.color = "red"
    })
​
    fetch(imgUrl, {method: 'GET'})
    .then((response) =>  response.json())
    .then((dogImgData) => {
        dogImgData.message.forEach(function(imgUrl) {
            const dogImgContainer = document.getElementById('dog-image-container')
            dogImgContainer.innerHTML += `<img src="${imgUrl}">`
        })
        const dogImgString = dogImgData.message.map((imgUrl) => {
            return `<img src="${imgUrl}">`
        })
    })
​
fetch(breedUrl, { method: 'GET' })
    .then((resp) => resp.json())
​
    .then((breedData) => {
        allBreeds = Object.keys(breedData.message)
        const dogBreedUl = document.getElementById('dog-breeds')
​
        dogBreedUl.innerHTML = createDogList(allBreeds)
    })
​
    const breedDropdown = document.getElementById('breed-dropdown')
​
    breedDropdown.addEventListener('change', (event) => {
       
        const letter = event.target.value
        const filteredBreeds = allBreeds.filter((breed) => breed.includes(letter))
         dogBreedUl.innerHTML = createDogList(filteredBreeds)
    })
})
​
​
​
​
      
​
function createDogList(dogBreedArray) {
    const dogLiStringArray = dogBreedArray.map(function(breed){
    return `<li>${breed}</li>`
    })
    return dogLiStringArray.join('')
}
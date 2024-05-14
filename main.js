const gifSection = document.querySelector('.gif-section')
const searchBtn = document.querySelector('#search-btn')
let apiKey = 'FF5JPMvjibp8AcaszNexYGxzFPnjRJ4n'

const img = document.querySelector('.test-img')

async function getGif()
{
    const deleteGif = document.querySelectorAll('#gif')
    deleteGif.forEach((delGif)=>{
        delGif.remove()
    })
    console.log(deleteGif)

    const inputValue = document.querySelector('#search-box').value
    const gifData = {
        limit: 9,
        offset: 0,
        rating: 'g',
    }
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputValue}&limit=6`
    
    const responce = await fetch(url)

    const product = await responce.json()
    const gifArray = product.data
    gifArray.forEach((info)=>{
        const gifContainer = `
            <div id="gif" class="gif-container">
                <img class="test-img" src="${info.images.downsized_medium.url}" alt="gif">
            </div>
        `
        gifSection.insertAdjacentHTML('afterbegin', gifContainer)
    })
}

searchBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    getGif()
})
window.addEventListener('load', getGif)
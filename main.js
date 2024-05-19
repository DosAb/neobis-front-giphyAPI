const gifSection = document.querySelector('.gif-section')
const searchBtn = document.querySelector('#search-btn')
let apiKey = 'FF5JPMvjibp8AcaszNexYGxzFPnjRJ4n'

async function getGif()
{
    const deleteGif = document.querySelectorAll('#gif')
    deleteGif.forEach((element)=>{
        element.remove()
    })

    const inputValue = document.querySelector('#search-box').value
    const gifData = {
        search: 'lion',
        limit: 6,
        offset: 0,
        rating: 'g',
    }
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputValue}&limit=${gifData.limit}&offset=${gifData.offset}&rating=${gifData.rating}`
    try{
        const responce = await fetch(url)
        const product = await responce.json()
    
        const gifArray = product.data
        console.log(gifArray)
        gifArray.forEach((info)=>{
            const gifContainer = `
                <div id="gif" class="gif-container">
                    <img class="test-img" src="${info.images.downsized_medium.url}" alt="gif">
                </div>
            `
            gifSection.insertAdjacentHTML('afterbegin', gifContainer)
        })
    }catch (err){
        console.log(err.message)
    }
}

searchBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    getGif()
})
window.addEventListener('load', getGif)
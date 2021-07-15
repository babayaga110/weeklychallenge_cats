const cats = [
    {
        name: 'Pumpkin',
        thumbnail: 'imgs/Pumpkin.jpeg'
    },
     {
        name: 'Snuggles',
        thumbnail: 'imgs/Snuggles.png'
        // credit: 'https://unsplash.com/photos/OzAeZPNsLXk'
    },
     {
        name: 'Cruella',
        thumbnail: 'imgs/Cruella.png',
        // credit: 'https://unsplash.com/photos/w2DsS-ZAP4U'
    }
]

const catBasketEl = document.getElementById("cat-basket")
for(const cat of cats){
    catBasketEl.innerHTML +=`<div class="profile">
                                <img class="pic" src="${cat.thumbnail}">
                                <p class="name">${cat.name}</p>
                            </div>`
}
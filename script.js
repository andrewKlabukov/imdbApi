// k_25zs118o Api key

let movie = document.querySelector('.img-movie');
let li = document.createElement('li');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let random = Math.round(Math.random()*100);
let random1 = Math.round(Math.random()*100);
let random2 = Math.round(Math.random()*100);
let random3 = Math.round(Math.random()*100);
let nameMovie = document.createElement('p');
let nameMovie1 = document.createElement('p');
let nameMovie2 = document.createElement('p');
let nameMovie3 = document.createElement('p');

forecast();

function forecast() {    
fetch (`https://imdb-api.com/ru/API/MostPopularTVs/k_25zs118o`)
    .then(function(resp){return resp.json()})
    .then(function(data){                
        console.log(data);

        li.innerHTML = `<img src=${data.items[random]['image']}>`
        li1.innerHTML = `<img src=${data.items[random1]['image']}>`
        li2.innerHTML = `<img src=${data.items[random2]['image']}>`
        li3.innerHTML = `<img src=${data.items[random3]['image']}>`
        
        movie.appendChild(li);       
        movie.appendChild(li1);       
        movie.appendChild(li2);       
        movie.appendChild(li3);
        
        nameMovie.innerHTML = `${data.items[random]['title']}<br>${data.items[random]['year']}`
        nameMovie1.innerHTML = `${data.items[random1]['title']}<br>${data.items[random1]['year']}`
        nameMovie2.innerHTML = `${data.items[random2]['title']}<br>${data.items[random2]['year']}`
        nameMovie3.innerHTML = `${data.items[random3]['title']}<br>${data.items[random3]['year']}`

        li.appendChild(nameMovie);
        li1.appendChild(nameMovie1);
        li2.appendChild(nameMovie2);
        li3.appendChild(nameMovie3);
    })

}

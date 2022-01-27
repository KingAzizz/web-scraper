const ul = document.getElementById('ul')

const getLatestNews = async () =>{
    const response = await axios.get('http://localhost:5000/result')

    const data = await response.data;
    data.forEach(arr =>{
      const card = document.createElement('li')
      card.innerHTML = `<a class="aTags" href="${arr.link}" target="_blank"> ${arr.title} </a>`
      card.classList.add('col')
      ul.append(card)
    })
   

  
 
}
getLatestNews()
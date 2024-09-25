let input = document.querySelector('input')
let btn = document.querySelector('button')
let movieContainer = document.getElementById('movie-container')
btn.addEventListener('click', () => {
    let searchText = input.value;
    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`).then((res) => res.json())
        .then((data) => {
            movieContainer.innerHTML = ''; // Clear previous results
            data.forEach(item => {
                let movieName = item.show.name;
                let movieElement = document.createElement('p');
                movieElement.textContent = movieName;
                movieContainer.appendChild(movieElement);

                    if (item.show.image) {  // Check if an image exists
                        let img = document.createElement('img');
                        img.src = item.show.image.medium;
                        img.style.width = '80px'; // Set image width
                        movieContainer.appendChild(img); // Add image to container
                    }
    
            });
        });
});
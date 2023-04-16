// Assignment 3 (The Movie Website)

(async function () {

    const responce = await fetch("./movies.json");
    const movies = await responce.json();

    const genre = document.getElementById("genre");
    const year = document.getElementById("year");
    const language = document.getElementById("language");
    const sBtn = document.getElementById("sBtn");
    const name = document.getElementById("title");
    const mlist = document.getElementById("mList");

    function vsitPage(url) {
        // open(url.homepage);
        vsitPage(url.homepage)
    }

    function displayResults(result) {
        mlist.innerHTML = "";
        result.forEach((elm) => {
            let li = document.createElement("li");
            let listElem = `
                <div>${elm.title}</div>`
            li.innerHTML = listElem;
            mlist.appendChild(li);
            li.addEventListener("click", vsitPage(result));
        });
    }
    
    
    
    function searchMovies() {
        let genreVal = genre.value;
        let yearVal = year.value;
        let lanVal = language.value;
        let nameVal = name.value;
        
        const results = movies.filter((elm)=>{
            let genres = elm.genres
            let i = 0
            return (
                genres[i].toLowerCase().includes(genreVal.toLowerCase()) && elm.release_date.toLowerCase().includes(yearVal) && elm.original_language.toLowerCase().includes(lanVal.toLowerCase()) && elm.title.toLowerCase().includes(nameVal.toLowerCase()));

        });
        displayResults(results);
    }


    sBtn.addEventListener("click", searchMovies);
})();






const promise = fetch('https://restcountries.com/v3.1/all');
promise.then((res) => res.json()).then((data) => console.log(data));

let countries = [];

function handleClick(e) {
    e.preventDefault();
    document.getElementById("search-text").value;
    console.log(document.getElementById("search-text").value);
    const country = document.getElementById("search-text").value;

    // save the data of the country
    const searchedCountry = document.getElementById(country.toLowerCase().replace(/\s/g, ''));
    console.log(searchedCountry);
    // remove all
    document.getElementById("countries").innerHTML = "";

    // paint the searched country
    document.getElementById("countries").appendChild(searchedCountry);


}

var button = document.getElementById('my-form');
button.addEventListener('submit', handleClick);



fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        countries = data;
        const countriesDiv = document.getElementById('countries');

        countries.forEach(country => {
            // Create a div element for each country
            const countryDiv = document.createElement('article');
            countryDiv.classList.add('country');
            countryDiv.setAttribute("id", country.name.common.toLowerCase().replace(/\s/g, ''));


            // Create an img element for the flag
            const flagImg = document.createElement('img');
            flagImg.src = country.flags.png;
            flagImg.alt = `${country.flags.alt} Flag`;
            flagImg.width = '150';
            flagImg.height = '100';
            flagImg.setAttribute("class", "flag");

            const coatOfArmsImg = document.createElement('img');
            coatOfArmsImg.src = country.coatOfArms.png||"./assets/funafuti.png";
            coatOfArmsImg.alt = `${country.name.common} coatOfArms`;
            coatOfArmsImg.width = '100';
            coatOfArmsImg.height = '100';
            coatOfArmsImg.setAttribute("class", "coat");

            // Create a div element for country name and flag
            const leftDiv = document.createElement('div');
            leftDiv.appendChild(flagImg);
            leftDiv.appendChild(coatOfArmsImg);

            // Create a link for the country
            const countryLink = document.createElement('a');
            countryLink.href = `./pages/${country.name.common.toLowerCase().replace(/\s/g, '')}.html`;
            countryLink.textContent = country.name.common;
            countryLink.classList.add('country-link');
            leftDiv.appendChild(countryLink);

            // Append left div to the country div
            countryDiv.appendChild(leftDiv);

            // Create a div element for other information
            const rightDiv = document.createElement('div');
            rightDiv.textContent = `Capital: ${country.capital}, Region: ${country.region}, Population: ${country.population}`;

            // Append right div to the country div
            countryDiv.appendChild(rightDiv);

            // Append the country div to the countries container
            countriesDiv.appendChild(countryDiv);

        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

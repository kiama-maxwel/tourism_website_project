const promise = fetch('https://restcountries.com/v3.1/all');
promise.then((res) => res.json()).then((data) => console.log(data));



function handleClick() {
    alert('Button clicked!');
}

var button = document.getElementById('search-button');

button.addEventListener('click', handleClick);

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        const countriesDiv = document.getElementById('countries');

        data.forEach(country => {
            // Create a div element for each country
            const countryDiv = document.createElement('div');
            countryDiv.classList.add('country');

            // Create an img element for the flag
            const flagImg = document.createElement('img');
            flagImg.src = country.flags.png;
            flagImg.alt = `${country.flags.alt} Flag`;
            flagImg.width = '150';
            flagImg.height = '100';

            const coatOfArmsImg = document.createElement('img');
            coatOfArmsImg.src = country.coatOfArms.png;
            coatOfArmsImg.alt = `${country.name.common} coatOfArms`;
            coatOfArmsImg.width = '100';
            coatOfArmsImg.height = '100';

            // Create a div element for country name and flag
            const leftDiv = document.createElement('div');
            leftDiv.appendChild(flagImg);
            leftDiv.appendChild(coatOfArmsImg);

            // Create a link for the country
            const countryLink = document.createElement('a');
            countryLink.href = `${country.name.common}.html`;
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

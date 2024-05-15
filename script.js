const promise = fetch('https://restcountries.com/v3.1/all');
promise.then((res) => res.json()).then((data) => console.log(data));



function handleClick() {
    alert('Button clicked!');
}

var button = document.getElementById('search-button');

button.addEventListener('click', handleClick);
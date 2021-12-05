//Solving problems using array functions on rest countries data
//a.Get all the countries from Asia continent /region using Filter function
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function () {

    if (xhr.status >= 200 && xhr.status < 300) {
        var t = JSON.parse(this.response);
        let ans = t.filter(asia => asia.region == "Asia").map(asia => asia.name)
        console.log(ans)

    } else {

        console.log("Data is not available");

    }
};

xhr.send();

//b. Get all the countries with a population of less than 2 lakhs using Filter function
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function () {

    if (xhr.status >= 200 && xhr.status < 300) {
        var t = JSON.parse(this.response);
        let ans = t.filter(data => data.population <= 200000).map(data => data.name)
        console.log(ans);

    } else {

        console.log("Data is not available");

    }
};

xhr.send();

//c.Get all the countries info using forEach function
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function () {

    if (xhr.status >= 200 && xhr.status < 300) {
        var t = JSON.parse(this.response);
        let ans = t.forEach(element => {
            console.log("countryname:" + element.name)
            console.log("countrycapital:" + element.capital)
            console.log("countryflag:" + element.flag)
        });

    } else {

        console.log("Data is not available");

    }
};

xhr.send();

//  D.Print the total population of countries using reduce function?
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function () {

    if (xhr.status >= 200 && xhr.status < 300) {
        var t = JSON.parse(this.response);
        let ans = t.filter((d) => {
            return d.population;
        }).map((d) => {
            return d.population;
        }).reduce((sum, d) => {
            return sum + d;
        })
        console.log(`TotalPopulation:${ans}`);
    } else {

        console.log("Data is not available");

    }
};

xhr.send();

//E.Print the country which uses US Dollars as currency.

let xhr = new XMLHttpRequest()

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

xhr.onload = function () {

    if (xhr.status >= 200 && xhr.status < 300) {
        var t = JSON.parse(this.response)
        let ans = t.filter((u) => {
            return u.currencies[0].code === "USD";
        });
        console.log(ans)

    }
}
xhr.send()
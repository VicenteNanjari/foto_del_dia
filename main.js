// how to call nasa API


// function getNasaData() {
//     const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
//     let request = new XMLHttpRequest();
//     request.open("GET", url);
//     request.onload = function() {
//         let data = JSON.parse(this.response);
//         if (request.status >= 200 && request.status < 400) {
//             console.log(data);
//             document.getElementById("nasa").innerHTML = `
//             <h1 class="titulo">${data.title}</h1>`;
//             document.getElementById("img").innerHTML = `
//             <img src="${data.url}" alt="" class="img"></img>`;
//             document.getElementById("explanation").innerHTML = `
//             <p class="explicacion">${data.explanation}</p>`;
//             document.getElementById("date").innerHTML = `
//             <footer class="fecha blockquote-footer">
//             ${data.date}
//             📷 ${data.copyright}
//             </footer>`;
//         } else {
//             console.log('error');
//         }
//     }
//     request.send();
// }

// getNasaData();

function getNasaData() {
    const url = "https://api.nasa.gov/planetary/apod?api_key=owwVvMUPMo7oblLLs8ljpjyenO7ozCquBK0jL7Fn";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("nasa").innerHTML = `
            <h1 class="titulo">${data.title}</h1>`;
            document.getElementById("img").innerHTML = `
            <img src="${data.url}" alt="" class="img"></img>`;
            document.getElementById("explanation").innerHTML = `
            <p class="explicacion">${data.explanation}</p>`;
            document.getElementById("date").innerHTML = `
            <footer class="fecha blockquote-footer">
            ${data.date}
            📷 ${data.copyright}
            </footer>`;
        })
        .catch(err => console.log(err));
}

getNasaData();

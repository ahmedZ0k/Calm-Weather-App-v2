let div = document.querySelector(".news");

const url = "https://climate-news-feed.p.rapidapi.com/page/1?limit=10";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "33cc0add5bmsh1d0541c168d4390p1051b4jsneed8aabe51e2",
    "X-RapidAPI-Host": "climate-news-feed.p.rapidapi.com",
  },
};
async function getNews() {
  let response = await fetch(url, options);
  let data = await response.json();
  console.log(data.articles);
  for (let i = 0; i < Object.keys(data.articles).length - 1; i++) {
    //Object.keys(data.articles).length
    let wrap = document.createElement("div");
    let link = document.createElement("a");
    let head = document.createElement("p");
    let text = document.createTextNode(data.articles[i].title);
    head.appendChild(text);
    link.appendChild(head);
    head.classList.add("newsHead");
    let image = document.createElement("img");
    image.setAttribute("src", data.articles[i].thumbnail);
    image.classList.add("newsImage");
    link.appendChild(image);
    link.setAttribute("href", data.articles[i].url);
    link.setAttribute("target", "_blank");
    wrap.classList.add("wrap");
    wrap.appendChild(link);
    div.append(wrap);
  }
}
getNews();
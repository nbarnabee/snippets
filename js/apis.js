//a basic fetch request

fetch(url)
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
  //and do whatever else you want to do with it here
})
.catch(err => {
    console.log(`error ${err}`)
});
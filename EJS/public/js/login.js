const submitbutton = document.querySelector("form")  //class  dot, id  hash #, element nothing
const username = document.getElementById("Username")
const password = document.getElementById("Password")

submitbutton.addEventListener('submit', (e)=> {
    e.preventDefault();
    fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    })
})


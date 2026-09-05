let body = document.body
let div = document.createElement("div")

div.style.height = "400px"
div.style.width = "400px"
div.style.backgroundColor = "pink"

div.innerHTML += `<h1> Welcome </h1>`
body.appendChild(div)

let table = document.createElement("table")

table.innerHTML += ` <table>
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Luca</td>
            <td>Rossi</td>
            <td>24</td>
        </tr>
        <tr>
            <td>Sophie</td>
            <td>Dubois</td>
            <td>32</td>
        </tr>
        <tr>
            <td>Sam</td>
            <td>Watson</td>
            <td>41</td>
        </tr>
    </table>`

    body.appendChild(table)
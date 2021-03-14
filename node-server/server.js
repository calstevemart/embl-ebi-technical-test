
const express = require('express')
const cors = require('cors');
const shell = require('shelljs')
const bodyParser = require('body-parser')

const app = express()
const port = 3000;

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json('hit terminal server')
})

app.post('/sanitise', (req, res) => {
    console.log(req.body);
    whitelist = [
        "./sanitise.sh",
        "ls",
        "cat",
        "echo"
    ]
    if (whitelist.includes(req.body.command.split("")[0])) {
        // Build command from flags
        command = `${req.body.command}`;
        if (req.body.flags.length > 0) {
            req.body.flags.forEach(flagObject => {
                command = command.concat(' ' + flagObject.flag + ' ' + flagObject.value)
            });
        }


        sanitiseCommand = shell.exec(req.body.command);
        // Oddly this hardcoded command works fine. Unclear as to why.
        // sanitiseCommand2 = shell.exec('./sanitise.sh -i "hello pal!!"' + ' -c c.txt')
        res.json(`${sanitiseCommand}`)
    } else {
        res.json('Illegal Command.')
    }
})



app.listen(port, function () {
    console.log(`CORS-enabled web server listening on port ${port}`)
})
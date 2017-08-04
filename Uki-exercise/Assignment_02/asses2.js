
// Loop through Array of Objects

var objPeople = [

    { // Object @ 0 index

        username: "shama",

        password: "shama123"

    },

    { // Object @ 1 index

        username: "shama1",

        password: "shama1123"

    },

    { // Object @ 2 index

        username: "shama2",

        password: "shama2123"

    },
    { // Object @ 3 index

        username: "shama3",

        password: "shama3123"

    },
    { // Object @ 4 index

        username: "shama4",

        password: "shama4123"

    }



]



function getInfo() {

    var username = document.getElementById('username').value

    var password = document.getElementById('password').value



    for(var i = 0; i < objPeople.length; i++) {

        // check is user input matches username and password of a current index of the objPeople array

        if(username == objPeople[i].username && password == objPeople[i].password) {

            window.alert(username + " is logged in!")

            // stop the function if this is found to be true

            return

        }

    }

    window.alert("Incorrect username or password")

}

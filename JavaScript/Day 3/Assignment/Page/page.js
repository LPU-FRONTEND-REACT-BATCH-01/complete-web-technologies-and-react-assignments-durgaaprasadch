let users = [
    {
        id:1,
        username:"durga",
        password:"durga!123"
    },
    {
         id:2,
        username:"jack",
        password:"jack!123"
    },
    {
         id:3,
        username:"romeo",
        password:"romeo!123"
    }

]

let userInput =
    {
        username:"romeo",
        password:"romeo!123"
    }

let results = users.some(ele =>ele.username === userInput.username)


if(results){
    if(users.find(ele=> ele.password === userInput.password))
    {
        console.log("Login Success")
    }
    else
    { 
        console.log("Incorrect password")
    }
    
}
else 
    console.log("User Not Found")
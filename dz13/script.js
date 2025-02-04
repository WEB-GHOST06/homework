
myInfo = {
    Dzhambulat : {
        age : 16 ,
        greeting(Name) {
            return `hello ${Name}`
        }
    }
}

console.log(myInfo.Dzhambulat.greeting(`Dzhambulat`))

users = [
    {
        name : 'Alex',
        age : 52,
        admin : false,
    },
    {
        name : 'Michail',
        age : 25,
        admin : true,
    },
    {
        name : 'Monah',
        age : 100,
        admin : false,
    },
    {
        name : 'ninety-nine',
        age : 99,
        admin : true,
    }
]


//dz2

let suckerWithoutAdmin = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].admin == false ) {
        suckerWithoutAdmin++
    }
}

console.log(suckerWithoutAdmin)
const name = "Hamza";
let age = 21;
var country = "France";
nb1 = 15;
nb2 = 2;
let i = 0;
console.log("Hello, My name is " + name + " and I am " + age + " years old. I live in " + country + ".");
console.log(nb1 + nb2);

if (age >= 18) 
{
    console.log("You are over 18.");
} else 
{
    console.log("You are under 18.");
}

while (i <= 5)
{
    console.log("count = " + i);
    i++;
}

for (;i <= 10; i++)
{
    console.log("count = " + i);
}
document.body.innerHTML += "<h3>What is this ?</h3>";
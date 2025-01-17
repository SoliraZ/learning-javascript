let age = 21;
let i = 0;
let nb1 = 10;
let nb2 = 5;

for (i = 0;i <= 3; i++)
{
    console.log("count = " + i);
}

function isAge(age)
{
    if (age >= 18) 
    {
        return("You are over 18.");
    } else 
    {
        return("You are under 18.");
    }
}
const add = (a, b) => a + b;

console.log("My age is " + age);
console.log(isAge(age));
console.log("Addition of " + nb1 + " and " + nb2 + " = " + add(nb1, nb2));
document.body.innerHTML += "<h3>What is this ?</h3>";
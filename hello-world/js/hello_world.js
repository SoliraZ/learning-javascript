let age = 21;
let i = 0;

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

console.log("My age is " + age);
console.log(isAge(age));

for (i = 0;i <= 3; i++)
{
    console.log("count = " + i);
}
document.body.innerHTML += "<h3>What is this ?</h3>";
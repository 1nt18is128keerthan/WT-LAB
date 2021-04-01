var greeter="hey hi";
var times=4;

if(times>3)
{
 var greeter="say hello";
 console.log(greeter);
}
console.log(greeter);

//title:var
//desc:for both the output it gives "say hello", VAR uses the last entered value
//author:Keerthan S
//Date:01-04-2021

let greeters="hey hi";
let time=4;

if(time>3)
{
 let greeters="say hello";
 console.log(greeters);
}
console.log(greeters);

//title:LET
//desc:let understands local and global variables
//author:Keerthan S
//Date:01-04-2021


const greeting={
    msg:"abc",
    number:2
}

greeting.msg="bcd"
console.log(greeting)

function add()
        {
            a=Number(document.getElementById("first").value)
            b=Number(document.getElementById("second").value)
            c=a+b;
            alert(" "+c);
        }

        let sum=()=>
        {
            c=Number(document.getElementById("rd").value)
            d=Number(document.getElementById("th").value)
          alert(c+d);
        }

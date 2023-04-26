
function fizzBuzz(n) 
{
  let str = "" ;
  for (let i = 1 ; i <= n ; i++)
  {
    str = i.toString() ;
    if (!(i % 5 && i % 3))
    {
       str = "" ;
       if (i % 3 == 0) { str += "Fizz" ; }
       if (i % 5 == 0) { str += "Buzz" ; }
    }
    console.log(str) ;
  }
}

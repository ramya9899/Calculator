function display(val)
{
   document.getElementById("result").value+=val;
    return val;
}
function clr()
{
   document.getElementById("result").value="";
}
function solve()
{
    var a=document.getElementById("result").value;
    var b=eval(a);
    document.getElementById("result").value=b;
    return b;
}
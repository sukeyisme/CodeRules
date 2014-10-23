function Foo()
{

}

//var foo = new Foo();
function foo(element, a, b)
{
	element.onclick = function(){a-- ,b--};
}
function Show()
{
	// return "{} instanceof Object:  "+({} instanceof Object)
	// +"<br/>foo instanceof Foo:  "+(foo instanceof Foo)
	// +"<br/>foo instanceof Object:  "+(foo instanceof Object)
	// +"<br/>foo instanceof Function:  "+(foo instanceof Function)
	// +"<br/>Foo instanceof Function:  "+(Foo instanceof Function)
	// +"<br/>Foo instanceof Object:  "+(Foo instanceof Object)
	// +"<br/>Object instanceof Function:  "+(Object instanceof Function)
	// +"<br/>Function instanceof Object:  "+(Function instanceof Object)
	// +"<br/>Function instanceof Function:  "+(Function instanceof Function);
	
}


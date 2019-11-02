function changeVal(x,y) {
var z=x;
x=y;
y=z;
var array=[x,y];
	return array;
}
console.log("changeVal(2,3):"+changeVal(2,3));

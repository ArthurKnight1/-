let john = {name:"john",surname:"Smith",id:"j"}
let pete = {name:"pete",surname:"Hunt",id:"p"}
let mary = {name:"mary",surname:"Key",id:"m"}
let users = [john,pete,mary];
let usersMapped = [];
for (i=0;i<users.length;i++){
	usersMapped[i]={
		fullName:users[i].name+""+users[i].surname,id:i+1
	}
}
console.log(usersMapped);
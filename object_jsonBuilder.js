a = "Rajesh";
console.log(a);
console.log(JSON.stringify(a));

jsonData = {};
jsonData.type = "HCP";
console.log(JSON.stringify(jsonData)); //  {"type":"HCP"}

var jsonDatas = [];
var jsonData = {};
jsonData.type = "HCP";
jsonDatas.push(jsonData);
console.log(JSON.stringify(jsonDatas));

var cars = ["Saab", "Volvo", "BMW"];
cars.push("ford");
console.log(cars[3]);

//Json builder
var payload = [];
var jsnObjReq = {};
jsnObjReq.type = "configuration/entityTypes/HCP";
jsnObjReq.attributes = {};
jsnObjReq.attributes.FirstName = fnAttrValues("Rajesh");
jsnObjReq.attributes.LastName = fnAttrValues("Mylsamy");
jsnObjReq.crosswalks = fnCwValues("DNB", "100");

payload.push(jsnObjReq);
console.log(JSON.stringify(payload));

function fnAttrValues(inpValue) {
	var attrValues = [];
	var attrValue = {};
	attrValue.value = inpValue;
	attrValues.push(attrValue);
	return attrValues;
}

function fnCwValues(inpValue, inptype) {
	var crosswalks = [];
	var crosswalk = {};
	crosswalk.type = inptype;
	crosswalk.value = inpValue;
	crosswalks.push(crosswalk);
	return crosswalks;
}

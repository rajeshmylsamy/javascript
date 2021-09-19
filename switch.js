var a = 1;

const fallthrough = () => {
	console.log("fallthrough");
};

const eatIt = () => {
	console.log("eat it");
};

const doNothing = () => {
	console.log("doNothing");
};

switch (a) {
	case 1: //
		fallthrough();
	case 2:
		eatIt();
		break;
	default:
		doNothing();
}

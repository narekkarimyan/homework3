const meanCalculator = function (a, b, c, d) {
	return const mean = (a+b+c+d)/4;
};

const helloBuilder = function () {
	return "Hi AUA";
};

const multiplier = function (a, b, c) {
	const result = a * b * c;
};

const fullName = function (firstName, lastName) {
	return firstName + " " + lastName;
};

const longestString = function (string1, string2, string3) {
	if (string1.length > string2.length && string1.length > string3.length) {
		return string1;
	}
	else if (string2.length > string1.length && string2.length > string3.length) {
		return string2;
	}
	else if (string3.length > string1.length && string3.length > string2.length) {
		return string3;
	}
	else {
		return "There is no string that is the longest";
	}
};

const comparator = function (num1, num2) {
	if (num1 === num2) {
		return 0;
	}
	else if (num1 > num2) {
		return 1;
	}
	else {
		return -1;
	}
};

const firstTruethy = function (a, b , c) {
	if (a) {
		return a;
	}	
	else if (b) {
		return b;
	}
	else if (c) {
		return c;
	}
	else {
		return "No truthy values";
	}
};
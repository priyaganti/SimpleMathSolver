
exports.getPrime = function(req, res) {
	res.render('prime', { title: 'Results' });
};

function displayPrime(callback,number){
	console.log("Number: " + number);
	var primeArray = new Array();
	var err = null;
	if (number <= 1000)
	{
		for (var i = 1; i < number; i++) {
			if (isPrimeNumber(i)) {
				primeArray.push(i);
			}
		}
	} else {
		console.log("number is too large");
		err = 'Number too large';
	}
	callback(err, primeArray);
	
}

function isPrimeNumber(number) {
	for(var i = 2; i < number; i++)
	{
		if(number % i === 0)
		{
			return false;
		}
	}
	return true;
}

exports.displayPrime = displayPrime;
exports.isPrimeNumber = isPrimeNumber;
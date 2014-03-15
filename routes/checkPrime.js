exports.checkifPrime = function(req, res) {
	res.render('prime', { title: 'Results' });
};

function checkifPrime(callback,number){
	console.log("Number: " + number);
	var err = null;
	var ifPrime = true;
	if (number <= 1000)
	{
		for(var i = 2; i < number; i++)
		{
			if(number % i === 0)
			{
				ifPrime = false;
				//return ifPrime;
			}
		}
		//return ifPrime;
	} else {
		console.log("Number is too large");
		err = 'Number too large';
	}
	callback(err,ifPrime);
}


exports.checkifPrime = checkifPrime;



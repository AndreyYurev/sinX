let buttonInput = document.querySelector('.button--input');
let buttonStart = document.querySelector('.button--start');
let rowArgument = document.querySelector('.row--argument');
let rowSin = document.querySelector('.row--sin');
let arg = 0;
let argAmount;
let sin = Math.sin(arg);
let sinRounded = sin.toFixed(2);
let argRowMin;
let argRowMax;
let argRowLength;
let numberOfSegments;
let numberOfDots;
let rad;


// перевод градусов в радианы
function getSinDeg(arg) {
	rad = arg * Math.PI / 180;
	return Math.sin(rad);
};



buttonInput.onclick = function () {
	//считаем значения ряда аргументов
	argRowMin = +prompt('Введите нижнюю границу ряда аргументов, град');
	argRowMax = +prompt('Введите верхнюю границу ряда аргументов, град');
	argRowLength = argRowMax - argRowMin;

	//спрашиваем n рассчитываемых точек (n отрезков + 1)
	numberOfDots = +prompt('Введите целое число n, равное количеству отрезков ряда аргументов');
	numberOfSegments = numberOfDots - 1;
	//промежуточные значения аргументов
	argAmount = argRowLength / numberOfDots;

	rowArgument.innerHTML = "<div>" + arg + "</div>";
	rowSin.innerHTML += "<div>" + getSinDeg(arg).toFixed(4) + "</div>";
	for (let i = 1; i <= numberOfDots; i++) {

		arg += argAmount;
		rowArgument.innerHTML += "<div>" + arg + "</div>";
		rowSin.innerHTML += "<div>" + getSinDeg(arg).toFixed(4) + "</div>";
		console.log(arg);

	}
};



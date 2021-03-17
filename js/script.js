//=============== Объявление переменных =====================
let buttonInput = document.querySelector('.button--input');
let buttonStart = document.querySelector('.button--start');
let rowArgument = document.querySelector('.row--argument');
let rowSin = document.querySelector('.row--sin');
let argLength;
let argRowMin;
let argRowMinSin;
let argRowMax;
let argRowLength;
let numberOfSegments;
let rad;
// очистка таблицы
let clearTable = function () {
	rowArgument.innerHTML = "";
	rowSin.innerHTML = "";
}
// перевод вводимых градусов в радианы
function getSinDeg(argDeg) {
	rad = argDeg * Math.PI / 180;
	return Math.sin(rad);
};


//===========================================================

// заполнение аргументов
buttonInput.onclick = function () {
	//очистка таблицы при повторном вводе
	clearTable();
	//ввод крайних границ ряда аргументов
	argRowMin = +prompt('Введите нижнюю границу ряда аргументов, град');
	argRowMinSin = argRowMin;
	argRowMax = +prompt('Введите верхнюю границу ряда аргументов, град');
	//ввод n рассчитываемых отрезков
	numberOfSegments = +prompt('Введите целое число n, равное количеству отрезков ряда аргументов');
	// считаем длину ряда аргументов
	argRowLength = argRowMax - argRowMin;
	// длина одного отрезка
	argLength = argRowLength / numberOfSegments;
	// первое значение ряда аргументов
	rowArgument.innerHTML = "<div>&nbsp;&nbsp;" + argRowMin + "</div>";
	// остальные значения
	for (let i = 1; i <= numberOfSegments; i++) {
		// при запуске цикла пройдёт numberOfSegments кол-во операций
		// прибавление длины одного отрезка к предыдущему значению, добавление блока div с этим значением аргумента
		argRowMin += argLength;
		rowArgument.innerHTML += "<div>&nbsp;&nbsp;" + argRowMin + "</div>";
	}
	console.log(argRowMinSin);
};

// расчёт sin(x)
buttonStart.onclick = function () {
	// первое значение ряда sin(x)
	rowSin.innerHTML = "<div>&nbsp;&nbsp;" + getSinDeg(argRowMinSin).toFixed(4) + "</div>";
	// остальные значения
	for (let i = 1; i <= numberOfSegments; i++) {
		// при запуске цикла пройдёт numberOfSegments кол-во операций
		// прибавление длины одного отрезка к предыдущему значению, добавление блока div с этим значением sin(x)
		argRowMinSin += argLength;
		rowSin.innerHTML += "<div>&nbsp;&nbsp;" + getSinDeg(argRowMinSin).toFixed(4) + "</div>";
	}
}


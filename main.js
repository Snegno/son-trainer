
let oneNumber = 2;
let twoNumber = 0;
let twoNumberNew = 0;
let answer = '';
let answerText = '';
let count = 0;
let countRight = 0;

let oneNumberInput = document.querySelector('.oneNumber');
let twoNumberInput = document.querySelector('.calc__twoNumber');
let select_all = document.querySelectorAll('.twoNumber');
let enter = document.querySelector('.enter');

//console.log('start')

twoNumberInput.setAttribute('value', twoNumberNew);

for(let i=0; i<select_all.length; i++) {
	select_all[i].onclick = function(e) {
		oneNumber = e.target.outerText;
		//oneNumber == 2 || 3? oneNumber = 4 : false;
		//console.log(e)
		oneNumberInput.setAttribute('value', oneNumber);
		//console.log(oneNumber);
		twoNumber = 0;
		twoNumberNew = 0;
		twoNumberInput.value = 0;
	}
}

let answerInput = document.querySelector('.answer');
let answerText_output = document.querySelector('.maincraft__answer');
let resultFail = document.querySelector('.result');
let resultRight = document.querySelector('.right_res')
//answer = answerInput;
////console.log(`answerInput = ${answerInput}`)

function calc() {
	answer = answerInput.value;
	answerText = '';
	let temp = 0;
	let li = '';
	temp = oneNumber * twoNumberNew;
	let list = document.querySelector('.list');
	let listRight = document.querySelector('.list_right');
	let pic = document.querySelector('.pic');

	if(answer == '') {
		return alert('Ты не указал ответ!');
	};

	if (answer == temp) {
		answerInput.value = '';
		countRight++;
		answerText = 'Молодец! Это правильный ответ!';
		answerText_output.innerHTML = answerText;
		//меняем картинку
		if(countRight < 100) {
			pic.setAttribute('src', `img/${countRight+1}.png`)
		}
		//вставляем ли с правильным ответом
		li = document.createElement('li');
		li.innerText = `${oneNumber} x ${twoNumberNew}`;
		listRight.appendChild(li);

		twoNumber = Math.round(Math.random()*10);

		if(twoNumberNew == twoNumber) {
			//console.log('был повтор' + `Старое значение = ${twoNumber}`)
			twoNumber = Math.round(Math.random()*10);
			//console.log(`Новое = ${twoNumber}`)
		}
		
		twoNumberNew = twoNumber;
		twoNumberInput.value = twoNumberNew;
		
	}
	else {
		answerText = `Ответ не верный! ${oneNumber} x ${twoNumberNew} = ${temp}`;
		answerText_output.innerHTML = answerText;
		answerInput.value = '';
		count++;
		//вставляем ли с неправильным
		li = document.createElement('li');
		li.innerText = `${oneNumber} x ${twoNumberNew} = ${answer}`;
		list.appendChild(li);
	}
	answer = '';
	resultRight.innerHTML = `Правильных ответов: ${countRight}`;
	resultFail.innerHTML = `Ошибки: ${count}`;
};

enter.onclick = calc;
document.addEventListener('keyup', function(e){
	if(e.code == 'Enter' || e.code == 'NumpadEnter') {
		calc();
	}
	console.log(e);
});


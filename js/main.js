 function RuEnWeekArr() {
	lan = prompt('Введите язык:');
	
	var arr = {
		'ru':['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
		'en':['Mn','Ts','Wd','Th','Fr','St','Sn']
	};
	alert(arr[lan]);
}

function confirr() {
	result = confirm('Вы студент?');
	
	if (result == true){
		alert('Поздравляем, у нас есть для вас хорошое предложение!');
	}else{
		alert('Извините, ничем помочь не можем');
	}
}

function PrintInt(){
	
	var col = prompt('Сколько чисел вывести?');
	var col = Number(col);
	var i = 1;
	while (i <= col){
		elem.innerHTML =i + '<br>';
		i++;
		 
	}
}


function ForFun(){
	x = prompt('Сколько чисел вам вывести?')
	var i;
	for (i=0; i < x;i++){
		document.write(x[i] + '<br>');
	};
}


function arrRevers(){
	arr=[1,2,3,4,5,6,7,8,9,10];
	alert(arr);
	alert(arr.reverse());
};

function arrAdd(){
	arr = [1,2,3,4,5];
	alert(arr);
	arr.push(6,7,8,9,10);
	alert(arr);
	arr = [1,2,3,4,5];
	lert(arr);
	arr.unshift(6,7,8,9,10);
	alert(arr);
	
	
	
}

function arrSlice(){
	arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	alert(arr);
	result = arr.slice(0,5);
	alert(result);
}

function arrSort(){
	arr = ["я","ц","у","к","н"];
	alert(arr);
	alert(arr.sort());
	
	
}

function strSplit(){
	x = prompt('Введите 3 слова через пробел');
	arr = x.split(' ');
	alert(arr);
	y = prompt('Какое по счету слово вывести?');
	alert(arr[y]);
}

$(function() {
	$('.scrollup').click(function() {
		$("html, body").animate({
			scrollTop:0
		},1000);
	})
})
$(window).scroll(function() {
	if ($(this).scrollTop()>200) {
		$('.scrollup').fadeIn();
	}
	else {
		$('.scrollup').fadeOut();
	}
});



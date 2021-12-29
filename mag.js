var mag = document.getElementById('mag');
var box2 = document.getElementById('box2');
var box3 = document.getElementsByClassName('box3')[0];
var box4 = document.getElementsByClassName('box4')[0];
function magnifier(index){
	var opWidth = box2.getBoundingClientRect().width;
	var opHeight = box2.getBoundingClientRect().height;
	box3.style.width = opWidth / index + 'px';
	box3.style.height = opHeight / index + 'px';
	mag.style.height = opHeight * index + 'px';
	mag.style.width = opWidth * index + 'px';
	box2.addEventListener('mouseenter', function(){
		box3.className += ' disblcok';
		box4.className += ' disblcok';
		box3.classList.remove('disnone');
		box4.classList.remove('disnone');
	}, false)
	box2.addEventListener('mouseleave', function(){
		box3.className += ' disnone';
		box4.className += ' disnone';
		box3.classList.remove('disblcok');
		box4.classList.remove('disblcok');
	}, false)
	box2.addEventListener('mousemove', function(e){
		var X = box3.offsetWidth;
		var Y = box3.offsetHeight;
		var x = e.clientX - box2.getBoundingClientRect().left - X / 2;
		var y = e.clientY - box2.getBoundingClientRect().top - Y / 2;
		// var x = e.offsetX - box3.offsetWidth / index;
		// var y = e.offsetY - box3.offsetHeight / index;
		// console.log(e);
		// 触发事件对象会变为box3 . index大于2时，放大镜中鼠标位置不是居中
		// console.log(x,y);
		if (x < 0) {
			x = 0;
		}else if (x > opWidth - X) {
			x = opWidth - X;
		}
		if (y < 0) {
			y = 0;
		}else if (y > opHeight - Y) {
			y = opHeight - Y;
		}
		box3.style.left = x + 'px';
		box3.style.top = y + 'px';
		mag.style.left = -x * index + 'px';
		mag.style.top = -y * index + 'px';
	}, false)
}
magnifier(3);

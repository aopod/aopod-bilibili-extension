(function() {
	// 添加我的关注
	var top_ul = document.body.querySelector('.z_top .z_top_nav ul');
	var my_follow = document.createElement('li');
	my_follow.setAttribute('class', 'aopod_my_follow');
	my_follow.innerHTML = '<a class="i-link" href="//space.bilibili.com/#!/fans/follow">我的关注</a>';
	top_ul.appendChild(my_follow);
})();
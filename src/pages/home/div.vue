<template>
	<div>
		<div class="mp-listitem-con">
			<ul>
				<li class="mp-listentrance-item">
					<span class="mp-border"></span>
					<span class="mp-iconfont iconfont">&#xe611;</span> 定位失败
				</li>
				<li class="mp-listentrance-item">
					<span class="mp-iconfont iconfont">&#xe62e;</span> 5折泡温泉
				</li>
			</ul>
		</div>
		<div class="mp-activity-con">
			<ul>
				<li class="mp-activity-item">
					<span class="mp-border"></span>
					<a class="mp-fulllink" href="#">
						<img src="http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png" />
					</a>
				</li>
				<li class="mp-activity-item">
					<a class="mp-fulllink" href="#">
						<img src="http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png" />
					</a>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'div'
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.mp-listitem-con ul {
		width: 100%;
		overflow: hidden;
	}
	
	.mp-listentrance-item {
		float: left;
		width: 50%;
		height: .98rem;
		font-size: .28rem;
		color: #212121;
		line-height: .98rem;
		text-align: center;
		position: relative;
	}
	
	.mp-border {
		width: 1px;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		border-right: 1px solid #e0e0e0;
	}
	
	.mp-iconfont {
		margin-right: .05rem;
		color: #616161;
		font-size: .32rem;
	}
	
	.mp-activity-con {
		background-color: #00B7FF;
		width: 100%;
		margin-top: .2rem;
	}
	
	.mp-activity-con ul{
		overflow: hidden;
	}
	.mp-activity-item {
		position: relative;
		width: 50%;
		height: 1.4rem;
		line-height: 1.4rem;
		color: #212121;
		font-size: .28rem;
		float: left;
		background: #00B7FF;
	}
	
	.mp-fulllink {
		width: 100%;
		height: 100%;
		text-align: center;
		display: block;
	}
	
	.mp-fulllink img {
		width: 80%;
		height: 100%;
	}
</style>
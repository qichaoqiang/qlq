<template>
	<div class="mp-view-box">
		<div class="mp-hide" v-if="show1 || show2" @click="show1 = show2 = false"></div>
		<div class="mp-select-box">
			<div class="mp-select" @click="mpShow1">
				<span class="mp-select-caption">
					全部分类
				</span>
			</div>
			<div class="mp-select" @click="mpShow2">
				<span class="mp-select-caption">
					推荐排序
				</span>
			</div>
			
		</div>
		<div class="mp-select-all" v-if="show1">
			<div class="mp-select-list" scrolling="no">
				<ul class="mp-select-inner">
					<li class="mp-view-select">
						<span class="mp-view-menu">全部分类</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">运动健身</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">文化古迹</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">农家度假</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">演出</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">游乐场</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">自然风光</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">公园</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">展馆</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">温泉</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">户外拓展</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">室内娱乐</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">城市观光</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">体验馆</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">餐饮</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">水上玩乐</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">手工</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">植物园</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">出行必备</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">游船</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">交通</span>
					</li>
					<li class="mp-view-select">
						<span class="mp-view-menu">海洋馆</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="mp-select-commend" v-if="show2">
			<ul class="mp-commend-list">
				<li class="mp-commend-select">
					<span class="mp-commend-menu">推荐排序</span>
				</li>
				<li class="mp-commend-select">
					<span class="mp-commend-menu">离我最近</span>
				</li>
				<li class="mp-commend-select">
					<span class="mp-commend-menu">人气最高</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	export default {
		data: function() {
			return {
				show1: false,
				show2: false
			}
		},
		methods: {
			mpShow1: function() {
				this.show1 = true;
				this.show2 = false;
			},
			mpShow2: function() {
				this.show1 = false;
				this.show2 = true;
			}
		}
	}
	
</script>

<style>
	.mp-hide {
		position: absolute;
		top: .88rem;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, .3);
	}
	.mp-select-box {
		position: relative;
		background-color: #fff;
		width: 100%;
		background: #fff;
		overflow: hidden;
	}
	.mp-select {
		display: block;
		width: 50%;
		height: .8rem;
		overflow: hidden;
		position: relative;
		color: #212121;
		line-height: .8rem;
		text-align: center;
		white-space: nowrap;
		text-overflow: ellipsis;
		box-sizing: border-box;
		float: left;
	}
	.mp-select-caption {
		position: relative;
	}
	.mp-select-caption::after {
		content: "";
		position: absolute;
		right: -.25rem;
		top: .18rem;
		width: 0;
		height: 0;
		margin-top: -.04rem;
		border-left: .08rem solid transparent;
		border-right: .08rem solid transparent;
		border-top: .08rem solid #666;
	}
	.mp-select-all {
		position: absolute;
		/*top: 1rem;*/
		width: 100%;
		background: #f7f7f7;
		overflow: hidden;
		z-index: 3;
	}
	.mp-select-list {
		width: 50%;
		background: #fff;
		overflow: hidden;
	}
	.mp-select-list{
		overflow: auto;
	}
	.mp-select-inner {
		width: 100%;
		height: 4.8rem;
	}
	.mp-view-select {
		width: 100%;
		line-height: .8rem;
		overflow: hidden;
		text-indent: 1.2rem;
	}
	.mp-select-commend {
		position: absolute;
		/*top:0;*/
		width: 100%;
		background: #fff;
		z-index: 3;
		overflow: hidden;
	}
	.mp-commend-list {
		width:100%;
		background: #fff;
	}
	.mp-commend-select {
		width: 100%;
		line-height: .8rem;
		text-align: center;
	}
</style>

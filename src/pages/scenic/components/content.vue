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
					<li class="mp-view-select" ref="listScroll" v-for="item in allKindInfo" :key="item.id">
						<span class="mp-view-menu">{{item.kind}}</span>
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
				show2: false,
				flag: false,
				loading: false
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
		},
		computed: {
			allKindInfo() {
				return this.$store.state.view.allKindInfo;
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
		border-bottom: .02rem #eee solid;
		box-sizing: border-box;
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

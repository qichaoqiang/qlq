<template>
		<div class="mp-baseinfo" >
			<div class="mp-baseinfo-adress" v-for="item in baseInfo" :key="item.id">
				<p class="mp-baseinfo-adress-text mp-baseinfo-adress-text-border">
					<span class="mp-baseinfo-adress-icon iconfont">&#xe611;</span>
					{{item.location}}
					<span class="mp-baseinfo-adress-arrow iconfont">&#xe600;</span>
				</p>
			</div>
			<div class="mp-baseinfo-adress" v-for="item in openInfo" :key="item.id">
				<p class="mp-baseinfo-adress-text">
					<span class="mp-baseinfo-adress-pic iconfont">&#xe625;</span>
					{{item.time}}
					<span class="mp-baseinfo-adress-arrow iconfont">&#xe600;</span>
				</p>
			</div>
		</div>
</template>

<script>
	export default {
		computed:{
			baseInfo(){
				return this.$store.state.mplist.baseInfo;
			},
			openInfo(){
				return this.$store.state.mplist.openInfo;
			}
		}
	}
</script>

<style>
.mp-baseinfo {
		position: relative;
		top: .2rem;
		padding: .1rem .2rem 0 .2rem;
		margin-bottom: .1rem;
		background: #fff;
		border-radius: .1rem .1rem 0 0;
		top: -.1rem;
	}
	
	.mp-baseinfo-adress {
		position: relative;
		height: .88rem;
		line-height: .88rem;
	}
	
	.mp-baseinfo-adress-text {
		overflow: hidden;
		overflow: hidden;
		padding-right: .56rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.mp-baseinfo-adress-icon{
		font-size:.16rem;
		color:#9e9e9e;
		padding-right:.2rem;
		padding-left:.1rem;
	}
	.mp-baseinfo-adress-arrow{
		    position: absolute;
    right: 0;
    color: #b9b9b9;
}
.mp-baseinfo-adress-pic{
	font-size:.4rem;
	color:#9e9e9e;
	padding-right:.1rem;
}
.mp-baseinfo-adress-text-border{
	border-bottom:1px solid #f7f7f7;
}
</style>
<template>
	<div class="mp-commentsinfo-con">
		<span class="mp-comment-icon"></span>
		<span class="mpf-starlevel">
		<i class="iconfont icon-star-active"></i><i class="iconfont icon-star-active"></i><i class="iconfont icon-star-active"></i><i class="iconfont icon-star-active"></i><i class="iconfont icon-star-active"></i>
		</span>
		<span class="mp-comments-tagscore">5.0分</span>
		<a class="mp-comments-total">
			<span class="mp-comments-totalnum" v-for="item in evaluateInfo">{{item.pj}}
			<span class="iconfont">&#xe600;</span>
			</span>
		</a>
		<div class="mp-announce-con">
			<div class="mp-announce-inner" v-for="item in commentsInfo" :key="item.id">
				<span class="mp-announce-icon iconfont">&#xe616;</span>
				{{item.content}}
				<span class="mp-announce-closeicon iconfont">&#xe600;</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed:{
			commentsInfo(){
			return this.$store.state.mplist.commentsInfo
			},
			evaluateInfo(){
			return this.$store.state.mplist.evaluateInfo	
			}
		}
	}
</script>

<style>
	.mp-commentsinfo-con {
		height: .8rem;
		line-height: .8rem;
		background: #fff;
		margin-top: .1rem;
	}
	
	.mp-comment-icon {
		position: relative;
		top: .05rem;
		display: inline-block;
		width: .36rem;
		height: .36rem;
		background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -1.35rem no-repeat;
		margin-left: .2rem;
		margin-right: .1rem;
		background-size: .4rem 3rem;
	}
	
	.mpf-starlevel {
		display: inline-block;
		position: relative;
		width: 1.4rem;
		height: .28rem;
		color: #00bcd4;
		font-size: .5rem;
	}
	
	.mp-comments-tagscore {
		display: inline-block;
		margin-left: .13rem;
		color: #00afc7;
	}
	
	.mp-comments-total {
		float: right;
		display: block;
		margin-bottom: .2rem;
	}
	.mp-comments-totalnum {
		display: inline-block;
		line-height: .28rem;
		font-size: .28rem;
		margin-left: .16rem;
		margin-right: .2rem;
		color: #9e9e9e;
	}
	.mp-announce-con {
    background-color: #fdeede;
    color: #f1441a;
    margin-bottom: .2rem;
    height: .88rem;
    line-height: .88rem;
    padding-left: .23rem;
    margin-top:.1rem;
}
	.mp-announce-inner {
		padding-right: .6rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.mp-announce-closeicon {
    right: .2rem;
    position: absolute;
    color: #c7bcaf;
}

</style>
<template>
	<div class="nav-boss" ref="mpheader">
		<div class="nav-wrapper" ref="wrapper">
			<div class="nav-scroller">
				<ul>
					<li>八达岭长城</li>
					<li>谷水北镇</li>
					<li>故宫</li>
					<li>鸟巢</li>
					<li>诸葛孔明</li>
					<li>司马懿</li>
					<li>吕布奉先</li>
				</ul>
			</div>
		</div>
		<div class="nav-la">
			<div id="nav-la-biao" class="iconfont" v-on:click="show=!show">
				&#xe6a6;
			</div>
		</div>
		<div id="nav-la-li" v-if="show">
			<ul>
				<li>故宫</li>
				<li>鸟巢</li>
				<li>诸葛孔明</li>
				<li>司马懿</li>
				<li>吕布奉先</li>
				<li>八达岭长城</li>
				<li>谷水北镇</li>
				<li>故宫</li>
				<li>鸟巢</li>
				<li>诸葛孔明</li>
				<li>司马懿</li>
				<li>吕布奉先</li>
				<li>八达岭长城</li>
				<li>谷水北镇</li>
				<li>故宫</li>
				<li>鸟巢</li>
				<li>诸葛孔明</li>
				<li>司马懿</li>
				<li>吕布奉先</li>
				<li>八达岭长城</li>
				<li>谷水北镇</li>
				<li>故宫</li>
				<li>鸟巢</li>
				<li>诸葛孔明</li>
				<li>司马懿</li>
				<li>吕布奉先</li>
			</ul>
		</div>
	</div>
</template>

<script>
	require('../../iscroll/iscroll-probe.js')
	require('../../iscroll/demoUtils.js')
	import Bus from './bus.js';
	var myScroll;
	export default {
		data(){
			return{
				show:false
			}
		},
		methods: {
		  	navScroll(){
    			myScroll = new IScroll(this.$refs.wrapper, { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false });
    		}
		},
		mounted () {
		  	this.navScroll();
		},
		created() {
			  Bus.$on('change', function(){
			  	alert("123")
			  });
		}
	}

</script>

<style scoped>
	.nav-boss{
		display: block;
		height:.8rem;
		position: relative;
	}
	.nav-wrapper{
		height:100%;
		background:#CACACA;
		width:88%;
		overflow: hidden;
		position: relative;
		float: left;
	}
	.nav-scroller{
		position: absolute;
		width:10rem;
		height:.78rem;
		transform: translateZ(0);
	}
	.nav-scroller ul{
		width:100%;
	}
	.nav-scroller li,#nav-la-li li{
		padding:.13rem;
		margin-top:.13rem;
		margin-left:.15rem;
		background:#FAFAFA;
		float: left;
		text-align: center;
	}
	.nav-la{
		height:.8rem;
		width:12%;
		background: #CACACA;
		float: left;
	}
	#nav-la-biao{
		line-height: .8rem;
		text-align: center;
		color: #FFFFFF;
		font-size: .6rem;
	}
	#nav-la-li{
		background: #CACACA;
		width:100%;
		padding-bottom: .3rem;
		padding-top: .1rem;
		position: absolute;
		top:.8rem;
		z-index:5;
	}
</style>
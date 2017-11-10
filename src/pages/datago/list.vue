<template>
	<div>
		<div id="list-wrapper" ref="wrapperlist">
			<div id="list-content">
				<ul>
					<li v-for="item in list">
						<a>
							<div id="list-left">
								<img :src="item.src" alt="找不到资源" />
								<span>可订明日</span>
							</div>
							<div id="list-right">
								<h4>{{item.title}}</h4>
								<div id="list-right-div">
									<span id="list-div-span">北京出发</span>
									<span>无自费</span>
									<span>无购物</span>
								</div>
								<div class="list-right-pic">
									<div>
										<span id="list-pic-span">{{item.pic}}</span>
										<span>起</span>
									</div>
								</div>
								<div id="list-right-num">
									已售	{{item.num}}
								</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div id="list-mark" v-if="show">
			<ul>
				<li>
					<span class="iconfont">&#xe696;</span>
					<span @click="handleClick">全部分类</span>
				</li>
				<li>
					<span class="iconfont">&#xe6f1;</span>
					<span>筛选</span>
				</li>
				<li>
					<span class="iconfont">&#xe601;</span>
					<span>排序</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	require('../../iscroll/iscroll-probe.js')
	require('../../iscroll/demoUtils.js')
	import Bus from './bus.js';
	export default {
		data () {
			return {
			    show: true
			};
		},
		methods: {
			handleClick(){
				 Bus.$emit('change'); 
			}
		},
		mounted () {
			console.log(this.$refs.wrapperlist)
		  	this.$refs.wrapperlist.addEventListener('scroll', this.handleScroll);
		  	this.myScroll = new IScroll('#list-wrapper', { probeType: 3,mouseWheel: true });
	    	this.myScroll.on("scroll", () => {
	    		 if(this.myScroll.y<0){
	    		 	this.show = false;
	    		 }else{
	    		 	this.show = true;
	    		 }
	    		//console.log(-this.list.length * 100);
//	    		if (this.myScroll.y > 50) {
//	    			this.showLoading = true;
//	    			this.$store.commit("refreshInfo");
//	    		}	
	    	})
		},
		computed : {
			list(){
				return this.$store.state.datago.datagoInfo	
			}
		},
	    updated(){
	    	setTimeout(() => { 
	    		this.showLoading = false;
	    		this.myScroll.refresh();
	    	}, 500)
	    }
	}

</script>

<style>
	#list-wrapper{
		overflow: hidden;
		height:11.6rem;
	}
	#list-content a{
		height:2rem;
		display: block;
	}
	#list-left,#list-right{
		float: left;
	}
	#list-left{
		position: relative;
	}
	#list-left img{
		height:1.6rem;
		width:1.6rem;
		margin:.2rem;
		display: inline-block;
	}
	#list-left span{
		position: absolute;
		color: #ffffff;
		top:.14rem;
		left:.1rem;
		font-size: 12px;
		background:#0086B3;
		width:1.1rem;
		text-align: center;
		line-height: .3rem;
		height:13px;
	}
	#list-left span::after{
		content: "";
	    position: absolute;
	    top: 0;
	    right: -.1rem;
	    width: 0;
	    height: 0;
	    border-top: .14rem solid #0086B3;
	    border-bottom: .14rem solid #0086B3;
	    border-right: .1rem solid transparent;
	}
	#list-right{
		border-bottom: .001rem solid #CACACA;
		width:5.4rem;
		padding-bottom: .2rem;
	}
	#list-right h4{
		color: #000000;
		line-height: 16px;
		margin-top:.2rem;
		height:32px;
		width:100%;
		overflow: hidden;
	}
	#list-right-div{
		font-size: .24rem;
		color: #000000;
		margin-right: .4rem;
		margin-top:.1rem;
		overflow: hidden;
	}
	#list-right-div span{
		width:58px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		display: block;
		float: left;
	}
	#list-div-span{
		color: #00BCD4;
		font-size: .26rem;
		margin-left: .1rem;
	}
	#list-div-span::after{
		content: "";
		width: 0;
		height: 0;
		border: .01rem solid #000000;
		margin-left: .1rem;
	}
	.list-right-pic{
		overflow: hidden;
		line-height: .3rem;
	}
	.list-right-pic div{
		float: right;
		
	}
	.list-right-pic span{
		float: left;
		display: block;
		font-size: .2rem;
		color: #000000;
		margin-left: .08rem;
	}
	#list-pic-span{
		color: #ff8300;
		font-size:0.3rem;
		font-weight: 600;
	}
	#list-right-num{
		font-size:0.3rem;
		color: #777777;
	}
	#list-mark{
		position: fixed;
		height: 0.9rem;
		width: 100%;
		bottom: 0;
		background:rgba(0,0,0,.9);
		color: #FFFFFF;
	}
	#list-mark li{
		float: left;
		width: 33%;
		text-align: center;
		line-height: .45rem;
	}
	#list-mark li span{
		display: block;
	}
</style>
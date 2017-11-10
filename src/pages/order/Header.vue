<template>
	<div class="body">
		<div class="mp-header">
			<a class="mp-header-left iconfont">&#xe624;</a>
			<div class="mp-header-title">
				<h1 class="mp-linkera">
 					订单填写
 				</h1>
			</div>
			<div class="mp-header-right" >
				<a class="mp-address" >登录</a>

			</div>

		</div>
		<div class="mp-info-outer">
			<div class="mp-info-left">
				<h2 class="mp-info-title">
 					【上午场】故宫成人票凭身份证入园
 				</h2>
				<ul class="mp-info-taglist">
					<li class="mp-info-tagitem">
						<img src="https://img1.qunarzz.com/piao/fusion/1703/ac/1c9b308337e3f902.png" class="mp-info-tagicon" /> 2017-11-11
					</li>
					<li class="mp-info-tagitem">
						<img src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png" class="mp-info-tagicon" /> 条件退
					</li>
				</ul>
			</div>
			<div class="mp-info-right">
				<div class="mp-info-price">
					<span class="mp-price">￥40</span>/张
				</div>
				<div class="mp-info-note">预订须知</div>
			</div>
		</div>
		<div class="mpw-group">
			<div class="mp-row">
				<label class="mpw-row-field">购买数量</label>
				<span class="mp-limit-note mpg-ellipsis2">
					<span id="mp-limit-desc" >最多买5张</span>
				</span>
				<div class="mpw-input-number">
					<span class="mpw-input-number-minus" @click="subtraction" ref="subtraction1">-</span>
					<input type="text" value="0" max="5" min="0" class="mpw-input-number-input" ref="input" @keyup.enter="listen" />
					<span class="mpw-input-number-plus" @click="addition" ref="addition1" >+</span>
				</div>
			</div>
		</div>
		<div class="traveller-info-container" v-for="(item,index) in arr">
			<div class="mpw-group1">
				<div class="mpw-row">
					<label class="mpw-row-field1">
						游客{{index+1}}
					</label>
					<input type="text" class="mpw-textinput" placeholder="游客姓名" />
				</div>
				<div class="mpw-row">
					<label class="mpw-row-field1">
						手机号
					</label>
					<input type="text" class="mpw-textinput" placeholder="请填写手机号" />
				</div>
				<div class="mpw-row">
					<label class="mpw-row-field1">
						身份证
					</label>
					<input type="text" class="mpw-textinput" placeholder="请填写正确的省份证号码" />
				</div>
			</div>
		</div>

	</div>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					arr: []
				
					
					
				}
			},
			mounted() {
				this.addition()

			},
			methods: {

				addition: function() {
					
					if(this.$refs.input.value == 4) {

						this.$refs.addition1.style.backgroundColor = "red"
					}
					if(this.$refs.input.value == 5) {
						this.$refs.input.value == 5
							//this.$refs.addition1.style.backgroundColor = "red"
					} else {
						this.$refs.input.value++;
						this.arr.push("1");
						this.$refs.subtraction1.style.backgroundColor = "#00afc7"
						
					}
					console.log(this.$refs.input.value)
				},
				subtraction: function() {
					if(this.$refs.input.value == 1) {

						this.$refs.subtraction1.style.backgroundColor = "red"
					}
					if(this.$refs.input.value == 0) {
						this.$refs.input.value == 0
							//						this.$refs.subtraction1.style.backgroundColor = "red"
					} else {
						this.$refs.input.value--;
						this.arr.pop("1");
						this.$refs.addition1.style.backgroundColor = "#00afc7"

					}
				},
				listen: function() {
					if(this.$refs.input.value == 0){
						
						this.arr=[];
						
						
					}
					if(this.$refs.input.value == 1){
						
						this.arr=[1];
						
						
					}
					if(this.$refs.input.value == 2){
						
						this.arr=[1,1];
					
					}
					if(this.$refs.input.value == 3){
						
						this.arr=[1,1,1];
					
					}
					if(this.$refs.input.value == 4){
						
						this.arr=[1,1,1,1];
					
					}
					if(this.$refs.input.value == 5){
						
						this.arr=[1,1,1,1,1];
					
					}
					if(this.$refs.input.value != 5||this.$refs.input.value != 0){
						
						this.$refs.subtraction1.style.backgroundColor = "#00afc7";
					this.$refs.addition1.style.backgroundColor = "#00afc7"
					}
					
					
					
					
					if(this.$refs.input.value >= 5) {
						this.$refs.input.value = 5
						this.$refs.addition1.style.backgroundColor = "red"
						this.$refs.subtraction1.style.backgroundColor = "#00afc7"
					} else if(this.$refs.input.value <= 0) {
						this.$refs.input.value = 0;
						this.$refs.subtraction1.style.backgroundColor = "red"
						this.$refs.addition1.style.backgroundColor = "#00afc7"
					}

				}
			}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	.mpw-textinput {
		height: .38rem;
		padding: .06rem 0;
		border: 0;
		margin-top: 0.21rem;
		color: #212121;
		background: 0;
	}
	
	.mpw-row-field1 {
		float: left;
		width: 1.6rem;
		color: #616161;
		font-size: .3rem;
		line-height: 1rem;
	}
	
	.mpw-row {
		padding-left: 0.1rem;
		overflow: hidden;
		background: #fff;
	}
	
	.mpw-group1 {
		margin: .2rem 0;
		position: relative;
	}
	
	.mpw-input-number-plus {
		position: relative;
		display: inline-block;
		width: .56rem;
		height: .56rem;
		margin: .02rem;
		background-color: #00afc7;
		text-align: center;
		line-height: 0.56rem;
		font-size: 0.6rem;
		color: #fff;
		cursor: pointer;
	}
	
	.mpw-input-number-input {
		width: .6rem;
		height: .6rem;
		border: 0 none;
		font: normal .28rem/.6rem arial;
		text-align: center;
		vertical-align: top;
	}
	
	.mpw-input-number-minus {
		position: relative;
		display: inline-block;
		width: .56rem;
		height: .56rem;
		margin: .02rem;
		background-color: #00afc7;
		line-height: 0.56rem;
		text-align: center;
		font-size: 0.6rem;
		color: #fff;
		cursor: pointer;
	}
	
	.mpw-input-number {
		float: right;
		padding: 0.01rem;
		position: relative;
		border: .02rem solid #c7ced4;
	}
	
	#mp-limit-desc {
		color: #ccc;
		font-size: .28rem;
		position: absolute;
		top: 44%;
		left: 1.6rem;
		margin-right: 2.1rem;
	}
	
	.mp-limit-note mpg-ellipsis2 {
		position: absolute;
		top: 50%;
		left: 1.6rem;
		margin-right: 2.1rem;
		color: #ccc;
		font-size: .28rem;
	}
	
	.mpw-row-field {
		position: relative;
		top: .12rem;
		float: left;
		width: 1.6rem;
		color: #616161;
		font-size: .3rem;
		line-height: .5rem;
	}
	
	.mpw-group {
		margin: .2rem 0;
	}
	
	.mp-row {
		margin-top: ;
		padding: .3rem .2rem .3rem .2rem;
		overflow: hidden;
		min-height: .5rem;
		background: #fff;
		position: relative;
	}
	
	.body {
		background: #CCCCCC;
	}
	
	.mp-header {
		position: relative;
		width: 100%;
		height: .88rem;
		background: #00bcd4;
		color: #fff;
	}
	
	.mp-header-left {
		float: left;
		width: .4rem;
		line-height: .88rem;
		padding: 0 .2rem;
		font-size: .36rem;
		font-weight: bold;
		color: #fff;
		text-align: left;
	}
	
	.mp-header-title {
		position: absolute;
		top: .14rem;
		left: .8rem;
		text-align: center;
		height: .6rem;
		line-height: .6rem;
	}
	
	.mp-linkera {
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: .32rem;
		height: 100%;
		width: 5.4rem;
	}
	
	.mp-header-right {
		float: right;
		position: relative;
	}
	
	.mp-address {
		position: absolute;
		right: .3rem;
		display: block;
		width: .9rem;
		line-height: .88rem;
		text-align: right;
		color: #fff;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	
	.mp-info-outer {
		position: relative;
		overflow: hidden;
		min-height: 1.1rem;
		padding: .2rem .2rem .1rem .2rem;
		background: #fff;
	}
	
	.mp-info-left {
		margin-right: 1.9rem;
		float: left;
	}
	
	.mp-info-title {
		color: #212121;
		font-size: .32rem;
		line-height: .44rem;
		margin-bottom: .04rem;
	}
	
	.mp-info-note {
		margin-top: .12rem;
		line-height: .32rem;
		color: #00bcd4;
		font-size: .28rem;
	}
	
	.mp-price {
		color: #ff8300;
		font-size: .4rem;
	}
	
	.mp-info-price {
		height: .44rem;
		line-height: .44rem;
		color: #9e9e9e;
		font-size: .24rem;
	}
	
	.mp-info-right {
		position: absolute;
		right: .2rem;
		top: .2rem;
		width: 1.8rem;
		text-align: right;
	}
	
	.mp-info-tagicon {
		position: relative;
		top: .08rem;
		width: .24rem;
		height: .24rem;
		margin-right: .08rem;
		vertical-align: top;
	}
	
	.mp-info-tagitem {
		float: left;
		line-height: .44rem;
		margin-left: .2rem;
		color: #616161;
		font-size: .24rem;
	}
	
	.mp-info-taglist {
		margin-left: -.2rem;
		overflow: hidden;
	}
</style>
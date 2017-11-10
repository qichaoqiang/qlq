<template>
	<div class="body" @click="change">
		<div class="footer">
			<p>
				产品价格￥
			</p>
			<a class="order-form-submit">
				提交订单
			</a>
		</div>
	</div>

</template>
<script>
	export default {
		methods:{
			change(){
				this.$emit("change")
			}
		}
	

	}
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	.order-form-submit {
		float: right;
		right: 0;
		height: 100%;
		display: block;
		width: 45%;
		background: #ff9800;
		font-size: .35rem;
		text-align: center;
		line-height: ;
		color: #fff;
		padding-top: 5%;
	}
	
	.body {
		height: 8%;
		width: 100%;
		background: #fff;
		position: fixed;
		bottom: 0;
		z-index: 9999;
	}
	
	.footer {
		height: 100%;
		position: relative;
	}
	
	.footer p {
		font-size: 0.3rem;
		padding-top: 5%;
		padding-left: 0.3rem;
		color: #ff8300;
		float: left;
	}
</style>
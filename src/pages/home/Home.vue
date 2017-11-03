<template>
	<div>
 		<home-header/>
 		<home-section/>
 	</div>
</template>

export default {
	components: {
		"home-header": HeaderComponent,
		"home-section" : SectionComponent
	}
}
<script>

import HeaderComponent from "./Header";
import SectionComponent from "./Section";

export default {
	components: {
		"home-header": HeaderComponent,
		"home-section" : SectionComponent
	}
}
</script>

<style>
</style>

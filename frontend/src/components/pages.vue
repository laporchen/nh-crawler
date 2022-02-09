<template>
	<div id="pages">
		<div class="row">
			<img
				class="col image col-12"
				:class="{ 'col-md-6': viewMode === 2, 'col-md-12': viewMode === 1 }"
				referrerpolicy="no-referrer"
				v-for="(image, index) in pages"
				:src="image"
				:key="index"
			/>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
	name: "pageComponent",
	components: {},
	methods: {},
	computed: {
		...mapGetters({
			pages: "getPages",
			viewMode: "getPageSetting",
		}),
	},
};
</script>
<style>
.image {
	padding: 15px;
}
</style>

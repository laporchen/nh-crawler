<template>
	<div id="pages">
		<div class="container">
			<img id="nyan" src="https://c.tenor.com/2roX3uxz_68AAAAC/cat-space.gif" v-show="hide" />
			<div class="row" v-show="!hide">
				<img
					class="col image col-12"
					:class="{ 'col-md-6': viewMode === 2, 'col-md-12': viewMode === 1 }"
					referrerpolicy="no-referrer"
					v-for="(image, index) in pages.slice(curPage, curPage + viewMode)"
					:src="image"
					:key="index"
					@click="pageClickHandler(index)"
				/>
			</div>
			<div class="pageBtn" v-if="pagesCnt > 0 && !hide">
				<button class="btn btn-primary" :onclick="first">First</button>
				<button class="btn btn-primary" :onclick="prev">&#8592;</button>
				<a id="curpage">{{ curPage + 1 }}</a>
				<button class="btn btn-primary" :onclick="next">&#8594;</button>
				<button class="btn btn-primary" :onclick="last">Last</button>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
	name: "pageComponent",
	data() {
		return {
			pagesCnt: 0,
			curPage: 0,
		};
	},
	components: {},
	methods: {
		prev() {
			if (this.curPage - this.viewMode >= 0) {
				this.curPage -= this.viewMode;
			}
		},
		next() {
			if (this.curPage + this.viewMode < this.pagesCnt) {
				this.curPage += this.viewMode;
			}
		},
		first() {
			this.curPage = 0;
		},
		last() {
			if (this.pagesCnt % 2 === 0) {
				this.curPage = this.pagesCnt - 2;
			} else {
				this.curPage = this.pagesCnt - 1;
			}
		},
		pageClickHandler(index) {
			switch (this.viewMode) {
				case 1:
					this.next();
					break;
				case 2:
					if (index == 0) {
						this.prev();
					} else {
						this.next();
					}
					break;
			}
		},
	},
	watch: {
		viewMode: function () {
			if (this.viewMode === 2 && this.curPage % 2 === 1) {
				this.curPage--;
			}
		},
		pages: function () {
			this.pagesCnt = this.pages.length;
			if (this.pagesCnt === 0) {
				this.curPage = 0;
			}
		},
	},
	computed: {
		...mapGetters({
			pages: "getPages",
			viewMode: "getPageSetting",
			hide: "getHide",
		}),
	},
};
</script>
<style>
.image {
	padding: 15px;
	max-width: 100%;
	max-height: 80%;
}
#curpage {
	color: white;
	padding: 5px;
}
.pageBtn > * {
	padding: 10px;
}
#nyan {
	width: 700px;
	height: auto;
}
</style>

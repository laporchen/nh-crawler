<template>
	<div id="nav">
		<div class="container">
			<nav id="navbar" class="navbar navbar-dark bg-dark navbar-expand-md fixed-top">
				<a class="navbar-brand" href="#"> NHC </a>
				<button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div id="navbarNav" class="collapse navbar-collapse">
					<ul class="navbar-nav ms-auto">
						<li class="nav-item">
							<button class="btn btn-primary btn-block" @click="changeView(2)">Two-Page</button>
						</li>
						<li class="nav-item">
							<button class="btn btn-primary btn-block" @click="this.changeView(1)">One-Page</button>
						</li>
						<li class="nav-item">
							<button class="btn btn-primary btn-block" :onclick="getRandom">Random</button>
						</li>
						<li class="nav-item">
							<form v-on:submit.prevent="getInput">
								<div id="searchGroup">
									<div id="item" style="width: 60%">
										<input id="inputNum" class="form-control" type="number" v-model="number" placeholder="Sauce Number" required />
									</div>
									<div id="item" style="width: 40%">
										<button class="btn btn-primary btn-block">Search</button>
									</div>
								</div>
							</form>
						</li>
						<li class="nav-item">
							<button class="btn btn-danger btn-block" @click="hide">Emergency</button>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "Nav",
	components: {},
	data() {
		return {
			number: null,
		};
	},
	methods: {
		getRandom() {
			this.$store.dispatch("setRandom");
		},
		getInput() {
			this.$store.dispatch("setPages", this.number);
		},
		changeView(view) {
			console.log(view);
			this.$store.dispatch("setView", view);
		},
		hide() {
			console.log(this.hide);
			this.$store.dispatch("setHide");
		},
	},
	watch: {
		randomNumber: function () {
			this.number = this.randomNumber;
		},
	},
	computed: {
		...mapGetters({
			randomNumber: "getId",
		}),
	},
};
</script>
<style>
.navbar-brand {
	font-size: 1.5em;
	padding: 5px;
}
.nav-item {
	max-width: 300px;
	padding: 5px;
	button {
		width: 150px;
	}
}
#inputNum {
	max-width: 300px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
input[type="number"] {
	-moz-appearance: textfield;
}
#searchGroup {
	width: 250px;
	max-width: 500px;
	display: table;
}
#item {
	display: table-cell;
}
</style>

function loginRoute ($stateProvider) {
	$stateProvider
		.state({
			name: 'login',
			url: '/login',
			component: 'loginComponent'
		});
}

angular.module('BoilerTemple-site.login')
	.config(loginRoute);

loginRoute.$inject = ['$stateProvider'];

const layoutComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.$onInit = function () {
			console.log('init layout');
		};
	},
	template: `
		<div class="container-main">
            <div class="container-top">
                <div class="container-left">
                    <header-component></header-component>
                </div>
                <div class="container-right">
                    <body-component></body-component>
                </div>
            </div>
			<div class="container-footer">
				<footer-component></footer-component>
			</div>
		</div>
	`
};

angular.module('BoilerTemple-site.layout')
	.component('layoutComponent', layoutComponent);

layoutComponent.$inject = [];

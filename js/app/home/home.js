( function() {
	'use strict';

	angular.module('chaiApp.home').controller('HomeCtrl', HomeCtrl);

	

	/*
	*Modal controller
	*/
	angular.module('chaiApp.home').controller('ModalCtrl', ModalCtrl);

	ModalCtrl.$inject = ['$scope', '$uibModalInstance', 'item'];

	function ModalCtrl($scope, $uibModalInstance, item){
		var modalCtrl = this;

		//methods
		modalCtrl.close = close;

		//Properties
		modalCtrl.image =item.image;

		activate();

		function activate(){
			//Using control parameter 
			console.log('Modal is active');
		}

		function close(){
			$uibModalInstance.close( true );
		}
	}

	HomeCtrl.$inject = ['$routeParams', '$uibModal', 'dataservice'];

	/**@ngInject*/
	function HomeCtrl($routeParams, $uibModal, dataservice){
		var homeCtrl = this;

		//Properties
		homeCtrl.events = null;

		//Events
		homeCtrl.showModal = showModal;

		//Initialize controller
		activate();

		function activate(){
			console.log('Activated HomeCtrl');	
			loadEvents();			
		}

		function loadEvents(){
			dataservice.getEventos().then(function(data){
				homeCtrl.events = data;
			});
		}

		function showModal(srcImage){
			var item = { image: srcImage };
			var modalInstance = $uibModal.open({
		        templateUrl: 'js/app/home/photo-modal.html',
		        controller: 'ModalCtrl',
		        controllerAs: 'modalCtrl',
		        size: 'lg',
		        resolve: {
		        	//selected item
					item: function () {
						return item;
					}
				}
		    });
		}
	}
})();
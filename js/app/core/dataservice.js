(function () {
	'use strict';

	
	angular.module('chaiApp.core').factory('dataservice', dataservice);

	dataservice.$inject = ['$http','appConfig'];

	function dataservice($http, appConfig){
		var service = {
			getEventos : getEventos
		};

		return service;

		function getEventos(){
			var serviceUrl = 'https://private-04683-loscorvett.apiary-mock.com/eventos';
			return $http.get(serviceUrl).then(getEventosComplete).catch(function (message){
				console.log('Error in getEventos. Message:', message);
			});

			function getEventosComplete(data, status, headers, config){
				return data.data;
			}
		}
	}
})();
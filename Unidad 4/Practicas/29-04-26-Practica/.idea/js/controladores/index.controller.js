angular.module('app').controller('Index', Index);

Index.$inject = ['$scope', '$log'];

function Index($scope, $log) {

    $scope.formConsultaRuta = {
        fechaInicio: '',
        fechaFin: '',
        idProveedor: '',
        idAutomovil: '',
        idDriver: '',
        idRuta: '',
    }

    $scope.imprimirMensaje = () => {
        console.log($scope.formConsultaRuta);
    }

    $scope.opcionejemplo = [
        {
            etiqueta: 'Chevito',
            valor: 69
        }
    ];

    $scope.opcionautomovil = [
        {
            etiqueta: 'Chevito',
            valor: 1
        },
        {
            etiqueta: 'Nissan',
            valor: 2
        },
        {
            etiqueta: 'Toyota',
            valor: 3
        },
        {
            etiqueta: 'Honda',
            valor: 4
        }

    ];

    $scope.opcionproveedor = [
        {
            etiqueta: 'Proveedor 1',
            valor: 1
        },
        {
            etiqueta: 'Proveedor 2',
            valor: 2
        },
        {
            etiqueta: 'Proveedor 3',
            valor: 3
        },
        {
            etiqueta: 'Proveedor 4',
            valor: 4
        }

    ];
    $scope.opciondriver = [
        {
            etiqueta: 'Driver 1',
            valor: 1

        },
        {
            etiqueta: 'Driver 2',
            valor: 2
        },
        {
            etiqueta: 'Driver 3',
            valor: 3
        },
        {
            etiqueta: 'Driver 4',
            valor: 4
        }
    ];

    $scope.banderaejemplo = false;

    $scope

}
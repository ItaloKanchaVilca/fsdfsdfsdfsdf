<?php

require_once "../html/base.php";
$conexion=conexion();
$sql = "SELECT fechaVenta,montoVenta from ventas";
$result = mysqli_query($conexion,$sql);
while ($ver = mysqli_fetch_row($result)) {
	$valoresY[] = $ver[1]; //monto
	$valoresX[] = $ver[0]; //fecha
}

$datosX = json_encode($valoresX);
$datosY = json_encode($valoresY);
?>

<?php

require_once "../html/hola.php";
$conexion=conexion2();
$sql = "SELECT fechaVoto,montoVoto from pedro";
$result = mysqli_query($conexion,$sql);
while ($ver = mysqli_fetch_row($result)) {
	$valoresYa[] = $ver[1]; //monto
	$valoresXa[] = $ver[0]; //fecha
}

$datosXa = json_encode($valoresXa);
$datosYa = json_encode($valoresYa);

?>

<!DOCTYPE html>
<html>
<head>
	<title>Estadisticas </title>
	<link rel="stylesheet" type="text/css" href="../libreria/bootstrap/css/bootstrap.css">
	<script src="../libreria/jquery-3.3.1.min.js"></script>
	<script src="../libreria/plotly-latest.min.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="panel panel-primary">
					<div class="panel panel-heading">
						Estadisticas  de los candidatos segun nuestra pagina
					</div>
					<div class="panel panel-body">
						<div class="row">
						<div class="col-sm-6">
							<img width="420px" src="../imagen/fue.png">
								<div id="cargaLineal"></div>
							</div>
							
							<div class="col-sm-6">
								
								<div id="cargaBarras"></div>
								<div id="grafico"></div>
								<div id="graficaBarras"></div>

							<script type="text/javascript">

								function crearCadenaBarras(json){
									var parsed = JSON.parse(json);
									var arr = [];
									for (var x in parsed) {
										arr.push(parsed[x]);
									}
									return arr;
								}

							</script>	
							<script type="text/javascript">
							datosX = crearCadenaBarras('<?php echo $datosX; ?>');
							datosY = crearCadenaBarras('<?php echo $datosY; ?>');
		
								var trace1 = {
								type: 'bar',
								x: datosX,
								y: datosY,
								marker: {
									color: '#C8A2C8',
									line: {
										width: 3.5
									}
								}
								};

								var data = [ trace1 ];

								var layout = { 
								title: 'votantes de fuerza polular',
								font: {size: 20}
								};

								var config = {responsive: true}

								Plotly.newPlot('grafico', data, layout, config );
							</script>
							
							
							</div>
							<div class="row">
						<div class="col-sm-6">
						<img width="420px" src="../imagen/lap.jpg">
								<div id="cargaLineal"></div>
							</div>
							
							<div class="col-sm-6">
								
								<div id="cargaBarras"></div>
								<div id="graficos"></div>
								
								<script type="text/javascript">

function crearCadenaBarrasP(json){
	var parsed = JSON.parse(json);
	var arr = [];
	for (var xa in parsed) {
		arr.push(parsed[xa]);
	}
	return arr;
}

</script>	
<script type="text/javascript">
datosXa = crearCadenaBarrasP('<?php echo $datosXa; ?>');
datosYa = crearCadenaBarrasP('<?php echo $datosYa; ?>');
var trace1 = {
type: 'bar',
x: datosXa,
y: datosYa,
marker: {
	color: '#C8A2C8',
	line: {
		width: 2.5
	}
}
};

var data = [ trace1 ];

var layout = { 
title: 'votantes de Peru libre',
font: {size: 18}
};

var config = {responsive: true}

Plotly.newPlot('graficos', data, layout, config );
</script>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>


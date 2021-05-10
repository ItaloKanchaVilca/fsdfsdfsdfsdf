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



<<!DOCTYPE html>
<html >
<head>
    <meta charset="UTF-8">  
    <title>Formulario</title>
    
    <link rel="stylesheet" href="../css/eileen4.css">
</head>

<body>
<div id="area-cabecalho">
        <!--BARRA DE NAVEGACION-->
        <div id="area-logo">
            <h1>VOTO<span class="branco">INFORMADO</span> </h1>
        </div>

        <div id="area-menu">
            <a href="../html/candidatos2.php">Insertar Propuestas</a>

        </div>
    </div>



    <center><h1><div id="demotext">CANDIDATOS   PRESINDECIALES   2021</div></h1></center>
    <form action="reg.php" method="POST"></form>
    <section class="form-register">
        <h4>Formulario para candidatos</h4>
        <label for="organizacion">Ingrese la oranizacion:</label>
        <input class="controls" type="text" placeholder="organizacion" maxlength="50" name="organizacion" id="organizacion"> 
        <br>
        <label for="nombre">Ingrese el nombre:</label>
        <input class="controls" type="text" placeholder="nombre" maxlength="50" name="nombre" id="nombre">
        <br>
        <label for="profesion">Ingrese la profesion:</label>
        <input class="controls" type="text" placeholder="profesion" maxlength="50" name="profesion" id="profesion">
        <br>
        <label for="edad">Ingrese la edad:</label>
        <input class="controls" type="number" placeholder="edad" maxlength="2" name="edad" id="edad">
        <br>
        <label for="tiempoA">Ingrese el tiempo de afiliacion:</label>
        <input class="controls" type="text" placeholder="tiempo de afiliacion" maxlength="50" name="tiempoA" id="tiempoA">
        <br>
        <label for="cargoA">Ingrese el cargo anterior:</label>
        <input class="controls" type="text" placeholder="cargo anterior" maxlength="50" name="cargoA" id="cargoA">
        <br>
        <label for="ultimaP">Ingrese la ultima postulacion:</label>
        <input class="controls" type="text" placeholder="ultima postulacion" maxlength="50" name="ultimaP" id="ultimaP">

        <input class="botons"type="submit" value="Registrar">
    </section>
    </form>






</body>






</html>
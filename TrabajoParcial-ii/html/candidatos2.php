<!DOCTYPE html>
<html >
<head>
    <meta charset="UTF-8">  
    <title>Formulario</title>
    
    <link rel="stylesheet" href="../css/eileen5.css">
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
        <h4>Formulario para propuestas</h4>
        <label for="candidato">Ingrese el nombre:</label>
        <input class="controls" type="text" placeholder="candidato" maxlength="50" name="candidato" id="candidato"> 
        <br>
        <label for="social">Ingrese la propuesta social:</label>
        <input class="controls" type="text" placeholder="social" maxlength="50" name="socail" id="social">
        <br>
        <label for="economico">Ingrese la propuesta economico:</label>
        <input class="controls" type="text" placeholder="economico" maxlength="50" name="economico" id="economico">
        <br>
        <label for="natural">Ingrese la propuesta natural:</label>
        <input class="controls" type="text" placeholder="natural" maxlength="2" name="natural" id="natural">
        <br>
        <label for="institucional">Ingrese la propuesta institucional:</label>
        <input class="controls" type="text" placeholder="institucional" maxlength="50" name="institucional" id="institucional">
        <br>

        <input class="botons"type="submit" value="Registrar">
    </section>
    </form>
    





</body>






</html>
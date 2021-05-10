<?php

    //conexion con la base de datos y el servidor
    $link=mysql_conect("localhost","root","") or die("<h2>NO encuentra el servidor</h2>");;
    $db = mysql_select_db("candidatos_base",$link) or die("<h2>Error de conexion</h2>");


    //obtenemos los valores del formulario

    $organizacion=$_POST['organizacion'];
    $nombre=$_POST['nombre'];
    $profesion=$_POST['profesion'];
    $edad=$_POST['edad'];
    $tiempoAfiliacion=$_POST['tiempoA'];
    $cargoAnterior=$_POST['cargoA'];
    $ultimapostulacion=$_POST['ultimaP'];

    //obtiene la longitud de  un string
    $req =(strlen($organizacion)*strlen($nombre)*strlen($profesion)*strlen($edad)*strlen($tiempoAfiliacion)*strlen($cargoAnterior)*strlen($ultimapostulacion)) or die("No se han llenado todos los campos <br><br><a href='reg.html'>")

    //ingresar la informacion a la tabla de datos
    mysql_query("INSERT INTO candidatos_base VALUES('$organizacion','$nombre','$profesion','$edad','$tiempoAfiliacion','$cargoAnterior','$ultimapostulacion')",$link) or die("<h2>Error de envio</h2>")                             
 

    echo '
    <h2>Registro Completo</h2>
    <a href="login.html" >Logearse</a>
    ';
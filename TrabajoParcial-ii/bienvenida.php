<?php

    session_start();

    if(!isset($_SESSION['usuario'])){
        echo '
        <script>
            alert("Por favor debes iniciar sesión");
            window.location="index,php";
        </script>
        ';
        header("location: ../index.php");
        session_destroy();
        die;
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VoteX</title>

    <! - Estilo CSS ->
    <link rel="stylesheet" href="../assets/css/nuevoestilo.css">

    <! - Fuente de Google ->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">

    <! - Jquery ->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>

<body>
    <! - Navegación superior ->
    <nav>
        <h1>VOTACIÓN</h1>
        <p>atras</p>
    </nav>

    <! - Contenedor principal ->
    <div class="main-container">
        <div class="container" id="container">

            <! - Título de la pregunta ->
            <p class="fade-in" id="question_name"></p>

            <! - Img izquierda e Img derecha ->
            <div class="img-container fade-in">
                <img class="img-left">
                <img class="img-right">
            </div>

        </div>
    </div>

    <! - Pie de página ->
    <footer>
        <p>Copyright &copy; 2021 </p>
    </footer>

    <! - Almacenar datos || Predeterminado 1 ->
    <input type="hidden" id="data2" value="1">

    <! - Jquery ->
    <script>
        $(document).ready(function () {

            var json_data = [
                {
                    question: 'Elige a tu candidato preferido',
                    img1: '../TrabajoParcial-ii/imagen/keiko.jpg',
                    img2: '../TrabajoParcial-ii/imagen/castillo.jpg'
                },
            ];

            // CONFIGURAR DATOS POR DEFECTO
            $("#question_name").text(json_data[0].question);
            $(".img-left").attr('src', json_data[0].img1);
            $(".img-right").attr('src', json_data[0].img2);

            // CAMBIAR DATOS POR CLIC EN IMG
            $(".img-container img").click(function () {

                // OBTENER DATOS DE ALMACENAMIENTO DESDE HTML
                var tab_no = parseInt($("#data2").val());

                // CAMBIAR CADA DATOS
                $("#question_name").text(json_data[tab_no].question);
                $(".img-left").attr('src', json_data[tab_no].img1);
                $(".img-right").attr('src', json_data[tab_no].img2);

                // LLENAR LISTA ACTIVA
                $("#sp" + tab_no).addClass('filled');
                $("#hr" + tab_no).addClass('filled');
                $("#data2").val(parseInt(tab_no) + 1);

                // COMPRUEBE LA ÚLTIMA PESTAÑA
                if (parseInt($("#data2").val()) == 5) {
                    $("#container").html(
                        '<p>Ended. Go back</p><a class="btn-a" href="/VoteX">Start Again</a>'
                    );
                }
            });
        });
    </script>
</body>

</html>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>


    <link rel="stylesheet" href="css/result.css">
</head>
<body>
    <main>
        <h1>Resultado do formulário</h1>
    <?php
        if (isset($_POST['inputEnviar'])) {
            $name = $_POST['nome'];
            $surname = $_POST['sobrenome'];
            $age = $_POST['idade'];
            $phone = $_POST['celular'];
            $city = $_POST['cidade'];
            $state = $_POST['estado'];
            $title = $_POST['titulo'];
            $depoi = $_POST['depoimento'];

            echo "<label><h2>Nome:</h2></label> ". $name.
                "<label><h2>Sobrenome:</h2></label> ". $surname.
                "<label><h2>Idade:</h2></label> ". $age.
                "<label><h2>Celular:</h2></label> ". $phone.
                "<label><h2>Cidade:</h2></label> ". $city.
                "<label><h2>Estado:</h2></label> ". $state.
                "<label><h2>Titulo:</h2></label> ". $title.
                "<label><h2>Depoimento:</h2></label> ". $depoi;
        }
    ?>
        
        
        <button onclick="javascript:history.go(-1)">Voltar</button> 
    </main>
</body>
</html>
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
                $name =$_POST['nome'];
                $age =$_POST['idade'];
                $title =$_POST['titulo'];
                $msg =$_POST['mensagem'];


                echo "<label><h2>Nome:</h2></label> ".$name.
                    "<label><h2>Idade:</h2></label> ".$age.
                    "<label><h2>Titulo:</h2></label> ".$title.
                    "<label><h2>Mensagem:</h2></label> ".$msg;
            }
        ?><br><br>
        <button onclick="javascript:history.go(-1)">Voltar</button> 
    </main>
</body>
</html>
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $question = $_POST['question'];

  
  $to = 'luigi.castro@sga.pucminas.br';

  
  $subject = 'Dúvida Learnify';

  
  $message = "Nome: $name\n";
  $message .= "Email: $email\n\n";
  $message .= "Dúvida:\n$question";

  
  $headers = "From: $name <$email>";

  
  if (mail($to, $subject, $message, $headers)) {
    echo 'Dúvida enviada com sucesso!';
  } else {
    echo 'Ocorreu um erro ao enviar a dúvida.';
  }
}
?>

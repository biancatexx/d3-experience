<?php



require("PHPMailer/src/PHPMailer.php");
require("PHPMailer/src/SMTP.php");
require("PHPMailer/src/Exception.php");

$nomeRemetente              = $_POST['inputName'];
$emailRemetente             = $_POST['inputEmail'];
$contatoCelularRemetente    = $_POST['inputCelular'];
$experienciasRemetente       = $_POST['inputExperiences'];
$hospedesRemetente           = $_POST['inputHospedes'];
$checkinRemetente            = $_POST['inputCheckin'];
$checkoutRemetente            = $_POST['inputCheckout'];

//var_dump($_POST);

 $mail = new PHPMailer\PHPMailer\PHPMailer(true);
 $mail->IsSMTP(); // enable SMTP
 $mail->SMTPDebug = 4; // debugging: 1 = errors and messages, 2 = messages only
 $mail->SMTPAuth = true; // authentication enabled
 $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail

 $mail->Host = "mail.d3xp.com.br";
 $mail->Port = 465; // or 587
 $mail->IsHTML(true);
 $mail->Username = "falecom@d3xp.com.br";
 $mail->Password = "Fale.com@2021";
 $mail->CharSet = 'UTF-8';
 $mail->From = "falecom@d3xp.com.br";
 $mail->Subject = "Formulário contato SITE";
 $mail->AddAddress("falecom@d3xp.com.br");

$mail->Body = "
<table width=\"100%\" bgcolor=\"#E4E4E4\" style=\"background-color:#e4e4e4\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\">
    <tbody><tr>
      <td>
          <table class=\"\" align=\"center\" width=\"600\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"width:600px\">
          <tbody><tr>
             <td bgcolor=\"#ffffff\" style=\"border-top:4px solid #01a1af; border-bottom:4px solid #01a1af;background-color:#ffffff;padding-bottom:60px\">
             
              
              <table class=\"\" align=\"center\" width=\"500\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"width:500px\">
               <tbody>
                   <tr>
                  <td style=\"color:#ff3c00;font-family:Helvetica Neue,Helvetica,Verdana,Arial,sans-serif;font-size:12px;line-height:18px;padding-top:50px\">
                    <img alt=\"\" src=\"https://biancatex.com.br/d3-exp/assets/img/logo-color-d3-h.png\" width=\"108\" height=\"auto\" border=\"0\" hspace=\"0\" vspace=\"0\" style=\"color:#ff3c00;font-family:Helvetica Neue,Helvetica,Verdana,Arial,sans-serif;font-size:12px;line-height:18px;display:block;vertical-align:top\" ></td>
               </tr>
               <tr>
                  <td style=\"color:#505050;font-family:Helvetica Neue,Helvetica,Verdana,Arial,sans-serif;font-size:18px;line-height:26px;padding-top:20px; font-size:18px;line-height:32px;\">
              
                  <strong >Você tem um novo contato para o comercial <br/> vindo do site D3 Experience</strong><br><br>
                  
                  
                  </td>
               </tr>
               <tr>
                   <td style=\"font-family:Helvetica Neue,Helvetica,Verdana,Arial,sans-serif;\">
                    <span style=\"font-size: 12px; color: rgba(0, 0, 0, 0.5);\">Nome</span>
                    <p style=\"margin-top: 0px; \"> $nomeRemetente</p>
                    
                    
                    <span style=\"font-size: 12px; color: rgba(0, 0, 0, 0.5);\">E-mail</span>
                    <p style=\"margin-top: 0px; \"> $emailRemetente</p>
                    
                    
                    <span style=\"font-size: 12px; color: rgba(0, 0, 0, 0.5);\">Telefone</span>
                    <p style=\"margin-top: 0px; \"> $contatoCelularRemetente</p>
                    
                    
                    <span style=\"font-size: 12px; color: rgba(0, 0, 0, 0.5);\">Experiencias</span>
                    <p style=\"margin-top: 0px; \"> $experienciasRemetente</p>
                        
                    <span style=\"font-size: 12px; color: rgba(0, 0, 0, 0.5);\">Hóspedes</span>
                    <p style=\"margin-top: 0px; \"> $hospedesRemetente</p>
                        
                    <span style=\"font-size: 12px; color: rgba(0, 0, 0, 0.5);\">Início</span>
                    <p style=\"margin-top: 0px; \"> $checkinRemetente</p>
                    
                    <span style=\"font-size: 12px; color: rgba(0, 0, 0, 0.5);\">Data de término</span>
                    <p style=\"margin-top: 0px; \"> $checkoutRemetente</p>
                    
                    
                   </td>
               </tr>
              
              </tbody></table>
              
              
             
             </td>
          </tr>
          <tr>
    
        </tr>
      </tbody></table>
      </td>
    </tr>
  </tbody></table>";


    if($mail->Send()) {
             echo "Mensagem enviada com sucesso";
    } else {
     echo "Erro ao enviar: " . $mail->ErrorInfo;

  }
?>

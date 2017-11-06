<?php
	if(isset($_POST['ad']) && isset($_POST['eposta']) && isset($_POST['konu']) && isset($_POST['mesaj'])) {
	   if(empty($_POST['ad']) || empty($_POST['eposta']) || empty($_POST['headers'])|| empty($_POST['konu']) || empty($_POST['mesaj'])) {
	      echo 'Lütfen boş yer bırakmayın!';
	   } else {
		  $headers .= 'To: <portregaleri@gmail.com>' . "\r\n";
	      $ad = strip_tags($_POST['ad']);
	      $eposta = strip_tags($_POST['eposta']);
		  $eposta = 'portregaleri@gmail.com';
	      $konu = strip_tags($_POST['konu']);
	      $mesaj = strip_tags($_POST['mesaj']);
	      $icerik = 'Ad: ' . $ad . '<br/>E-Posta: '. $eposta . '<br/>' . $mesaj;
	      mail('portregaleri@gmail.com', $konu, $mesaj);
	      echo 'Mesajınız Gönderildi! Teşekkürler.';
	   }
	} else {
	   echo 'Lütfen Formu Kullanın!';
	}
?>
<?php 
	class Email extends CI_Controller{
		public function __construct(){
			parent::__construct();
			$this->load->library('email');
		}

		public function index(){
			$this->email->clear();
			$this->email->from($_POST['from']);
			$this->email->to($_POST['to']);
			$this->email->cc($_POST['cc']);
			$this->email->bcc($_POST['bcc']);

			$this->email->subject($_POST['subject']);
			$this->email->message($_POST['message']);
			$this->email->send();

			echo "Email realizado!";
		}

		public function contacto(){
			$to = 'aldo.aaa1@gmail.com';
			$this->email->clear();
			$this->email->from('mailto@masvitrinas.com');
			$this->email->to($to);
			$this->email->bcc('aldo.aaa1@gmail.com');
			$this->email->subject($_POST['nombreCliente'].' | AbiCorpus Contacto WebPage');
			$this->email->message($_POST['mensajeCliente'].'<br><br>El correo del cliente es: '. $_POST['correoCliente']);
			$this->email->send();
		}
	}
?>
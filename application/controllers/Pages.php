<?php 
	class Pages extends CI_Controller{
		public function __construct(){
			parent::__construct();
			$this->load->helper(array('date', 'url'));
			$this->load->view('template/titles');
		}
		public function index(){
			$data['general'] = $this->db->query("SELECT * FROM general");
			if (file_exists(APPPATH.'views/index.php')) {
				$data['page'] = 'index';
				$data['title'] = $GLOBALS['title']['index']; // Variable que se toma de templates/titles
				$data['description'] = $GLOBALS['description']['index']; // Variable que se toma de templates/titles
				$data['keywords'] = $GLOBALS['keywords']['index']; // Variable que se toma de templates/titles
				$this->load->view('template/header', $data);
				$this->load->view('index', $data);
				$this->load->view('template/close');
				return false;
			}
			$this->load->view('welcome_message');
		}
		public function view($page){
			if (!file_exists(APPPATH.'views/'.$page.'.php')) { show_404();	}
			$data['page'] = $page;
			$data['title'] = $GLOBALS['title'][$page];
			$data['description'] = $GLOBALS['description'][$page];
			$data['keywords'] = $GLOBALS['keywords'][$page];
			$this->load->view('template/header', $data);
			$this->load->view($page);
			$this->load->view('template/close');
		}
		function nueva_visita(){
			$this->load->model('Enviar_estadisticas');
			$this->Enviar_estadisticas->registrar_visita();
			$this->Enviar_estadisticas->registrar_frecuencia();
		}
		function timeToWork(){
			$apertura = $this->db->query("Select value from general where description = 'hora_apertura'")->result_array();
			$cierre = $this->db->query("Select value from general where description = 'hora_cierre'")->result_array();
			$apertura = $apertura[0]['value'];
			$cierre = $cierre[0]['value'];
			$data['apertura'] = $apertura;
			$data['cierre'] = $cierre;
			echo json_encode($data);
		}
		function getShedule($day){
			$schedule = $this->db->query('SELECT * FROM agenda where fecha like "'.$day.'%" and aprobada = 1')->result_array();
			echo json_encode($schedule);
		}
		function getServiceTime($id){
			$serviceTime = $this->db->query('SELECT * FROM servicios where id = '.$id)->result_array();
			echo json_encode($serviceTime);
		}
		function reservar(){
			$query = "INSERT INTO agenda (fecha, id_servicio, cliente, correo, whatsapp) VALUES ('".$_POST['fecha']."', ".$_POST['servicio'].", '".$_POST['nombre']."', '".$_POST['correo']."', '".$_POST['whatsapp']."')";
			$this->db->query($query);
			echo true;
		}
		function checkLogin(){
			$user = $_POST['user'];	$pass = $_POST['pass'];
			$query = 'SELECT * FROM users where user = "'.$user.'" and pass = "'.$pass.'"';
			$user = $this->db->query($query);
			echo json_encode($user);
		}
	}
?>
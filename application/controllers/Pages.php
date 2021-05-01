<?php 
	class Pages extends CI_Controller{
		public function __construct(){
			parent::__construct();
			$this->load->helper(array('date', 'url'));
			$this->load->view('template/titles');
		}
		public function index(){
			if (file_exists(APPPATH.'views/index.php')) {
				$data['page'] = 'index';
				$data['title'] = $GLOBALS['title']['index']; // Variable que se toma de templates/titles
				$data['description'] = $GLOBALS['description']['index']; // Variable que se toma de templates/titles
				$data['keywords'] = $GLOBALS['keywords']['index']; // Variable que se toma de templates/titles
				$this->load->view('template/header', $data);
				// $this->load->view('template/menu');
				$this->load->view('index');
				// $this->load->view('template/footer');
				// $this->load->view('template/scripts');
				$this->load->view('template/Close');
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
			// $this->load->view('template/menu');
			$this->load->view($page);
			// $this->load->view('template/footer');
			// $this->load->view('template/scripts');
			$this->load->view('template/Close');
		}
		function nueva_visita(){
			$this->load->model('Enviar_estadisticas');
			$this->Enviar_estadisticas->registrar_visita();
			$this->Enviar_estadisticas->registrar_frecuencia();
		}
	}
?>
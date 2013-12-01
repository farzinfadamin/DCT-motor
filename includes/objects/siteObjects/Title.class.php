<?php 
	
	class Title extends SiteObject {
		
		public function __construct(){
			parent::__construct();	
		}
		
		
		public function process(){
			

			$title = "DCT MotorSports";
			switch(LiteFrame::getActiveAction()){
				case "homepage":
					$title = "DCT MotorSports | Homepage";
					break;
				case "products":
					$title = "DCT MotorSports | Products";
					break;
				case "about":
					$title = "DCT MotorSports | About";
					break;
				case "contact":
					$title = "DCT MotorSports | Contact Us";
					break;
				case "faq":
					$title = "DCT MotorSports | Frequently Asked Questions";
					break;
			}
			$this->results = $title;
			
		}
		
	}


?>
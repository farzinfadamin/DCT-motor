<?php 

class UserFriendlyException extends IExceptionImpl{
	

    public function __construct($message = null, $code = 0){
    	 parent::__construct($message, $code);
    }
    
}

?>
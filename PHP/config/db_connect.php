
	//connect to db
	$conn = mysqli_connect('localhost', 'elliott', 'weedeater', 'ninja_pizza' );

	//check connection
	if(!$conn) {
		echo'Connection Error: ' . mysqli_connect_error();
	}
<?php 

	// if(isset($_GET['submit'])){
    //    echo $_GET['email'];
    //    echo $_GET['title'];
    //    echo $_GET['ingredients']; 
    // }

    if(isset($_POST['submit'])){
        // echo $_POST['email'];
        // echo $_POST['title'];
        // echo $_POST['ingredients']; 

        //check email
        if(empty($_POST['email'])){
            echo 'Please fill in the required email field <br />';
        } else {
            $email = $_POST['email'];
            if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                echo 'Email must be a valid email address';
            }
        }

        //check title
        if(empty($_POST['title'])){
            echo 'Please fill in the required title field <br />';
        } else {
            $title = $_POST['title'];
            if(!preg_match('/^[a-zA-z\s]+$/', $title)){
                echo 'Title must be letters and spaces only';
            }
        }

        //check ingredients
        if(empty($_POST['ingredients'])){
            echo 'Please fill in the required ingredients field <br />';
        } else {
            echo htmlspecialchars($_POST['ingredients']);
        }

     } // end of POST check
		
?>

<!DOCTYPE html>
<html>
	
	<?php include('templates/header.php'); ?>

	<section class="container grey-text">
		<h4 class="center">Add a Pizza</h4>
		<form class="white" action="add.php" method="POST">
			<label>Your Email</label>
			<input type="text" name="email">
			<label>Pizza Title</label>
			<input type="text" name="title">
			<label>Ingredients (comma separated)</label>
			<input type="text" name="ingredients">
			<div class="center">
				<input type="submit" name="submit" value="Submit" class="btn brand z-depth-0">
			</div>
		</form>
	</section>

	<?php include('templates/footer.php'); ?>

</html>
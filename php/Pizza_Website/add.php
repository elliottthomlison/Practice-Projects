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
            echo htmlspecialchars($_POST['email']);
        }

        //check title
        if(empty($_POST['title'])){
            echo 'Please fill in the required title field <br />';
        } else {
            echo htmlspecialchars($_POST['title']);
        }

        //check ingredients
        if(empty($_POST['ingredients'])){
            echo 'Please fill in the required ingredients field <br />';
        } else {
            echo htmlspecialchars($_POST['ingredients']);
        }
     }
		
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
<!DOCTYPE html>
<html>
<head>
  <title>James Teasdale</title>
  <meta name="description" content="My first page">
  <link rel="stylesheet" href="jamessite.css">
  <script src="components.js" type="text/javascript" defer></script>
</head>
<header-component></header-component>
<body>
<?php
/* POST gives annoying popups, so I used GET instead */
if(isset($_GET['submit'])) {
    $name = "Name: ".$_GET['name']."\n";
    $email = "Email: ".$_GET['email']."\n";
    $passwd = "Password: ".$_GET['passwd']."\n";
    $browser = "Browser: ".$_GET['browser']."\n";
    $gender = "Gender: ".$_GET['gender']."\n";
    $feedback = "Feedback: ".$_GET['feedback']."\n";
    $posi = "Positive Feedback: ".$_GET['posi']."\n";
    $nega = "Negative Feedback: ".$_GET['nega']."\n\n";

$file=fopen("feedback.txt", "a");
fwrite($file, $name);
fwrite($file, $email);
fwrite($file, $passwd);
fwrite($file, $browser);
fwrite($file, $gender);
fwrite($file, $feedback);
fwrite($file, $posi);
fwrite($file, $nega);
fclose($file);
}
?>
    <div class="welcome">
        <h1>Welcome to our survey!</h1>
        <p>We're looking forward to getting your answers so we can make sure our products and services are the best they can be!</p>
    </div>
    <form method="get" enctype="multipart/form-data" id="form" autocomplete="off">
    <table class="forminfo" td align="center">
      <tr>
        <th>Name: </th> 
        <td align="right"><input name="name"></td>
      </tr>
      <tr>
        <th>Email Address: </th> 
        <td align="right"><input name="email"></td>
      </tr>
      <tr>
        <th>Password: </th>
        <td align="right"><input name="passwd" placeholder="Use Caps and numbers"></td>
      </tr>
      <tr>
        <th>Browser: </th>
        <td align="right">
          <input list="browser" name="browser">
          <datalist>
            <option value="Chrome">
            <option value="Firefox">
            <option value="Brave">
            <option value="Chromium">
            <option value="Opera">
          </datalist>
        </td>
      </tr>
      <tr>
        <th>Gender</th>
        <td align="right">
          <select name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Do you like this website?</th>
        <td align="right" >
          <input type="radio" value="yes" name="feedback"/>Yes
          <input type="radio" value="no" name="feedback"/>No
        </td>
      </tr>
      <tr>
        <th colspan="2">What you like about my website: </th>
      </tr>
      <td colspan="2">
      <textarea cols="50" rows="5" name="posi"></textarea>
      </td>
      <tr>
        <th colspan="2">What you would change about this website: </th>
      </tr>
      <td colspan="2">
        <textarea cols="50" rows="5" name="nega"></textarea>
      </td>
  </table>
  <input class="button" type="submit" name="submit"/>
</form>
 
        <!--- Unused questionnaire template
        <div class="question">
          <h4>Question 2</h4>
          <h2>I try to keep up to date with the latest fashion in active wear.</h2>
      
          <div class="answer">
            <h3>Disagree</h3>
          </div>
      
          <div class="answer">
            <h3>Neutral</h3>
          </div>
      
          <div class="answer">
            <h3>Agree</h3>
          </div>
      </div>
    
      <div class="question">
        <h4>Question 2</h4>
        <h2>I try to keep up to date with the latest fashion in active wear.</h2>
    
        <div class="answer">
          <h3>Disagree</h3>
        </div>
    
        <div class="answer">
          <h3>Neutral</h3>
        </div>
    
        <div class="answer">
          <h3>Agree</h3>
        </div>
      </div>
    
      <div class="question">
        <h4>Question 3</h4>
        <h2>I purchase clothing online regularly.</h2>
    
        <div class="answer">
          <h3>Disagree</h3>
        </div>
    
        <div class="answer">
          <h3>Neutral</h3>
        </div>
    
        <div class="answer">
          <h3>Agree</h3>
        </div>
      </div>
    
      <div class="question">
        <h4>Question 4</h4>
        <h2>I try to buy goods that are designed and/or manufactured in my home country.</h2>
    
        <div class="answer">
          <h3>Disagree</h3>
        </div>
    
        <div class="answer">
          <h3>Neutral</h3>
        </div>
    
        <div class="answer">
          <h3>Agree</h3>
        </div>
      </div>
    
      <div class="question">
        <h4>Question 5</h4>
        <h2>I look to famous athletes when trying to choose what to wear when training.</h2>
    
        <div class="answer">
          <h3>Disagree</h3>
        </div>
    
        <div class="answer">
          <h3>Neutral</h3>
        </div>
    
        <div class="answer">
          <h3>Agree</h3>
        </div>
      </div> -->
      <footer>
        <h3>Thanks for taking our survey!</h3>
      </footer>

</body>
</html>
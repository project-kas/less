 table = users
 fields = username. password, id
 <?php
    $dbs = "sqll309.infinityfree.com";
    $dbname = "if0_40344115_data";
    $dbusername = "if0_40344115";
    $dbpassword = "Programming3736";
    $conn = "";

    $conn = mysqli_connect($dbs, $dbusername,
     $dbpassword, $dbname);

     if ($conn) {
        echo "Connection Successful";
     }
     else {
        echo "No Connection";
     }
 ?>
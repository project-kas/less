 table = users
 fields = username. password, id
 <?php
    $dsn = "mysql:host=sqll309.infinityfree.com;dbname=if0_40344115_data;charset=utf8mb4";
    $dbusername = "if0_40344115";
    $dbpassword = "Programming3736";

    try {
        $pdo = new PDO($dsn, $dbusername, $dbpassword);
        $pdo->setAttribute(PDO::AFTER_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
 ?>
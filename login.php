<?php
header("Content-Type: application/json"); 
header("Access-Control-Allow-Origin: *");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    // Hardcoded credentials (replace with database authentication in a real-world scenario)
    if ($username === "hr@auphansoftware.com" && $password === "hello") {
        echo json_encode(["message" => "Login Successful"]);
    } else {
        echo json_encode(["message" => "Incorrect Username/Password"]);
    }
    exit;
}
?>
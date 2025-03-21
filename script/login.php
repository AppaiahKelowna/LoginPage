<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    // Hardcoded credentials (replace with database authentication in a real-world scenario)
    if ($username === "hr@auphansoftware.com" && $password === "hello") {
        echo "Login Successful";
    } else {
        echo "Incorrect Username/Password";
    }
}
?>
<?php
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

if ($usuario === "prueba" && $contrasena === "12345") {
    echo "<script>
            localStorage.setItem('logueado', 'true');
            window.location.href = 'mapa.html';
          </script>";
} else {
    echo "<script>
            alert('Credenciales incorrectas');
            window.location.href = 'index.html';
          </script>";
}
?>

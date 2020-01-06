<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Aladdin-library</title>
    <link href="https://fonts.googleapis.com/css?family=Cinzel&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Amatic+SC&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lora&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Zhi+Mang+Xing&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    <link rel="shortcut icon" href="img/logo.png" />
    <link rel="stylesheet" href="style-login.css" />
</head>

<body>

    <div class="divlogin" id="divlogin" style="background-image: url('img/background/4.jpg') ; background-size: 100% 100%">
        <div class="login">
            <h1>Login</h1>


            <form method="post" action="">

                <input type="text" name="user" placeholder="Username" required="required" id="user" />
                <input type="password" name="pass" placeholder="Password" required="required" id="pass" />

                <button type="submit" class="btn btn-primary btn-block btn-large new" name="connect"> Sing in

                </button>
                <button type="submit" class="btn btn-primary btn-block btn-large " name="sing">Sing up

                </button>

            </form>
        </div>
    </div>
    <?php

    $cn = mysqli_connect("localhost", "root", "1234", "aladin"); //connect
    //$db = mysqli_select_db($cn, "hello");
    //$cn->query("CREATE DATABASE hello");
    //$tb= $cn->query("CREATE TABLE hello (id INT(6) ,name VARCHAR(10),pass VARCHAR(10))");

    //if ($db) echo ('PK');;
    // mysqli_select_db("localhost", "youssef") or die("error");
    if (isset($_POST['connect'])) {
        $mysql = 'SELECT * FROM `login` WHERE user="' . $_POST["user"] . '"AND pass="' . $_POST["pass"] . '"';
        $res = $cn->query($mysql);
        $msg = $_POST['user'];

        // echo '<script>alert("' . $res->num_rows . '")</script>';
        if ($res->num_rows)
            header("Location:HOME.php");
        else echo '<script>alert(" You are not in db!!! ")</script>';

        //echo ($msg);
        // while ($row = $res->fetch_assoc()) {
        //     if ($row["name"] == $_POST['user'] && $row["pass"] == $_POST['pass']) {
        //         echo ("connected");
        //         
        //     }
        // }

    } else if (isset($_POST['sing'])) {
        $mysql = 'SELECT * FROM `login` WHERE user="' . $_POST["user"]  . '"';
        $res = $cn->query($mysql);
        if ($res->num_rows == 0) {
            $mysql = 'INSERT INTO `login`(`user`, `pass`) VALUES ("' . $_POST["user"] . '","' . $_POST["pass"] . '")';
            $cn->query($mysql);
            echo '<script>alert("' . 'hello' . '")</script>';
        } else {
            echo '<script>alert(" try again !!! ")</script>';
        }
    }
    ?>
</body>

</html>

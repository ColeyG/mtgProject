<?php
    require_once('php/config.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>MTG Theme Sealed</title>
    <link rel="stylesheet" href="css/cole.css">
    <link rel="stylesheet" href="css/main.css">
    
</head>
<body class='cFlexInCol'>
    <div id="app" class='cFlexInCol'>
        <img v-bind:src='imageLink' alt="">
        <p>{{name}}</p>
        <input type="text" id='nameIn'>
        <button v-on:click='getSpecCard' >Get Named Card</button>
        <button v-on:click='getCard' >Get Any Card</button>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.15/dist/vue.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src='js/main.js'></script>
</body>
</html>

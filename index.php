<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1> REactividad con vue</h1>
<!--hola mundo con vue.js-->
    <main id="app">
        <h2 >{{message}}</h2>
        <input type="text" v-model="message">
    </main>

<!---->

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="script.js"></script>
</body>
</html>
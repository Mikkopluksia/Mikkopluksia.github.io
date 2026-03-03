<!DOCTYPE html>
<html>
<head>
    <title>Hide and Show Image</title>
</head>
<body>

    <!-- Image -->
    <img id="myImage" src="https://via.placeholder.com/200" alt="Sample Image">

    <br><br>

    <!-- Button -->
    <button onclick="toggleImage()">Hide</button>

    <script>
        function toggleImage() {
            let image = document.getElementById("myImage");
            let button = document.querySelector("button");

            if (image.style.display === "none") {
                image.style.display = "block";
                button.innerText = "Hide";
            } else {
                image.style.display = "none";
                button.innerText = "Show";
            }
        }
    </script>

</body>
</html>
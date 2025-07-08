var navLinks = document.getElementById("navLinks");

        function submit(){
            form.style.display = "none";
            submit.style.display = "block";
        }
        function goHome(){
            aboutus.style.display = "none";
            Xizmatlar.style.display = "none";
            home.style.display = "block";
            Aloqa.style.display = "none";
        }
        function goAS(){
            aboutus.style.display = "block";
            Xizmatlar.style.display = "none";
            home.style.display = "none";
            Aloqa.style.display = "none";
        }
        function goXiz(){
            aboutus.style.display = "none";
            Xizmatlar.style.display = "block";
            home.style.display = "none";
            Aloqa.style.display = "none";
        }
        function goAloqa(){
            aboutus.style.display = "none";
            Xizmatlar.style.display = "none";
            home.style.display = "none";
            Aloqa.style.display = "block";
        }
        function showMenu(){
            navLinks.style.right = "0";
        }
        function hideMenu(){
            navLinks.style.right = "-200px";
        }   

        const form = document.getElementById("form");
        const message = document.getElementById("ok");

        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Sahifani reload qilishni to‘xtatadi
            form.reset(); // Formani tozalaydi
            form.style.display = "none";
            message.style.display = "block"; // Xabarni ko‘rsatadi

            // 3 soniyadan so‘ng xabarni yashir
            // setTimeout(() => {
            // message.style.display = "none";
            // }, 3000);
        });
(function () {
    emailjs.init({
        publicKey: "XZB7nrR299U0EOFrp",
    });
})();

window.onload = function () {
    const form = document.getElementById("contact-form");
    const formContainer = document.getElementById("form-container");
    const overlay = document.getElementById("feedback-overlay");
    const canvas = document.getElementById("feedback-canvas");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        formContainer.classList.add("processing");
        overlay.style.display = "flex";

        emailjs
            .sendForm("service_fmz6mxd", "template_3brgp3p", form)
            .then(() => {
                console.log("SUCCESS!");
                loadAnimation(
                    "https://lottie.host/4cb8169d-7231-4f2f-b93f-bb7e74c4d508/fVrcT66ihx.lottie"
                );
                form.reset();
                setTimeout(() => {
                    overlay.style.display = "none";
                    formContainer.classList.remove("processing");
                }, 7000);
            })
            .catch((error) => {
                console.error("FAILED...", error);
                loadAnimation(
                    "https://lottie.host/embed/68dbbd9d-3009-4719-8b44-748855ba9535/aX6YS86frQ.lottie"
                );
                setTimeout(() => {
                    overlay.style.display = "none";
                    formContainer.classList.remove("processing");
                }, 7000);
            });
    });
    
    function loadAnimation(src) {
        import("https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm").then(({ DotLottie }) => {
            new DotLottie({
                autoplay: true,
                loop: false,
                canvas: canvas,
                src: src,
            });
        });
    }
};

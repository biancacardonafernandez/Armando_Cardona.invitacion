document.addEventListener("DOMContentLoaded", () => {

    /*
    =====================================================
    APARICIÓN DE ELEMENTOS
    =====================================================
    */

    const elementos = document.querySelectorAll(
        ".cabecera, .nombre-seccion, .datos, .mensaje-seccion, .lugar, .cierre"
    );

    elementos.forEach((elemento, index) => {

        elemento.style.opacity = "0";
        elemento.style.transform = "translateY(25px)";

        setTimeout(() => {

            elemento.style.transition =
                "opacity 1s ease, transform 1s cubic-bezier(.2,.7,.2,1)";

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";

        }, 200 + index * 220);

    });


    /*
    =====================================================
    GLOBOS FLOTANDO
    =====================================================
    */

    const globos = document.querySelectorAll(".globo");

    globos.forEach((globo, index) => {

        const duracion = 4200 + (index * 500);

        globo.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(-2deg)"
                },

                {
                    transform:
                        "translateY(-13px) rotate(3deg)"
                },

                {
                    transform:
                        "translateY(0) rotate(-2deg)"
                }
            ],

            {
                duration: duracion,
                iterations: Infinity,
                easing: "ease-in-out"
            }

        );

    });


    /*
    =====================================================
    BRILLO AL PASAR SOBRE EL BOTÓN
    =====================================================
    */

    const boton = document.querySelector(".boton-entrada");

    if (boton) {

        setInterval(() => {

            boton.animate(
                [
                    {
                        boxShadow:
                            "0 0 0 rgba(216,181,106,0)"
                    },

                    {
                        boxShadow:
                            "0 0 30px rgba(216,181,106,.22)"
                    },

                    {
                        boxShadow:
                            "0 0 0 rgba(216,181,106,0)"
                    }
                ],
                {
                    duration: 1800,
                    easing: "ease-in-out"
                }
            );

        }, 5000);

    }


    /*
    =====================================================
    PARALLAX MUY SUTIL DE LOS GLOBOS
    =====================================================
    */

    document.addEventListener("mousemove", (e) => {

        const x =
            (e.clientX / window.innerWidth - 0.5) * 8;

        const y =
            (e.clientY / window.innerHeight - 0.5) * 8;

        document.querySelectorAll(".globo").forEach((globo, index) => {

            const intensidad =
                (index % 3 + 1) * .25;

            globo.style.marginLeft =
                `${x * intensidad}px`;

            globo.style.marginTop =
                `${y * intensidad}px`;

        });

    });


    /*
    =====================================================
    TOQUE EN CELULAR
    =====================================================
    */

    document.addEventListener("touchmove", (e) => {

        const touch = e.touches[0];

        const x =
            (touch.clientX / window.innerWidth - 0.5) * 5;

        document.querySelectorAll(".globo").forEach((globo, index) => {

            const intensidad =
                (index % 3 + 1) * .18;

            globo.style.marginLeft =
                `${x * intensidad}px`;

        });

    });

});
let nombreClienta = "";
let identificacionClienta = "";
let pasoActual = "";
const baseDeDatosTiendas = {
    "Cali Norte": [
        { nombre: "Palmira Centro", link: "https://api.whatsapp.com/send/?phone=573216387899&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Carrera 8", link: "https://api.whatsapp.com/send/?phone=573183451087&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Buga Centro", link: "https://api.whatsapp.com/send/?phone=573216387900&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Cali Centro", link: "https://api.whatsapp.com/send/?phone=573155893276&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Chipichape", link: "https://api.whatsapp.com/send/?phone=573183122155&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Cali Salomia", link: "https://api.whatsapp.com/send/?phone=573183592638&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Cenco Cali", link: "https://api.whatsapp.com/send/?phone=573157641706&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "14 Calima", link: "https://api.whatsapp.com/send/?phone=573182574077&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Llano grande", link: "https://api.whatsapp.com/send/?phone=573104592696&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Unicentro Palmira", link: "https://api.whatsapp.com/send/?phone=573186295761&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Unico Cali", link: "https://api.whatsapp.com/send/?phone=573182063382&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Unico Yumbo", link: "https://api.whatsapp.com/send/?phone=573173689150&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Mr Outlet", link: "https://api.whatsapp.com/send/?phone=573113774457&text&type=phone_number&app_absent=0%20busco" }
    ],
    "Cali Sur": [
        { nombre: "Mall Plaza", link: "https://api.whatsapp.com/send/?phone=573160237899&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Campanario", link: "https://api.whatsapp.com/send/?phone=573183421913&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Cosmocentro", link: "https://api.whatsapp.com/send/?phone=573164028776&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Palmetto", link: "https://api.whatsapp.com/send/?phone=573105048539&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Jamundí Centro", link: "https://api.whatsapp.com/send/?phone=573173706261&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Popayán Arquidiócesis", link: "https://api.whatsapp.com/send/?phone=573182754781&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Popayán Centro", link: "https://api.whatsapp.com/send/?phone=573182754632&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Unicentro 2", link: "https://api.whatsapp.com/send/?phone=573165277616&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Unicentro 1", link: "https://api.whatsapp.com/send/?phone=573174423821&text&type=phone_number&app_absent=0%20busco" }
    ],
    "Eje Cafetero": [
        { nombre: "Super Centro", link: "https://api.whatsapp.com/send/?phone=573173647343&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Cartago Centro", link: "https://api.whatsapp.com/send/?phone=573175541619&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Victoria Plaza", link: "https://api.whatsapp.com/send/?phone=573164126561&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Bucaramanga Centro", link: "https://api.whatsapp.com/send/?phone=573156789394&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Pereira Centro", link: "https://api.whatsapp.com/send/?phone=573163895853&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Armenia Centro", link: "https://api.whatsapp.com/send/?phone=573173708720&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Herradura", link: "https://api.whatsapp.com/send/?phone=573183380985&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Manizales 23", link: "https://api.whatsapp.com/send/?phone=573160173032&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Armenia 14", link: "https://api.whatsapp.com/send/?phone=573216387903&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Manizales Centro", link: "https://api.whatsapp.com/send/?phone=573183491844&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Nuestro Cartago", link: "https://api.whatsapp.com/send/?phone=573156446771&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Unico Dos Quebradas", link: "https://api.whatsapp.com/send/?phone=573175544663&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Unico Bucaramanga", link: "https://api.whatsapp.com/send/?phone=573155184053&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Tulua Centro", link: "https://api.whatsapp.com/send/?phone=573157008385&text&type=phone_number&app_absent=0%20busco" }
    ],
    "Zona Occidente": [
        { nombre: "Pasto Centro", link: "https://api.whatsapp.com/send/?phone=573160232457&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Ipiales Centro", link: "https://api.whatsapp.com/send/?phone=573160263044&text&type=phone_number&app_absent=0%20busco" },
        { nombre: "Unico Pasto", link: "https://api.whatsapp.com/send/?phone=573160104837&text&type=phone_number&app_absent=0%20busco" }

    ],
    "Tienda Online": [
        { nombre: "Online", link: "https://api.whatsapp.com/send/?phone=573154334625&text&type=phone_number&app_absent=0%20busco" },
    ]
};

const chatCircle = document.getElementById('chat-circle');
const chatContainer = document.getElementById('chat-container');

chatCircle.addEventListener('click', () => {
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block';
    } else {
        chatContainer.style.display = 'none';
    }
}); 

const socket = io();
const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = input.value.trim();
    if (!texto) return;

    enviarMensajeUsuario(texto);
    input.value = '';

    if (pasoActual === "preguntandoNombre") {
        nombreClienta = texto;
        pasoActual = "preguntandoCedula";
        setTimeout(() => {
            enviarMensajeBot(`¡Mucho gusto, ${nombreClienta}! Ahora, por seguridad, ¿nos regalas tu Número de Documento?`);
        }, 800);
        document.getElementById('progress-bar').style.width = '20%';
    } 
    else if (pasoActual === "preguntandoCedula") {
        cedulaClienta = texto;
        pasoActual = ""; // Cerramos el cuestionario
        ocultarEscritura();
        setTimeout(() => {
            enviarMensajeBot("¡Gracias por la información! Ahora sí...");
            mostrarMenuPrendas(); // Ahora sí sale el menú de Jeans, Blusas, etc.
        }, 800);
        document.getElementById('progress-bar').style.width = '30%';
    } 
    else {
        // Si no estamos preguntando datos, enviamos al socket normalmente
        socket.emit('mensaje-chat', texto);
    }
});


socket.on('mensaje-chat', (msg) => {
    const item = document.createElement('div');
    item.textContent = msg;
    item.classList.add('msg', 'sent'); 
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
});
socket.on('connect', () => {
    
    const msgPolitica = document.createElement('div');
    msgPolitica.classList.add('msg', 'received');
    msgPolitica.innerHTML = `
        ¡Hola hermosa! Bienvenidas la familia latina <strong>Kancan💞</strong>. <br><br>
        Al continuar aceptas nuestra Política de protección de datos: 
        <a href="https://www.kancanjeanscolombia.com/pages/politica-de-tratamiento-de-datos" target="_blank">Leer aquí</a>.
        <br><br><strong>¿Deseas continuar?</strong>
        <div class="botones-grid">
            <button onclick="aceptarPoliticas(true)">✅ Sí, acepto</button>
            <button onclick="aceptarPoliticas(false)">❌ No</button>
        </div>
    `;
    new Audio('notificacion.mp3').play().catch(() => {});
    messages.appendChild(msgPolitica);
    messages.scrollTop = messages.scrollHeight;
});


function aceptarPoliticas(acepta) {
    if (acepta) {
        enviarMensajeUsuario("Sí, acepto");
        setTimeout(() => {
            enviarMensajeBot("¡Gracias, hermosa! ✨ Para brindarte una mejor asesoría, ¿nos regalas tu Nombre Completo?");
            pasoActual = "preguntandoNombre"; // Activamos la escucha del nombre
        }, 800);
    } else {
        enviarMensajeBot("Entendido. ¡Lindo día! ✨");
    }
    document.getElementById('progress-bar').style.width = '10%';
}


function mostrarMenuPrendas() {
    mostrarEscribiendo();

    setTimeout(() => {
        quitarEscribiendo();

        const divOpciones = document.createElement('div');
        divOpciones.classList.add('msg', 'received');
        divOpciones.innerHTML = `
            <p>¡Gracias por Confiar en Nosotros! Cuéntanos, ¿Qué prenda buscas hoy? ✨</p>
            <div class="botones-grid">
                <button onclick="elegirPrenda('Jeans')"><img src="jeans.webp" style="width:20px; vertical-align:middle;"> Jeans</button>
                <button onclick="elegirPrenda('Blusas')"><img src="blusas.webp" style="width:20px; vertical-align:middle;"> Blusas</button>
                <button onclick="elegirPrenda('Busos')"><img src="busos.webp" style="width:20px; vertical-align:middle;"> Busos</button>
                <button onclick="elegirPrenda('Camisera')"><img src="camisera.webp" style="width:20px; vertical-align:middle;"> Camisera</button>
                <button onclick="elegirPrenda('Faldas')"><img src="faldas.webp" style="width:20px; vertical-align:middle;"> Faldas</button>
                <button onclick="elegirPrenda('Vestidos')"><img src="vestidos.webp" style="width:20px; vertical-align:middle;"> Vestidos</button>
                <button onclick="elegirPrenda('Sets')"><img src="sets.webp" style="width:20px; vertical-align:middle;"> Sets</button>
                <button onclick="elegirPrenda('Shorts')"><img src="Shorts.webp" style="width:20px; vertical-align:middle;"> Shorts</button>
                <button onclick="elegirPrenda('Enterizos')"><img src="enterizos.webp" style="width:20px; vertical-align:middle;"> Enterizos</button>
                <button onclick="elegirPrenda('Zapatos')"><img src="zapatos.webp" style="width:20px; vertical-align:middle;"> Zapatos</button>
                <button onclick="elegirPrenda('Crop Top')"><img src="croptop.webp" style="width:20px; vertical-align:middle;"> Crop Top</button>
                <button onclick="elegirPrenda('Chaquetas')"><img src="chaquetas.webp" style="width:20px; vertical-align:middle;"> Chaquetas</button>
                <button onclick="elegirPrenda('Accesorios')"><img src="accesorios.webp" style="width:20px; vertical-align:middle;"> Accesorios</button>
            </div>
        `;
       new Audio('notificacion.mp3').play().catch(() => {});
        messages.appendChild(divOpciones);

        const btnCat = document.createElement('div');
        btnCat.className = 'btn-catalogo';
        btnCat.innerHTML = '✨ Ver Catálogo Tienda Online';
        btnCat.onclick = () => window.open('https://www.kancanjeanscolombia.com/collections/ropa-1', '_blank');
        messages.appendChild(btnCat);

        messages.scrollTop = messages.scrollHeight;

    }, 1500); 
    document.getElementById('progress-bar').style.width = '40%';
}


let prendaElegida = "";

function elegirPrenda(prenda) {
    prendaElegida = prenda;
    enviarMensajeUsuario(`Busco ${prenda}`);
    mostrarEscribiendo();
    
    // Avanzamos la barra al 60%
    document.getElementById('progress-bar').style.width = '60%';

    setTimeout(() => {
        quitarEscribiendo();

        // 1. CREAMOS LA TARJETA DE PRODUCTO
        const card = document.createElement('div');
        card.className = 'msg received';
        // Ajustamos el nombre de la imagen (ej: jeans.webp)
        const fotoNombre = prenda.toLowerCase().replace(" ", "") + ".webp"; 
        
        card.innerHTML = `
            <img src="${fotoNombre}" style="width:100%; border-radius:10px; margin-bottom:8px; display:block;">
            <p>¡Nuestros <strong>${prenda}</strong> tienen un calce perfecto! ✨ Te van a encantar.</p>
        `;
        messages.appendChild(card);
        messages.scrollTop = messages.scrollHeight;

        // Reproducir sonido para la foto
        new Audio('notificacion.mp3').play().catch(e => {});

        // 2. SEGUNDO PASO: Esperamos 1.5 segundos más para mostrar las zonas
        setTimeout(() => {
            mostrarEscribiendo();
            
            setTimeout(() => {
                quitarEscribiendo();
                const divZonas = document.createElement('div');
                divZonas.classList.add('msg', 'received');
                divZonas.innerHTML = `
                    <p>¡Perfecto! Selecciona tu zona para encontrar tu tienda <strong>Kancan</strong> más cercana: 📍</p>
                    <div class="botones-grid">
                        <button onclick="mostrarTiendasPorZona('Cali Norte')">Cali Norte</button>
                        <button onclick="mostrarTiendasPorZona('Cali Sur')">Cali Sur</button>
                        <button onclick="mostrarTiendasPorZona('Eje Cafetero')">Eje Cafetero</button>
                        <button onclick="mostrarTiendasPorZona('Zona Occidente')">Zona Occidente</button>
                        <button onclick="mostrarTiendasPorZona('Tienda Online')">Tienda Online</button>
                    </div>
                `;
                messages.appendChild(divZonas);
                messages.scrollTop = messages.scrollHeight;
                
                // Sonido para las zonas
                new Audio('notificacion.mp3').play().catch(e => {});
            }, 1200);
        }, 1500);

    }, 1500);
}

function irAWhatsapp(ciudad) {
    let link = "";
    
    if(ciudad === 'Cali') link = "https://api.whatsapp.com/send/?phone=573157641706&text&type=phone_number&app_absent=0 busco" + prendaElegida + " en Cali";
    if(ciudad === 'Medellín') link = "https://wa.me";
    
    enviarMensajeBot(`¡Genial! Te estamos conectando con nuestra tienda de **${ciudad}**. Dale clic aquí: <br> <a href="${link}" target="_blank" class="btn-wa">Chatear por WhatsApp ✅</a>`);
}


function enviarMensajeBot(texto) {
    const sonido = new Audio('notificacion.mp3');
    sonido.volume = 0.5; 

    const playPromise = sonido.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
        }).catch(error => {
            console.log("Esperando interacción para habilitar sonido");
        });
    }

    const item = document.createElement('div');
    item.classList.add('msg', 'received');
    item.innerHTML = texto;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
}


function enviarMensajeUsuario(texto) {
    const item = document.createElement('div');
    item.classList.add('msg', 'sent');
    item.textContent = texto;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight; 
} 

const closeBtn = document.getElementById('close-chat');
const container = document.getElementById('chat-container');

if (closeBtn) {
    closeBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        container.style.display = 'none';
        console.log("Chat cerrado");
    };
}

chatCircle.addEventListener('click', () => {
    chatContainer.style.display = 'flex'; 
});

document.getElementById('close-chat').addEventListener('click', (e) => {
    e.stopPropagation();
    chatContainer.style.display = 'none';
});

function mostrarTiendasPorZona(zona) {
    enviarMensajeUsuario(zona);
    const tiendas = baseDeDatosTiendas[zona]; 
    mostrarEscribiendo();

    
    setTimeout(() => {
        
        quitarEscribiendo();
        const divSelect = document.createElement('div');
        divSelect.classList.add('msg', 'received');
        
        let opcionesHmtl = tiendas.map((t, index) => 
            `<option value="${index}">${t.nombre}</option>`
        ).join('');

        divSelect.innerHTML = `
            <p>Escoge la tienda más cercana a ti en <strong>${zona}</strong>:</p>
            <select id="select-tienda" onchange="confirmarTienda('${zona}', this.value)" style="width:100%; padding:8px; border-radius:10px; border:1px solid #ff85a2; margin-top:5px;">
                <option value="">-- Selecciona una tienda --</option>
                ${opcionesHmtl}
            </select>
        `;
        messages.appendChild(divSelect);
        messages.scrollTop = messages.scrollHeight;
        const sonido = new Audio('notificacion.mp3');
        sonido.play().catch(e => console.log("Error de audio:", e));
    }, 1500);
    document.getElementById('progress-bar').style.width = '90%';
}
 
function confirmarTienda(zona, index) {
    if(index === "" || index === undefined) return;
    const tienda = baseDeDatosTiendas[zona][index];
    
    mostrarEscribiendo();

    setTimeout(() => {
        quitarEscribiendo();

        const mensajeFinal = `¡Hola! Soy ${nombreClienta} (CC: ${cedulaClienta}). Vengo del chat de KanCan. Me interesa ver ${prendaElegida} en la tienda ${tienda.nombre}. ¿Qué referencia y talla manejas? ✨`;
        
        // LIMPIEZA PARA MÓVILES: Quitamos espacios en blanco del link original para que no se rompa al unirlo
        const linkBaseLimpio = tienda.link.trim();
        
        // UNIÓN SEGURA: Unimos tu link con el mensaje usando el formato que te funciona
        const linkFinal = `${linkBaseLimpio}&text=${encodeURIComponent(mensajeFinal)}`;
        onclick="lanzarCelebracionKancan(); return true;";    
        // Dentro de tu enviarMensajeBot de confirmarTienda, asegúrate que el link sea así:
      enviarMensajeBot(`¡Excelente elección! Haz clic abajo para hablar con la asesora de <strong>${tienda.nombre}</strong>: <br> 
      <a href="${linkFinal}" target="_blank" class="btn-wa">Ir a WhatsApp de la tienda ✅</a>`);

        
        // Añadimos el sonido para que también suene en el móvil
        new Audio('notificacion.mp3').play().catch(e => {});
        
    }, 1600); 
    
    if(document.getElementById('progress-bar')) {
        document.getElementById('progress-bar').style.width = '100%';
    }
}



const notification = document.getElementById('chat-notification');

function cicloNotificacion() {
    
    if (chatContainer.style.display === 'flex') {
        notification.style.display = 'none';
        return;
    }
 
    notification.style.display = 'block';
    
    setTimeout(() => {
        
        notification.style.display = 'none';
    }, 5000);
}


setInterval(cicloNotificacion, 10000);

setTimeout(cicloNotificacion, 2000);

const imagenesKancan = [
    'New1.webp', 'New2.webp', 'New 3.webp', 'New 4.webp', 'New 5.webp',
    'New 6.webp', 'New 7.webp', 'New 8.webp', 'New 9.webp', 'New 10.webp', 'New 11.webp', 'New12.webp', 'New13.webp', 'New14.webp', 'New15.webp','New16.webp','New17.webp','New18.webp','New19.webp'
];

let indiceActual = 0;

const carrusel = document.getElementById('carrusel-vertical');


imagenesKancan.forEach((url) => {
    const img = new Image();
    img.src = url;
});

function rotarCarrusel() {
    if (carrusel) {
        
        carrusel.style.opacity = "0.19"; 
        
        setTimeout(() => {
            const nombreImagen = encodeURI(imagenesKancan[indiceActual]);
            carrusel.style.backgroundImage = `url('${nombreImagen}')`;
            carrusel.style.opacity = "1"; // Volvemos a opacidad total
            indiceActual = (indiceActual + 1) % imagenesKancan.length;
        }, 500); 
    }
}


setTimeout(() => {
    if (carrusel) {
        carrusel.style.opacity = "1";
        rotarCarrusel();
        setInterval(rotarCarrusel, 4000);
    }
}, 3000);


const chatHeader = document.querySelector('.chat-header');
chatHeader.innerHTML = `
    <div>
        <span class="logo-kancan">KanCan</span><br>
        <small style="font-size:10px; font-weight:normal; display: flex; align-items: center; margin-top: 2px;">
            <span class="online-dot"></span> 5 ASESORAS DISPONIBLES
        </small>
    </div>
    <span id="close-chat" style="cursor:pointer; font-size:24px;">&times;</span>
`;

function mostrarEscribiendo() {
    const loader = document.createElement('div');
    loader.id = 'typing-loader';
    loader.className = 'msg received typing';
    loader.innerHTML = '<span></span><span></span><span></span>';
    messages.appendChild(loader);
    messages.scrollTop = messages.scrollHeight;
}

function quitarEscribiendo() {
    const loader = document.getElementById('typing-loader');
    if (loader) loader.remove();
}

const tituloOriginal = document.title;

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = "¡Hey! Tus Jeans te esperan 💞";
    } else {
        
        document.title ="¡Bienvenida✨!";
        
        setTimeout(() => {
            document.title = tituloOriginal;
        }, 3000);
    }
});

window.addEventListener('load', () => {
    const botonCerrar = document.getElementById('close-chat');
    const ventanaChat = document.getElementById('chat-container');

    if (botonCerrar) {
        botonCerrar.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); 
            ventanaChat.style.display = 'none';
            console.log("Chat de Kancan cerrado correctamente");
        });
    }
});
function actualizarProgreso(porcentaje) {
    document.getElementById('progress-bar').style.width = porcentaje + '%';
}
function checkModoNocturno() {
    const hora = new Date().getHours();
    // Se activa de 7 PM (19) a 6 AM
    if (hora >= 19 || hora <= 6) {
        document.getElementById('chat-container').classList.add('luxury-dark');
    }
}
checkModoNocturno();
function ocultarEscritura() {
    const formulario = document.getElementById('chat-form');
    if (formulario) {
        // En lugar de borrarlo, lo oculta para que no deje un hueco
        formulario.style.display = 'none';
        
        // Ajusta el área de mensajes para que use ese espacio extra
        const mensajesArea = document.getElementById('messages');
        mensajesArea.style.height = '100%';
        mensajesArea.style.marginBottom = '0';
    }
}

function lanzarCelebracionKancan() {
    console.log("¡Lanzando confeti KanCan! 💞"); 
    
    // Explosión central masiva
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#4639f7', '#3d77f3', '#ffffff'] 
    });

    // Pequeñas explosiones laterales
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#3d77f3', '#ffffff']
        });
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#4639f7', '#ffffff']
        });
    }, 200);
}


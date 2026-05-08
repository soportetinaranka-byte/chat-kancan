const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
// 1. Llamamos a la herramienta de OpenAI arriba de todo
const { OpenAI } = require("openai");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 2. Conectamos la IA con tu llave de Render de forma segura
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }); 

app.use(express.static(__dirname)); 

io.on('connection', (socket) => {
    console.log('Una clienta se conectó a Kancan');

    // 3. AQUÍ SE UNE LA IA: Cuando la clienta escribe, la IA responde
    socket.on('mensaje-chat', async (msg) => {
        try {
            // Enviamos la pregunta de la clienta a OpenAI
            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo", 
                messages: [
                    { 
                        role: "system", 
                        content: "Eres la asistente virtual de KanCan, una marca de moda latina premium. Tu tono es cercano, empoderador y muy femenino. Siempre usas emojis como 💞✨. Tu objetivo es asesorar sobre moda. Si te preguntan por outfits, recomienda jeans de tiro alto, blusas vaporosas o vestidos. Siempre menciona que KanCan es 'Tan Latina como tú'." 
                    },
                    { role: "user", content: msg }
                ],
            });

            // Sacamos la respuesta de texto que generó la IA
            const respuestaIA = completion.choices[0].message.content;
            
            // Enviamos la respuesta de la experta de vuelta al chat de la clienta
            io.emit('mensaje-chat', respuestaIA);

        } catch (error) {
            console.error("Error con la IA:", error);
            // Si la IA falla por falta de saldo o configuración, el chat no se cae
            io.emit('mensaje-chat', "Lo siento hermosa, tuve un pequeño mareo. ¿Me repites la pregunta? 💞");
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Chat de Kancan corriendo en puerto ${PORT}`);
});


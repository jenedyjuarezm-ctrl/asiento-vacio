
# 🕵️‍♂️ El Asiento Vacío | Protocolo Black Ops 🇺🇳

> *"Tienes el poder del veto. Úsalo. Luego mira qué habría pasado."*

**El Asiento Vacío** es un simulador geopolítico interactivo de alto nivel. Te permite ocupar un asiento en el Consejo de Seguridad de las Naciones Unidas, tomar decisiones sobre resoluciones históricas reales y descubrir si tus decisiones te convierten en un aliado del sistema o en un agente rebelde.

🔗 **[JUGAR AHORA EN VIVO AQUÍ](https://jenedyjuarezm-ctrl.github.io/asiento-vacio/)**

---

## 🎯 ¿De qué trata?
El usuario asume la identidad de un **Agente** (con nombre clave personalizado) y elige una nación para representar. A lo largo de **7 resoluciones aleatorias**, el jugador debe decidir si aprueba, veta o se abstiene, sin saber cuál fue el voto oficial de su país en la vida real.

Al finalizar, el sistema ejecuta un **escaneo láser de seguridad**, analiza las decisiones del jugador mediante un **gráfico de radar (telaraña)** y le asigna un **Dossier Top Secret** con una **Misión Secreta** única basada en su comportamiento (Rebelde, Pacificador, Humanitario, etc.).

## ✨ Características Principales (Features)

*   **🕹️ Sistema de Identidad:** Registro de "Nombre Clave" del agente para personalizar la experiencia.
*   **🔄 Aleatoriedad de Resoluciones:** El juego cuenta con una base de datos de resoluciones históricas. Cada partida selecciona 7 al azar, garantizando que **nunca se juegue la misma simulación dos veces**.
*   **🛰️ Escáner Láser y Animación Satelital:** Interfaz inmersiva con fondo de circuitos animados y un escaneo de seguridad al final de la partida.
*   **📊 Gráfico Radar de Gestión:** Analiza el desempeño del agente en 4 ejes (Impacto Humanitario, Consenso Global, Rebeldía contra Potencias y Estabilidad).
*   **📜 Misiones Secretas Dinámicas:** El algoritmo asigna una de las 5 misiones clasificadas según el estilo de votación del jugador.
*   **🔗 Verificación de Datos en Tiempo Real:** Cada resolución incluye un enlace directo a los registros oficiales de la ONU para comprobar el voto real.

## 🧠 Fundamento Psicológico y de Diseño
Este producto fue diseñado aplicando principios de psicología del usuario y gamificación:
*   **Agencia:** El usuario toma decisiones reales con consecuencias simuladas.
*   **Curiosidad (Information Gap):** El suspenso de votar a ciegas antes de la revelación.
*   **Identidad:** El gancho de saber si coincides con tu gobierno y la personalización del "Agente".
*   **Recompensa Variable:** La asignación aleatoria de misiones secretas y resoluciones incentiva la rejugabilidad.
*   **Viralidad Integrada:** El diseño del "Dossier Top Secret" está optimizado para que el usuario quiera tomar una captura y compartirlo en redes sociales.

## 🛠️ Stack Tecnológico
*   **HTML5:** Estructura semántica y accesible.
*   **CSS3:** Diseño responsivo, variables CSS, efectos de *Glassmorphism* (cristal templado), animaciones en el fondo (circuitos) y diseño *Dark Mode*.
*   **JavaScript (Vanilla):** Lógica del juego, algoritmo de aleatoriedad y manejo de estado sin dependencias de frameworks.
*   **Chart.js:** Renderizado dinámico del gráfico de radar final.

## 📚 Fuentes y Veracidad de los Datos
Los datos de las resoluciones (números S/RES, resultados de las votaciones y abstenciones) están basados en registros oficiales y verificables:
*   [UN Digital Library](https://digitallibrary.un.org)
*   [UN Press (Comunicados oficiales de sesión)](https://www.un.org/press)
*   [Security Council Report](https://www.securitycouncilreport.org)

## 🚀 Cómo jugar en local
Si quieres clonar este repositorio y probarlo en tu computadora:
1. Descarga o clona el repositorio.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta un servidor local (por ejemplo, con Python):
   ```bash
   python3 -m http.server 8000



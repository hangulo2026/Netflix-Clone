// ============================================
// CONFIGURACIÓN — reemplaza con tu propia API key
// Consigue una gratis en: https://www.themoviedb.org/settings/api
// ============================================
const TMDB_API_KEY = "e3d9074f483a5f24a4761196cc36d671";
const TMDB_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=es-MX&page=1`;
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w300";

const contenedor = document.getElementById("peliculas");
const mensajeCarga = document.getElementById("mensaje-carga");

async function obtenerPeliculasPopulares() {
  try {
    const respuesta = await fetch(TMDB_URL);

    if (!respuesta.ok) {
      throw new Error(`Error de la API: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    mostrarPeliculas(datos.results);
  } catch (error) {
    console.error("No se pudo obtener el catálogo:", error);
    mensajeCarga.textContent =
      "No se pudo cargar el catálogo. Revisa tu API key en script.js.";
  }
}

function mostrarPeliculas(peliculas) {
  mensajeCarga.remove();

  peliculas.forEach((pelicula) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-pelicula";

    const poster = pelicula.poster_path
      ? `${IMG_BASE_URL}${pelicula.poster_path}`
      : "https://via.placeholder.com/300x450?text=Sin+imagen";

    tarjeta.innerHTML = `
      <img src="${poster}" alt="${pelicula.title}" />
      <p class="titulo">${pelicula.title}</p>
    `;

    contenedor.appendChild(tarjeta);
  });
}

obtenerPeliculasPopulares();

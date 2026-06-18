import { Inter } from "next/font/google";
import "../styles/globals.css";

// Inicializamos la fuente Inter indicando el subset latino
const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    // Aplicamos la clase de la fuente directamente al contenedor main
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
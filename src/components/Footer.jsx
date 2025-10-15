import '../styles/Footer.css';


export default function Footer() {
  return (
    <footer className="footer text-center py-3">
      <small>
        © {new Date().getFullYear()} PokéExplorer — Creado por Lautaro Fassi 💻<br />
    Construido con React+vite, Bootstrap, PokéAPI y mucho café ☕<br />
    Código abierto bajo licencia MIT

      </small>
    </footer>
  );
}
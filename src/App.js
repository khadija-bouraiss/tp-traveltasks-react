import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';
import Apropos from './components/Apropos';
import './App.css';

function App() {
  const [taches, setTaches] = useState([
    { id: 1, texte: " Réserver les billets d'avion", terminee: false },
    { id: 2, texte: " Trouver un hôtel", terminee: false },
    { id: 3, texte: " Préparer la valise", terminee: false },
  ]);

  // ===== FONCTIONS =====
  const ajouterTache = (texte) => {
    const nouvelleTache = {
      id: Date.now(),
      texte,
      terminee: false
    };
    setTaches([...taches, nouvelleTache]);
  };

  const changerEtat = (id) => {
    setTaches(
      taches.map((t) =>
        t.id === id ? { ...t, terminee: !t.terminee } : t
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((t) => t.id !== id));
  };

  // ===== PROGRESSION =====
  const tachesTerminees = taches.filter(t => t.terminee).length;
  const progression = taches.length === 0 ? 0 :
    Math.round((tachesTerminees / taches.length) * 100);

  // ===== MESSAGE SELON PROGRESSION =====
  const messageProgression = () => {
    if (taches.length === 0) return "✈️ Ajoute tes premières tâches !";
    if (progression === 0) return "🗺️ C'est parti, commence à préparer !";
    if (progression < 50) return "💪 Bon début, continue !";
    if (progression < 100) return "🔥 Tu y es presque !";
    return "🎉 Tout est prêt, bon voyage !";
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="contenu">

            <Accueil />

            <div className="card">
              <h2 className="section-titre">✈️ Mes tâches de voyage</h2>

              {/* ===== BARRE DE PROGRESSION ===== */}
              <div className="progression-bar">
                <div
                  className="progression-fill"
                  style={{ width: `${progression}%` }}
                />
              </div>
              <p className="progression-text">
                {messageProgression()} — {tachesTerminees}/{taches.length} ({progression}%)
              </p>

              {/* ===== FORMULAIRE ===== */}
              <TodoForm ajouterTache={ajouterTache} />

              {/* ===== LISTE ===== */}
              <TodoList
                taches={taches}
                changerEtat={changerEtat}
                supprimerTache={supprimerTache}
              />
            </div>

          </div>
        } />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

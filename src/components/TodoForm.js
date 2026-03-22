import { useState } from 'react';

function TodoForm({ ajouterTache }) {
    const [texte, setTexte] = useState('');

    const soumettreFormulaire = (e) => {
        e.preventDefault();
        if (texte.trim() === '') return;
        ajouterTache(texte);
        setTexte('');
    };

    return (
        <form onSubmit={soumettreFormulaire} className="todo-form">
            <input
                value={texte}
                onChange={(e) => setTexte(e.target.value)}
                placeholder=" Nouvelle tâche de voyage..."
                required
                className="todo-input"
            />
            <button type="submit" className="btn">
                ➕ Ajouter
            </button>
        </form>
    );
}

export default TodoForm;
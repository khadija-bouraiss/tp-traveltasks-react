import TodoItem from './TodoItem';

function TodoList({ taches, changerEtat, supprimerTache }) {
    if (taches.length === 0) {
        return (
            <p className="liste-vide">
                Aucune tâche pour l'instant. Planifie ton voyage !
            </p>
        );
    }

    return (
        <ul className="todo-list">
            {taches.map((tache) => (
                <TodoItem
                    key={tache.id}
                    tache={tache}
                    changerEtat={changerEtat}
                    supprimerTache={supprimerTache}
                />
            ))}
        </ul>
    );
}

export default TodoList;
function TodoItem({ tache, changerEtat, supprimerTache }) {
    return (
        <li className={`todo-item ${tache.terminee ? 'terminee' : ''}`}>
            <input
                type="checkbox"
                checked={tache.terminee}
                onChange={() => changerEtat(tache.id)}
                className="todo-checkbox"
            />
            <span
                className="todo-texte"
                style={{
                    textDecoration: tache.terminee ? 'line-through' : 'none',
                    opacity: tache.terminee ? 0.5 : 1,
                }}
            >
                {tache.texte}
            </span>
            <button
                onClick={() => supprimerTache(tache.id)}
                className="btn-supprimer"
            >

            </button>
        </li>
    );
}

export default TodoItem;

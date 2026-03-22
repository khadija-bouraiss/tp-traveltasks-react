function Apropos() {
    return (
        <div className="contenu">
            <div className="card">
                <h2 className="section-titre">ℹ️ À propos de TravelTasks</h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '16px' }}>
                    <strong>TravelTasks</strong> est une application React développée
                    dans le cadre du <strong>TP4</strong> du cours
                    <em> Développement Front-End moderne avec React</em>.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                    Elle permet d'organiser ses préparatifs de voyage grâce à une
                    interface moderne et intuitive.
                </p>
            </div>
        </div>
    );
}

export default Apropos;
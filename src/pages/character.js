const character = () => {
    const view = `
        <div class="character-inner">
            <article class="character-card">
                <img src="image" alt="name">
                <h2>Name</h2>
            </article>
            <article class="character-card">
                <h3>Episodes:</h3>
                <h3>Status:</h3>
                <h3>Species:</h3>
                <h3>Genger:</h3>
                <h3>Origin:</h3>
                <h3>Last Location:</h3>
            </article>
        </div>
    `
    return view
}

export default character
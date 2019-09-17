function Load() {
    document.getElementById("SaveEntry").addEventListener("click", function(event) {
        const container = document.getElementById("wishList")
        const item = document.getElementById("thing").value
        const location = document.getElementById("wheretobuy").value
        container.innerHTML += `
            <section>
                <h2>I can purchase ${item} at ${location}</h2>
            </section>
        `
    })
}

document.addEventListener("DOMContentLoaded", function() {

   
    const topBtn = document.getElementById('backToTop');
    if (topBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                topBtn.style.display = 'block';
            } else {
                topBtn.style.display = 'none';
            }
        });
        
        topBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    const xmlTableBody = document.getElementById('xml-table-body');
    if (xmlTableBody) {
        const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
        <catalogo>
            <jogo id="j01">
                <titulo>Dragon Ball Z Budokai Tenkaichi 3</titulo>
                <consola>PlayStation 2</consola>
                <ano>2007</ano>
                <genero>Luta</genero>
                <produtora>Spike</produtora>
            </jogo>
            <jogo id="j02">
                <titulo>Digimon World</titulo>
                <consola>PlayStation</consola>
                <ano>2001</ano>
                <genero>RPG</genero>
                <produtora>Bandai</produtora>
            </jogo>
            <jogo id="j03">
                <titulo>Pokémon Silver</titulo>
                <consola>Game Boy Color</consola>
                <ano>2001</ano>
                <genero>RPG</genero>
                <produtora>Game Freak</produtora>
            </jogo>
            <jogo id="j04">
                <titulo>Yu-Gi-Oh Forbidden Memories</titulo>
                <consola>Playstation</consola>
                <ano>2002</ano>
                <genero>Cartas</genero>
                <produtora>Konami</produtora>
            </jogo>
        </catalogo>`;

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const jogos = xmlDoc.getElementsByTagName('jogo');
        
        for (let i = 0; i < jogos.length; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${jogos[i].getElementsByTagName('titulo')[0].textContent}</td>
                             <td>${jogos[i].getElementsByTagName('consola')[0].textContent}</td>
                             <td>${jogos[i].getElementsByTagName('ano')[0].textContent}</td>
                             <td>${jogos[i].getElementsByTagName('genero')[0].textContent}</td>
                             <td>${jogos[i].getElementsByTagName('produtora')[0].textContent}</td>`;
            xmlTableBody.appendChild(row);
        }
    }

   
    const formulario = document.getElementById("meu-formulario");
    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            event.preventDefault(); 
            
           
            formulario.innerHTML = `
                <div style="background-color: #1e293b; padding: 30px; border-radius: 8px; text-align: center; border: 2px solid #38bdf8; color: #f8fafc;">
                    <h2 style="color: #fbbf24; margin-top: 0;">Feedback Enviado! 🎮</h2>
                    <p style="font-size: 1.1em;">Muito obrigado pela sua opinião. A sua mensagem foi registada com sucesso.</p>
                </div>
            `;
        });
    }
});document.addEventListener("DOMContentLoaded", function() {

    
    const topBtn = document.getElementById('backToTop');
    if (topBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                topBtn.style.display = 'block';
            } else {
                topBtn.style.display = 'none';
            }
        });
        
        topBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

   
    const xmlTableBody = document.getElementById('xml-table-body');
    if (xmlTableBody) {
        const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
        <catalogo>
            <jogo id="j01">
                <titulo>Dragon Ball Z Budokai Tenkaichi 3</titulo>
                <consola>PlayStation 2</consola>
                <ano>2007</ano>
                <genero>Luta</genero>
                <produtora>Spike</produtora>
            </jogo>
            <jogo id="j02">
                <titulo>Digimon World</titulo>
                <consola>PlayStation</consola>
                <ano>2001</ano>
                <genero>RPG</genero>
                <produtora>Bandai</produtora>
            </jogo>
            <jogo id="j03">
                <titulo>Pokémon Silver</titulo>
                <consola>Game Boy Color</consola>
                <ano>2001</ano>
                <genero>RPG</genero>
                <produtora>Game Freak</produtora>
            </jogo>
            <jogo id="j04">
                <titulo>Yu-Gi-Oh Forbidden Memories</titulo>
                <consola>Playstation</consola>
                <ano>2002</ano>
                <genero>Cartas</genero>
                <produtora>Konami</produtora>
            </jogo>
        </catalogo>`;

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const jogos = xmlDoc.getElementsByTagName('jogo');
        
        for (let i = 0; i < jogos.length; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${jogos[i].getElementsByTagName('titulo')[0].textContent}</td>
                             <td>${jogos[i].getElementsByTagName('consola')[0].textContent}</td>
                             <td>${jogos[i].getElementsByTagName('ano')[0].textContent}</td>
                             <td>${jogos[i].getElementsByTagName('genero')[0].textContent}</td>
                             <td>${jogos[i].getElementsByTagName('produtora')[0].textContent}</td>`;
            xmlTableBody.appendChild(row);
        }
    }


    const formulario = document.getElementById("meu-formulario");
    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            event.preventDefault();
            
          
            formulario.innerHTML = `
                <div style="background-color: #1e293b; padding: 30px; border-radius: 8px; text-align: center; border: 2px solid #38bdf8; color: #f8fafc;">
                    <h2 style="color: #fbbf24; margin-top: 0;">Feedback Enviado! 🎮</h2>
                    <p style="font-size: 1.1em;">Muito obrigado pela sua opinião. A sua mensagem foi registada com sucesso.</p>
                </div>
            `;
        });
    }
});

const nomes = ["Ana", "Anabelly", "Maria", "Gabi", "Talisson", "Gustavo", "Yasmin"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
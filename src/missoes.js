const missoesIniciais = [
    { id: 1, nome: 'apollo 11', ano: 1969, agencia: 'NASA', status: 'concluida'},
    { id: 2, nome: ' voyager 1', ano: 1977, agencia: 'NASA', status: 'em operacao'},
    { id: 3, nome: 'artemis', ano: 2026, agencia: 'NASA', status: 'planejada'},
    { id: 4, nome: 'sputnik', ano: 1957, agencia: 'URSS', status: 'concluida'},
    { id: 5, nome: 'chandrayaan-3', ano: 2023, agencia: 'ISRO', status: 'concluida'},
    { id: 6, nome: ' hubble', ano: 1990, agencia: 'NASA/ESA', status: 'em operacao'},
]
const missoes = []

function resetar() {
    missoes.length = 0
    missoesIniciais.forEach((m)=> missoes.push({...m}))
}

resetar()
export default missoes = {missoes,resetar}
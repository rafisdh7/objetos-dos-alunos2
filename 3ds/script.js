document.addEventListener('DOMContentLoaded', function() {
    fetch('alunos.json')
        .then(response => response.json())
        .then(data => {
            const alunosBody = document.getElementById('alunos-body');

            data.forEach(aluno => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${aluno.nome}</td>
                    <td>${aluno.idade}</td>
                    <td>${aluno.curso}</td>
                    <td>${aluno.matricula}</td>
                `;
                alunosBody.appendChild(row);
            });
        })
        .catch(error => console.error('Erro ao carregar alunos:', error));
});
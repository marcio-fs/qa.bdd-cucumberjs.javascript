class Pessoa {

    /**
   * @description Verifica se o indivíduo possui idade legal para consumo de álcool
   * @param {number} idade - valor numérico representando a idade em anos
   * @returns {boolean} true se idade >= 18, false caso contrário
   * @throws {Error} Error se idade não for um número inteiro, negativo ou vazio
   */
    ehMaiorDeIdade(idade) {
        // // Verificar se 'idade' é um número inteiro  
        if (!Number.isInteger(idade)) {
            throw new Error('Idade deve ser um número inteiro');
        }

         // Validar que 'idade' é um número inteiro, não negativo e não vazio  
        if (idade < 0 || idade === undefined || idade === null) {
            throw new Error('Idade deve ser positiva e não vazia');
        }
        
    // Verificar se idade é 18 ou mais
        return idade >= 18;
    }
}
export default Pessoa;
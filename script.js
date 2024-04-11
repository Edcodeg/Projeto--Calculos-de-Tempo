// Define a data de início como 11 de abril de 2024
const startDate = new Date('2024-04-11');
// Define a data de término como 10 de setembro de 2027
const endDate = new Date('2027-09-10');

// Função para calcular a diferença de dias entre duas datas
function calculateDaysDifference(startDate, endDate) {
  // Verifica se ambas as datas são válidas
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return 'Invalid dates';
  }

  // Verifica se a data de término é posterior à data de início
  if (endDate < startDate) {
    return 'End date must be after start date';
  }

  // Converte as datas para o formato de milissegundos e calcula a diferença
  const timeDifferenceInMilliseconds = Math.abs(endDate - startDate);
  // Calcula a diferença em dias dividindo a diferença de tempo em milissegundos pelo número de milissegundos em um dia
  const daysDifference = Math.ceil(timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24));
  // Retorna a diferença em dias
  return daysDifference;
}

// Calcula a diferença de dias chamando a função calculateDaysDifference
const daysDifference = calculateDaysDifference(startDate, endDate);

// Exibe a diferença de dias entre as duas datas no console
console.log(`There are ${daysDifference} days between the two dates.`);

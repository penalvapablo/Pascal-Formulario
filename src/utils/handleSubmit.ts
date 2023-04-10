import generateBuget from './generateBudget';
import sendFormspree from './sendFormspree';

function handleSubmit(event: Event, setResult: React.Dispatch<React.SetStateAction<string>> ): void {
  event.preventDefault();
  
  const myForm = event.target as HTMLFormElement;
  const data = new FormData(myForm);


  // extraigo trabajos seleccionados del formulario
  const selectedOptions = data.getAll(`Ausgewählte Reparaturen`);

  // genero presupuesto con trabajos seleccionados
  const budget = generateBuget(selectedOptions);


  // Numero de pedido
  const numeroPedido = Math.floor(Math.random() * 1000000);

  data.append('Bestellnummer', numeroPedido.toString());
  data.append('Berechnung der Reparaturkosten', `€ ${budget.toString()}`);

  // for (const [name, value] of data) {
  //   console.log(`${name} = ${value}`);
  // }

  sendFormspree(event, data, setResult);
}

export default handleSubmit;

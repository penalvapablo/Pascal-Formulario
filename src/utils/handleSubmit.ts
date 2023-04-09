import generateBuget from './generateBudget';
import getSelectedOptions from './getSelectedOptions';
import sendFormspree from './sendFormspree';

function handleSubmit(event: Event, setResult: React.Dispatch<React.SetStateAction<string>> ): void {
  event.preventDefault();
  
  const myForm = event.target as HTMLFormElement;
  const data = new FormData(myForm);


  // extraigo trabajos seleccionados del formulario
  const selectedOptions = data.getAll(`trabajo`);
  console.log(selectedOptions);

  // genero presupuesto con trabajos seleccionados
  // const budget = generateBuget(selectedOptions);

  // Numero de pedido
  const numeroPedido = Math.floor(Math.random() * 1000000);

  data.append('numero de pedido', numeroPedido.toString());
  // data.append('presupuesto', budget.toString());

  for (const [name, value] of data) {
    console.log(`${name} = ${value}`);
  }

  // sendFormspree(event, data, setResult);
}

export default handleSubmit;

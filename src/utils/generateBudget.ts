import { trabajos  } from '../components/trabajos.json'

interface Trabajo {
  nombre: string;
  precio: number;
}
console.log({trabajos});


// const trabajos: Trabajo[] = [
//   { nombre: 'option1', precio: 10 },
//   { nombre: 'option2', precio: 20 },
//   { nombre: 'option3', precio: 30 },
// ];

function generateBudget(selectedOptions: FormDataEntryValue[]): number {
  return trabajos.reduce(
    (total: number, trabajo: Trabajo) => {
      const { nombre, precio } = trabajo;

      if (selectedOptions.includes(nombre)) {
        return total + precio;
      } else {
        return total;
      }
    },
    0
  );
}

export default generateBudget;

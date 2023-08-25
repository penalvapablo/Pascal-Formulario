import { trabajos  } from '../components/old/trabajos.json'

interface Trabajo {
  nombre: string;
  precio: number;
}

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

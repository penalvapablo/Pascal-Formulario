function getSelectedOptions(data: FormData): string[] {
  const selectedOptions = data.getAll(`trabajo`)  ;
  console.log(selectedOptions);
//   for (let i = 1; i <= 3; i++) {
//     const option = data.getAll(`trabajo`);
// console.log(option);
//     // option && selectedOptions.push(option.toString());
//   }
//   return selectedOptions;
}

export default getSelectedOptions;

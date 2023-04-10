function sendFormspree(event: Event, data: FormData, setResult:React.Dispatch<React.SetStateAction<string>>): void {
  fetch((event.target as HTMLFormElement).action, {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log('Thanks for your submission!');
        setResult('succeded')
      } else {
        response.json().then((data) => {
          if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
            const errors = data['errors']
              .map((error: any) => error['message'])
              .join(', ');
            // console.log(errors);
            setResult('error')
          } else {

            setResult('error')
          }
        });
      }
    })
    .catch((error) => {
      console.log(error);
      setResult('error')
    });
}

export default sendFormspree;

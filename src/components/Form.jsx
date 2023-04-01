import React from 'react';
import { ValidationError } from '@formspree/react';

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.target;
    const data = new FormData(myForm);

    fetch('http://localhost:3000/api/handler', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        console.log('object');
      }
    });

    // fetch(event.target.action, {
    //   method: 'POST',
    //   body: data,
    //   headers: {
    //     Accept: 'application/json',
    //   },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       console.log('Thanks for your submission!');
    //       // form.reset();
    //     } else {
    //       response.json().then((data) => {
    //         if (Object.hasOwn(data, 'errors')) {
    //           const errors = data['errors']
    //             .map((error) => error['message'])
    //             .join(', ');
    //           console.log(errors);
    //         } else {
    //           console.log(
    //             'Oops! There was a problem submitting your form'
    //           );
    //         }
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xdovlqkp"
      className="flex h-[600px] flex-col justify-between bg-red-200 p-10 ">
      <fieldset>
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          id="email"
          type="email"
          name="email"
        />
        <ValidationError
          prefix="Email"
          field="email"
        />
      </fieldset>

      <fieldset>
        <p>
          <label htmlFor="opcion1">
            opcion1:{' '}
            <input
              type="checkbox"
              name="opcion1"
              value="opcion1"
              id="opcion1"
            />
          </label>
        </p>
        <p>
          <label htmlFor="opcion2">
            opcion2:{' '}
            <input
              type="checkbox"
              name="opcion2"
              value="opcion2"
              id="opcion2"
            />
          </label>
        </p>
        <p>
          <label htmlFor="opcion3">
            opcion3:{' '}
            <input
              type="checkbox"
              name="opcion3"
              value="opcion3"
              id="opcion3"
            />
          </label>
        </p>
      </fieldset>

      <fieldset>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
        />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

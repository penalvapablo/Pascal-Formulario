import React from 'react';

const Form = () => {
  return (
    <form
      id="fs-frm"
      name="survey-form"
      accept-charset="utf-8"
      action="https://formspree.io/f/{form_id}"
      method="post"
      class="flex flex-col">
      <fieldset
        id="fs-frm-inputs"
        class="flex flex-col">
        <label
          for="full-name"
          class="mt-4">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
          class="mt-4"
          required=""
        />
        <label
          for="email-address"
          class="mt-4">
          Email Address
        </label>
        <input
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="email@domain.tld"
          class="mt-4"
          required=""
        />
        <fieldset
          id="fs-frm-selects"
          class="flex flex-col">
          <label
            for="timely"
            class="mt-4">
            1. The service provided was completed in a
            timely manner.
          </label>
          <input
            type="checkbox"
            name="opcion1"
            value="opcion1"
            id="timely"
          />{' '}
          Opción 1
          <input
            type="checkbox"
            name="opcion2"
            value="opcion2"
            id="timely"
          />{' '}
          Opción 2<br />
          <input
            type="checkbox"
            name="opcion3"
            value="opcion3"
            id="timely"
          />{' '}
          Opción 3<br />
          <input
            type="checkbox"
            name="opcion4"
            value="opcion4"
            id="timely"
          />{' '}
          Opción 4<br />
          <input
            type="checkbox"
            name="opcion5"
            value="opcion5"
            id="timely"
          />{' '}
          Opción 5<br />
          {/* <select
            name="timely"
            id="timely"
            required="">
            <option
              value=""
              selected=""
              disabled="">
              Choose
            </option>
            <option value="1">Strongly Agree</option>
            <option value="3">Agree</option>
            <option value="5">Neutral</option>
            <option value="7">Disagree</option>
            <option value="9">Strongly Disagree</option>
          </select> */}
          <label
            for="timely"
            class="mt-4">
            2. The quality of work was high in quality.
          </label>
          <select
            name="quality"
            id="quality"
            class="mt-4"
            required="">
            <option
              value=""
              selected=""
              disabled=""
              class="mt-4">
              Choose
            </option>
            <option value="1">Strongly Agree</option>
            <option value="3">Agree</option>
            <option value="5">Neutral</option>
            <option value="7">Disagree</option>
            <option value="9">Strongly Disagree</option>
          </select>
        </fieldset>
        <label
          for="message"
          class="mt-4">
          Additional Comments
        </label>
        <textarea
          rows="3"
          name="message"
          id="message"
          placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
          required=""></textarea>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Survey Responses"
        />
      </fieldset>
      <input
        type="submit"
        value="Send Responses"
      />
    </form>
  );
};

export default Form;

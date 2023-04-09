import React, { useState } from 'react';
import handleSubmit from '../utils/handleSubmit';
import { trabajos } from './trabajos.json';

const Form = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <>
      {result === 'succeded' && <p>PIOLA</p>}
      {result === 'error' && (
        <p>Revise que sus datos sean correctos</p>
      )}

      <form
        onSubmit={(event) => handleSubmit(event, setResult)}
        encType="multipart/form-data"
        action="https://formspree.io/f/xdovlqkp"
        className="bg-red-200 flex  flex-col justify-between p-10 ">
        <fieldset className="mx-auto flex w-full flex-col ">
          <label
            htmlFor="name"
            className="font-serif text-xl tracking-wider text-two ">
            Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            className="mt-1 mb-2  h-10 appearance-none rounded-lg bg-one px-2 py-1 font-serif text-lg tracking-wider text-two focus:outline-none"
          />
          <label
            htmlFor="email"
            className="font-serif text-xl tracking-wider text-two ">
            Email Address
          </label>

          <input
            id="email"
            type="email"
            name="email"
            className="mt-1 mb-2  h-10 appearance-none rounded-lg bg-one px-2 py-1 font-serif text-lg tracking-wider text-two focus:outline-none"
          />
          <label
            htmlFor="phone"
            className="font-serif text-xl tracking-wider text-two ">
            Phone number
          </label>

          <input
            id="phone"
            type="tel"
            name="phone"
            className="mt-1 mb-2  h-10 appearance-none rounded-lg bg-one px-2 py-1 font-serif text-lg tracking-wider text-two focus:outline-none"
          />
        </fieldset>

        <h2 className=" mt-5 mb-2 border-b-4 border-one font-serif text-xl tracking-wider">
          Choose the job
        </h2>
        <fieldset className="flex flex-col ">
          {trabajos.map((trabajo) => {
            const id = trabajos.indexOf(trabajo) + 1;
            return (
              <label
                key={id}
                className="mb-1 flex justify-between font-serif text-lg tracking-wider text-two ">
                {trabajo.nombre}:{'  '}
                <input
                  type="checkbox"
                  name="trabajo"
                  value={trabajo.nombre}
                />
              </label>
            );
          })}
        </fieldset>

        <fieldset className="mx-auto my-10 flex w-full flex-col">
          <label
            htmlFor="message"
            className="mb-3 font-serif text-xl tracking-wider text-two ">
            Leave a message
          </label>
          <textarea
            id="message"
            name="message"
            className="h-32"
          />
        </fieldset>

        <fieldset>
          <button
            type="button"
            className="text-black mx-auto block w-[90%] transform rounded bg-[#FEDF7E] py-2 px-4 font-bold text-two duration-300 hover:bg-[#d8bc68]"
            onClick={() => {
              document.getElementById('imageInput').click();
            }}>
            Upload Image
          </button>
          <input
            type="file"
            id="imageInput"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
            />
          )}
        </fieldset>

        <button
          type="submit"
          className="text-black mx-auto mt-10 block w-[90%] transform rounded bg-[#FEDF7E] py-2 px-4 font-bold text-two duration-300 hover:bg-[#d8bc68] ">
          Send
        </button>
      </form>
    </>
  );
};

export default Form;

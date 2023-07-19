import React, { useState } from 'react';
import handleSubmit from '../utils/handleSubmit';
import { trabajos } from './trabajos.json';
import Succes from './Succes';
import Error from './Error';

const Form = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const require = true;

  if (typeof window !== 'undefined') {
    result != null
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <>
      {result === 'succeded' && <Succes />}
      {result === 'error' && (
        <Error setResult={setResult} />
      )}

      <form
        onSubmit={(event) => handleSubmit(event, setResult)}
        encType="multipart/form-data"
        action="https://formspree.io/f/xdovlqkp"
        className="bg-red-200 flex  flex-col justify-between py-10 px-4 ">
        <fieldset className="mx-auto flex w-full flex-col ">
          <label
            htmlFor="name"
            className="font-serif text-xl tracking-wider text-two ">
            Vor und Nachname
          </label>

          <input
            id="name"
            required={require}
            type="text"
            name="Name"
            className="mt-1 mb-2  h-10 appearance-none rounded-lg bg-one px-2 py-1 font-serif text-lg tracking-wider text-two focus:outline-none"
          />
          <label
            htmlFor="email"
            className="font-serif text-xl tracking-wider text-two ">
            E-Mail
          </label>

          <input
            id="email"
            type="email"
            required={require}
            name="E-Mail"
            className="mt-1 mb-2  h-10 appearance-none rounded-lg bg-one px-2 py-1 font-serif text-lg tracking-wider text-two focus:outline-none"
          />
          <label
            htmlFor="phone"
            className="font-serif text-xl tracking-wider text-two ">
            Handynummer
          </label>

          <input
            id="phone"
            type="tel"
            required={require}
            name="Handynummer"
            className="mt-1 mb-2  h-10 appearance-none rounded-lg bg-one px-2 py-1 font-serif text-lg tracking-wider text-two focus:outline-none"
          />
          <label
            htmlFor="address"
            className="font-serif text-xl tracking-wider text-two ">
            Vollständige Adresse
          </label>

          <input
            id="address"
            required={require}
            type="text"
            name="Adresse"
            className="mt-1 mb-2  h-10 appearance-none rounded-lg bg-one px-2 py-1 font-serif text-lg tracking-wider text-two focus:outline-none"
          />
        </fieldset>

        <h2 className=" mt-5 mb-2 border-b-4 border-one font-serif text-xl tracking-wider">
          Wähle hier den gewünschten Service. <br /> L =
          Links R = Rechts <br />
          Bitte fülle für jedes Paar Reitstiefel,
          Einzelstiefel, Stallschuh oder Chap ein separates
          Formular aus! <br />
          Für die Videobeschreibung klicke bitte auf den
          jeweiligen Service!
        </h2>
        <fieldset className="flex flex-col ">
          {trabajos.map((trabajo) => {
            const id = trabajos.indexOf(trabajo) + 1;
            return (
              <label
                key={id}
                className="mb-1 flex flex-wrap items-center justify-between font-serif text-base tracking-wider text-two">
                <div className="flex gap-2">
                  <a
                    href={trabajo.link}
                    rel="noreferrer"
                    target={'_blank'}
                    aria-label="link to youtube"
                    className="underline">
                    {trabajo.nombre}
                  </a>
                  {/* <p className="font-sans">
                    {' '}
                    - €{trabajo.precio.toFixed(2)}
                  </p> */}
                </div>
                <div className="flex  justify-end gap-4">
                  {/* Definitivo, cuando haya links a algunos videos */}
                  {/* {trabajo.link && (
                    <a
                      href={trabajo.link}
                      rel="noreferrer"
                      target={'_blank'}
                      aria-label="link to youtube"
                      className="">
                      🎬
                    </a>
                  )} */}
                  {/* Definitivo, cuando haya links a algunos videos */}

                  {/* DE PRUEBA */}
                  {/* <a
                    href="https://www.youtube.com/watch?v=VyKFdHIByyE&t=2s&ab_channel=Townsends"
                    rel="noreferrer"
                    target={'_blank'}
                    aria-label="link to youtube"
                    className="items-baseline text-sm">
                    {'click -> 🎬'}
                  </a> */}
                  {/* DE PRUEBA */}
                  <input
                    type="checkbox"
                    name="Ausgewählte Reparaturen"
                    value={trabajo.nombre}
                  />
                </div>
              </label>
            );
          })}
        </fieldset>

        <fieldset className="mx-auto mt-9 flex w-full flex-col ">
          <label
            htmlFor="Modell/Hersteller"
            className="font-serif text-xl tracking-wider text-two ">
            Modell/Hersteller
          </label>

          <input
            id="Modell/Hersteller"
            required={require}
            type="text"
            name="Modell/Hersteller"
            className="mt-1 mb-2  h-10 appearance-none rounded-lg bg-one px-2 py-1 font-serif text-lg tracking-wider text-two focus:outline-none"
          />
          {/* <label
            htmlFor="Größe"
            className="font-serif text-xl tracking-wider text-two ">
            Größe
          </label>

          <input
            id="Größe"
            required={require}
            type="text"
            name="Größe"
            className="mt-1 mb-2  h-10 appearance-none rounded-lg bg-one px-2 py-1 font-serif text-lg tracking-wider text-two focus:outline-none"
          /> */}
        </fieldset>

        <fieldset className="mx-auto my-10 flex w-full flex-col">
          <label
            htmlFor="message"
            className="mb-3 font-serif text-xl tracking-wider text-two ">
            Bitte schreibe mir hier alle notwendigen
            Informationen die ich benötige auf
          </label>
          <textarea
            id="message"
            name="Nachricht"
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
            Datei hochladen
          </button>
          <input
            type="file"
            id="imageInput"
            name="Bild"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="mx-auto h-40"
            />
          )}
        </fieldset>
        <p className="mb-3 mt-6 font-serif text-xl tracking-wider text-two">
          Dies ist keine verbindliche Bestellung, sondern
          nur eine Anfrage. Nach dem Absenden des Formulars
          melde ich mich per E-mail so schnell wie möglich
          bei dir
        </p>
        <button
          type="submit"
          className="text-black mx-auto mt-5 block w-[90%] transform rounded bg-[#FEDF7E] py-2 px-4 font-bold text-two duration-300 hover:bg-[#d8bc68] ">
          Senden
        </button>
      </form>
    </>
  );
};

export default Form;

import React, { useState } from 'react';
import handleSubmit from '../utils/handleSubmit';
import { trabajos } from './trabajos-nuevo.json';
import Succes from './old/Succes';
import Error from './old/Error';

const Form = () => {
  return (
    <main>
      <p className="pt-10 font-serif text-base tracking-wider text-two">
        Wenn Ihr mir Eure Reitstiefel schicken wollt oder
        Fragen habt, dann schreibt mich bitte über WhatsApp
        an. Das Thema Reitstiefel ist so individuell, das es
        nur über eine Persönliche Beratung geht.
        <br />
        <br /> Meine Werkstatt befindet sich in den
        Niederlanden an der Grenze zwischen Heinsberg und
        Aachen. Um die Versandkosten niedrig zu halten
        arbeite ich mit einer Deutschen DHL Postfiliale
        zusammen.
        <br />
        <br /> Hier unten habt Ihr eine kleine Übersicht
        über meinen Service. Einfach draufklicken und Ihr
        seht ein kurzes Video.
        <br />
        <br /> Hier meine Handynummer: 0031615460226
        <br />
        <br /> Euer Reitstiefeldoktor,
        <br /> Pascal Everhardt
      </p>

      <div className="mt-10 flex flex-col gap-1">
        {trabajos.map((trabajo) => {
          const id = trabajos.indexOf(trabajo) + 1;
          return (
            <a
              key={id}
              href={trabajo.link}
              rel="noreferrer"
              target={'_blank'}
              aria-label="link to youtube"
              className="font-serif text-base tracking-wider text-two underline">
              {trabajo.nombre}
            </a>
          );
        })}
      </div>
    </main>
  );
};

export default Form;

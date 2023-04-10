import React from 'react';

const Error = ({ setResult }) => {
  return (
    <div className="fixed left-1/2 top-1/2 z-10 h-screen w-screen translate-x-[-50%] translate-y-[-50%]  bg-two/50">
      <div className="absolute left-1/2 top-1/2 flex w-80 translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center bg-two p-3">
        <p className="text-center font-serif text-2xl text-one ">
          Prüfen Sie, ob Ihre Daten in Ordnung sind und
          versuchen Sie es erneut. Wenn das Problem
          weiterhin besteht, kontaktieren Sie mich über
          Whatsapp
        </p>
        <button
          onClick={() => {
            setResult(null);
          }}
          className="mt-4 w-[90%] rounded bg-one text-center text-2xl text-two">
          Zurück
        </button>
      </div>
    </div>
  );
};

export default Error;

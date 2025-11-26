import React from 'react';

const CtaSection = () => {
  return (
    <div className="mt-6 flex flex-col items-start gap-6">
      <p className="font-body text-base font-normal text-text-primary">
        Learn more about RetailGenie{' '}
        <a
          href="https://www.unabandon.ai/retailgenie"
          className="text-brand-green underline hover:opacity-80 transition-opacity"
        >
          here
        </a>.
      </p>
      <a
        href="https://retailgenie.unabandon.ai/register/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-8 py-4 font-body text-sm font-semibold uppercase leading-none text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Register Here!
      </a>
    </div>
  );
};

export default CtaSection;
import React from 'react';
import Footer from '../../components/Footer';
import './story.css';
const Novel = () => {
  return (
    <>
      <div className=" bg-primary">
        <div className="introduction-wrapper">
          <div className="max-w-1200px m-auto flex flex-col justify-center items-center">
            <div className="text-7xl mt-60 mb-100px max-w-900px">νόμος(nomos)</div>
            <div className="min-w-1000px text-left mb-64 ">
              <p className="mb-6">23rd century CE.</p>
              <p className="mb-6">
                The trust between humans has changed the original contract system and replaced it with a body of code called smart contracts. The spirit of contract has gradually failed, because all
                people trust machines more than humans, and all that remains is unrelenting suspicion, thus overturning the traditional collaboration model...
              </p>
              <p className="mb-6">
                {' '}
                In the world of ants, they collaborate in parallel, and in the era of contracts, they can also exist in parallel, all they need to do is to complete the corresponding bounty task, the
                smart contract will give judgment and settle the reputation in the virtual world, thus determining the value of the individual, humans no longer need currency, reputation, is a
                particle in this virtual world, and it exists in the planet Πανδώρα.
              </p>
              <p className="mb-6">Πανδώρα, an unknown space belonging to all humans, which is gradually being explored...</p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Novel;

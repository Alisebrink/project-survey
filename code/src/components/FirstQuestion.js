import React from 'react';

const venues = [
  'Smaller inside venue',
  'Larger inside venue',
  'Smaller outside venue',
  'Larger outside venue',
];

const FirstQuestion = ({ arenaChoice, onArenaChoiceSet, onStepChange, onAmountChoiceSet }) => {
  return (
    <form className="arena-choice">
      <h1>What kind of venue would you like to be in?</h1>
      {venues.map(
        (
          venue //iterating through each ticketType array
        ) => (
          <label key={venue}>
            <input
              value={venue}
              onChange={onArenaChoiceSet}
              checked={arenaChoice === venue}
              type="radio"
              id="small-inside"
            />
            {venue}
          </label>
        )
      )}

      <h2>How many tickets would you like?</h2>
      <label htmlFor="amount">
        Pick amount:
        <input onChange={onAmountChoiceSet} type="number" id="amount" name="amount-of-tickets" min="1" max="10" />
      </label>

      <button className="button" onClick={onStepChange}>
        Next question
      </button>
    </form>
  );
};

export default FirstQuestion;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addAllergy } from '../../actions/allergy';

const AllergyForm = ({ addAllergy }) => {
  const [allergyName, setAllergyName] = useState('');
  const [allergyCategory, setAllergyCategory] = useState('');
  const [critical, setCritical] = useState('');
  const [encounterDate, setEncounterDate] = useState('');
  const [encounterAge, setEncounterAge] = useState('');
  const [lastOccurence, setLastOccurence] = useState('');
  const [reaction, setReaction] = useState('');
  const [cure, setCure] = useState('');
  const [exposureRoute, setExposureRoute] = useState('');
  const [note, setNote] = useState('');

  return (
    <div className='post-form'>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addAllergy({ allergyName,allergyCategory,critical,encounterDate,encounterAge,lastOccurence,reaction,cure,exposureRoute, note});
          setAllergyName('');
          setAllergyCategory('');
          setEncounterAge('')
          setEncounterDate('')
          setCritical('')
          setLastOccurence('')
          setReaction('')
          setCure('')
          setExposureRoute('')
          setNote('');
          
        }}
      >
        <input
          name='allergyName'
          placeholder='Allergy Name'
          value={allergyName}
          onChange={e => setAllergyName(e.target.value)}
          required
        />

        <br></br>
        <input
          name='allergyCategory'
          placeholder='Allergy Category'
          value={allergyCategory}
          onChange={e => setAllergyCategory(e.target.value)}
          required
        />

        <br></br>
        <input
          name='critical'
          placeholder='Criticality'
          value={critical}
          onChange={e => setCritical(e.target.value)}
          required
        />

<br></br>
        <input
          name='encounterDate'
          placeholder='Encounter Date'
          value={encounterDate}
          onChange={e => setEncounterDate(e.target.value)}
          required
        />


<br></br>
        <input
          name='encounterAge'
          placeholder='Encounter Age'
          value={encounterAge}
          onChange={e => setEncounterAge(e.target.value)}
          required
        />
        <br></br>

        <input
          name='lastOccurence'
          placeholder='Last Occurence'
          value={lastOccurence}
          onChange={e => setLastOccurence(e.target.value)}
          required
        />
        <br></br>

        <input
          name='reaction'
          placeholder='Reaction'
          value={reaction}
          onChange={e => setReaction(e.target.value)}
          required
        />
        <br></br>

        <input
          name='cure'
          placeholder='Cure / Prescribed Medicine'
          value={cure}
          onChange={e => setCure(e.target.value)}
          required
        />
        <br></br>
        
        <input
          name='exposureRoute'
          placeholder='Exposure Route'
          value={exposureRoute}
          onChange={e => setExposureRoute(e.target.value)}
          required
        />
        <br></br>
        <input
          name='note'
          placeholder='Note'
          value={note}
          onChange={e => setNote(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

AllergyForm.propTypes = {
    addAllergy: PropTypes.func.isRequired
};

export default connect(
  null,
  { addAllergy }
)(AllergyForm);



import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [vaccineName, setVaccineName] = useState('');
  const [vaccineManufacturerName, setVaccineManufacturerName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [lotNumber, setLotNumber] = useState('');
  const [doseQty, setDoseQty] = useState('');
  const [performerName, setPerformerName] = useState('');
  const [institutionName, setInstitutionName] = useState('');
  const [institutionType, setInstitutionType] = useState('');
  const [location, setLocation] = useState('');
  const [note, setNote] = useState('');

  return (
    <div className='post-form'>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ vaccineName,vaccineManufacturerName,expiryDate,lotNumber,doseQty,performerName,institutionName ,institutionType,location,note});
          setVaccineName('');
          setVaccineManufacturerName('');
          setExpiryDate('');
          setLotNumber('');
          setDoseQty('');
          setPerformerName('');
          setInstitutionName ('');
          setInstitutionType ('');
          setLocation('');
          setNote('');
        }}
      >
        <input
          name='vaccineName'
          placeholder='Vaccine Name'
          value={vaccineName}
          onChange={e => setVaccineName(e.target.value)}
          required
        />
        <br></br>
        <input
          name='vaccineManufacturerName'
          placeholder='Vaccine Manufacturer Name'
          value={vaccineManufacturerName}
          onChange={e => setVaccineManufacturerName(e.target.value)}
          required
        />
        <br></br>
        <input
          name='expiryDate'
          placeholder='Expiry Date'
          value={expiryDate}
          onChange={e => setExpiryDate(e.target.value)}
          required
        />
        <br></br>
        <input
          name='lotNumber'
          placeholder='Batch/Lot Number'
          value={lotNumber}
          onChange={e => setLotNumber(e.target.value)}
          required
        />
        <br></br>
        <input
          name='doseQty'
          placeholder='Dose Quantity'
          value={doseQty}
          onChange={e => setDoseQty(e.target.value)}
          required
        />
      <br></br>
        <input
          name='performerName'
          placeholder='Performers Name'
          value={performerName}
          onChange={e => setPerformerName(e.target.value)}
          required
        />
        <br></br>
        <input
          name='institutionName'
          placeholder='Institution Name'
          value={institutionName}
          onChange={e => setInstitutionName(e.target.value)}
          required
        />
        <br></br>
        <input
          name='institutionType'
          placeholder='Institution Type'
          value={institutionType}
          onChange={e => setInstitutionType(e.target.value)}
          required
        />
        <br></br>
        <input
          name='location'
          placeholder='Location'
          value={location}
          onChange={e => setLocation(e.target.value)}
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

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);

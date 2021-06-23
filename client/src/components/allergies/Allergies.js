import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AllergyForm from './AllergyForm';
import AllergyItem from './AllergyItem';
import { getAllergies } from '../../actions/allergy';

const Allergy = ({ getAllergies, allergy: {allergies }}) => {
  useEffect(() => {
    getAllergies();
  }, [getAllergies]);

  return (
      <Fragment>
         <h1 className="large text-primary">Allergies</h1>
        <AllergyForm />
      <div className="profile-grid my-1">
      {allergies.map((allergy) => (
          <AllergyItem  key={allergy._id} allergy={allergy} />
        ))}
            {/* <div className="profile-exp bg-white p-2">
            </div> */}
          </div>
      </Fragment>
  );
};

Allergy.propTypes = {
  getAllergies: PropTypes.func.isRequired,
  allergy: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  allergy: state.allergy,
  auth: state.auth
});

export default connect(mapStateToProps, { getAllergies })(Allergy);


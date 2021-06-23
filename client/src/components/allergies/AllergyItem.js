import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { deleteAllergy} from '../../actions/allergy';

const AllergyItem = ({
  deleteAllergy,
  auth,
  allergy: { _id, 
    allergyName,
    allergyCategory,
    critical,
    encounterDate,
    encounterAge,
    lastOccurence,
    reaction,
    cure,
    exposureRoute,
    note,
     date },
  showActions
}) => (
  <div>
    <div>
    <h2 className="my-2">Allergies Recorded on {formatDate(date)}</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Allergy Name</th>
            <th>Allergy Category</th>
            <th>Crticality</th>
            <th>Encounter Date</th>
            <th>Encounter Age</th>
            <th>Last Occurence</th>
            <th>Reaction</th>
            <th>Cure</th>
            <th>Exposure Route</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{allergyName}</td>
            <td>{allergyCategory}</td>
            <td>{critical}</td>
            <td>{encounterDate}</td>
            <td>{encounterAge}</td>
            <td>{lastOccurence}</td>
            <td>{reaction}</td>
            <td>{cure}</td>
            <td>{exposureRoute}</td>
            <td>{note}</td>
          </tr>
        </tbody>
      </table>

      {showActions && (
        <Fragment>
            <button
              onClick={() => deleteAllergy(_id)}
              type="button"
              className="btn btn-danger"
            >Delete
              <i className="fas fa-times" />
            </button>
        </Fragment>
      )}
    </div>
  </div>
);

AllergyItem.defaultProps = {
  showActions: true
};

AllergyItem.propTypes = {
  allergy: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteAllergy: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteAllergy })(
  AllergyItem
);

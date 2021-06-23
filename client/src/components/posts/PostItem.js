import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post';

const PostItem = ({
  deletePost,
  auth,
  post: { _id, vaccineName, vaccineManufacturerName,expiryDate,lotNumber,doseQty,targetDisease,performerName,
    institutionName,institutionType,location,note, user, date },
  showActions
}) => (
  <div>
    <div>
    <h2 className="my-2">Immunization Records on {formatDate(date)}</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Vaccine Name</th>
            <th>Vaccine Manufacturer Name</th>
            <th>Expiry Date</th>
            <th>Batch/Lot Number</th>
            <th>Dose Quantity</th>
            <th>Performer's Name</th>
            <th>Institution Name</th>
            <th>Institution Type</th>
            <th>Location</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{vaccineName}</td>
            <td>{vaccineManufacturerName}</td>
            <td>{formatDate(date)}</td>
            <td>{lotNumber}</td>
            <td>{doseQty}</td>
            <td>{performerName}</td>
            <td>{institutionName}</td>
            <td>{institutionType}</td>
            <td>{location}</td>
            <td>{note}</td>
          </tr>
        </tbody>
      </table>

      {showActions && (
        <Fragment>
            <button
              onClick={() => deletePost(_id)}
              type="button"
              className="btn btn-danger"
            >
              <i className="fas fa-times" />
            </button>
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost })(
  PostItem
);

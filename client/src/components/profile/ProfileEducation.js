import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const ProfileEducation = ({
  education: { shool, degree, fieldofstudy, from, to, current, description }
}) => (
  <div>
    <h3 className="text-dark">{shool}</h3>
    <p>
      <Moment format="DD/MM/YYYY">{from}</Moment> -{' '}
      {current ? 'Now' : <Moment format="DD/MM/YYYY">{to}</Moment>}
    </p>
    <p>
      <strong>Degree: </strong>
      {degree}
    </p>
    <p>
      <strong>Field Of Study: </strong>
      {fieldofstudy}
    </p>
    <p>
      <strong>Description: </strong>
      {description}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;

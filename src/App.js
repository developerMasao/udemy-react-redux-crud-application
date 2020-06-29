import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: 'Taro', like: 'soccer' },
    { name: 'Hanako', like: 'baseball' },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} like={profile.like} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      Hi,I am {props.name} and I like {props.like}
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  like: PropTypes.string.isRequired,
};

export default App;

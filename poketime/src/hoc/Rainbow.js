import React from 'react';

const Rainbow = (WrappedComponent) => {
  const colors = ['red', 'pink', 'blue', 'green', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * 5 )];
  const className = randomColor + '-text';

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent />
      </div>
    )
  }
}

export default Rainbow;
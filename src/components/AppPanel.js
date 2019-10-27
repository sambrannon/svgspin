import React from 'react';
import classNames from 'classnames';

function AppPanel(props) {
  const classes = classNames('app-panel', {
    'app-panel--config': props.type === 'config',
    'app-panel--preview': props.type === 'preview',
    'app-panel--dark': props.color === 'dark',
    'app-panel--light': props.color === 'light',
  });

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}

export default AppPanel;

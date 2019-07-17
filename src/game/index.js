import React, { useState } from 'react';

import Game from './game-component';

export default () => {
  const [newAsk, setNewAsk] = useState('');
  return (
    <Game
      newAsk={newAsk}
      onChangeNewAsk={({ target }) => setNewAsk(target.value)}
    />
  );
};

import React from 'react';

import HojaDeServicio from './HojaDeServicio';
function HojaDeServicioTap() {


  const hadleDataResivida = (data) => {

  }

  return (
    <div>
      <HojaDeServicio
        dataResivida={hadleDataResivida}
      />
    </div>
  )
}

export default HojaDeServicioTap;
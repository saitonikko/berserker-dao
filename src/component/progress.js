import React from 'react';
import "../assets/style/component.scss"


export default function DaoButton({percent, content}) {
    return (
        <div className='progress'>
          <div className='rectangle' style={{ width: `${percent}%` }}>{content}</div>
          <div className='number'>{percent} <span style={{ fontFamily: 'Roboto' }}>%</span></div>
        </div>
    )
}

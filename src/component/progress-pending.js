import React from 'react';
import "../assets/style/component.scss"


export default function ProgressPending({percent, content}) {
    return (
        <div className='progress-pending'>
          <div className='rectangle' style={{ width: `${percent}%` }}>{content}</div>
          <div className='number'>{percent} <span style={{ fontFamily: 'Roboto' }}>%</span></div>
        </div>
    )
}

import React from 'react';
import "../assets/style/component.scss"


export default function ProgressVoting({percent, content}) {
    return (
        <div className='progress-voting'>
          <div className='rectangle' style={{ width: `${percent}%` }}>{content}</div>
          <div className='number'>{percent} <span style={{ fontFamily: 'Roboto' }}>%</span></div>
        </div>
    )
}

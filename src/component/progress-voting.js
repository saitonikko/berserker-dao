import React from 'react';
import "../assets/style/component.scss"


export default function ProgressVoting({percent, content}) {
    return (
        <div className='progress-voting'>
          <div className='rectangle' style={{ width: `${(percent * 80)}%` }}>{content}</div>
          <div className='number'>{(percent * 100).toFixed(0)} <span style={{ fontFamily: 'Roboto' }}>%</span></div>
        </div>
    )
}

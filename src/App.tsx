import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bowser from 'bowser';

function App() {
  console.log(Bowser.parse(window.navigator.userAgent))
  return (
    <>
      <div className='body'>
        <p>About Browser</p>
        <pre>{JSON.stringify(Bowser.parse(window.navigator.userAgent), null, 2)}</pre>

        <p>User Agent</p>
        <p>{JSON.stringify(window.navigator.userAgent, null, 2)}</p>
        <iframe src="https://codesandbox.io/embed/pensive-resonance-esezrt?fontsize=14&hidenavigation=1&theme=dark"
     style={{width:"100%", height:"500px", border:0, borderRadius: "4px", overflow:"hidden"}}
     title="pensive-resonance-esezrt"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
      </div>
    </>
  );
}

export default App;

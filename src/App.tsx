import React, { useCallback, useEffect, useState } from 'react';
import './App.css';

import Header from './components/o365-booking-header';
import Footer from './components/o365-booking-footer';
import Services from './components/o365-booking-services';
import TimeArea from './components/o365-booking-time';
import Form from './components/o365-booking-form';
import { makeStyles } from '@fluentui/react-components';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { initialize } from './storage/book';
initializeIcons();

const useMainStyles = makeStyles({
  root: {
    backgroundColor: '#ffffff',
    maxWidth: '1024px',    
    minWidth: '320px',
    marginTop: '0px',
    marginRight: 'auto',
    marginBottom: '0px',
    marginLeft: 'auto',
    textAlign: 'center',
    fontFamily: ' WF-Segoe-UI-Semilight, Segoe UI Semilight, Segoe WP Semilight, Segoe UI, Tahoma, Arial, Sans-Serif',
    color: '#333333'
  },
});

function App(props: any) {
  const classes = useMainStyles();
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState('');
  const selectService = (service: any) => {
    setService(service);
  }

  useEffect(() => {
    initialize();
    setLoading(false);
  }, [])


  return (
    <div className="App">
      <div className={classes.root}>
        <Header />
        {loading && <div>
          <p> loading... </p>
        </div>}
        {!loading && 
        <>
          <Services selectService={selectService}/>
          <TimeArea service={service}/>
          <Form />
        </>}
        <Footer/>
      </div>
    </div>
  );
}

export default App;
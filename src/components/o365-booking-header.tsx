
import * as React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
    headerSection:{
        display: 'block',
        color: '#FFFFFF',
        backgroundColor: '#536076',
        height:'100px',
        ...shorthands.padding('16px', '0px', '16px','0px'),
    },
    headerTitle:{
        ...shorthands.margin('20px', '28px', '20px','28px'),
        fontSize: '44px',
        fontFamily: '"WF-Segoe-UI-Light", "Segoe UI Light", "Segoe WP Light", "Segoe UI", Tahoma, Arial, Sans-Serif',
        fontWeight: 'normal',
        opacity: '0.9',
        display: 'block',
        ...shorthands.marginBlock('0.67em','0.67em'),
        ...shorthands.marginInline('0px','0px'),
    }
  });

  function Header() {
    const styles = useStyles();
  
    return (
        <div className={styles.headerSection}>
          <h1 className={styles.headerTitle}>Pet Hospital</h1>
        </div>
      );
  };

  export default Header;
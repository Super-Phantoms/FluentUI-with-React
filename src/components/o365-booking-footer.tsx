
import * as React from 'react';
import { makeStyles, shorthands,Link,Divider  } from '@fluentui/react-components';
import { Icon } from '@fluentui/react/lib/Icon';

const useStyles = makeStyles({
    footerSection:{
        display: 'block',
        color: '#c6c6c6',
        backgroundColor: '#303030',
        ...shorthands.padding('24px','80px','24px','80px'),
        fontSize: '14px',
        lineHeight: '20px',
        textAlign: 'center',
    },
   hidden:{display: 'none'},
   divider:{...shorthands.margin('0px','3px','0px','3px')},
   linkText:{color:'inherit'},
   seperator:{...shorthands.borderWidth('1px','0px','0px','0px'), ...shorthands.borderStyle('solid'), ...shorthands.margin('32px'),color:'#edebe5'},
   icon:{width: '32px', minHeight: '32px',height: '32px', lineHeight: '32px', fontSize: '32px', ...shorthands.margin('8px')}
  });
 
 
  function Footer() {
    const styles = useStyles();
  
    return (
        <div className={styles.footerSection}>
            <p>
                <span>
                    <span className={styles.hidden}>Business Address</span>
                    Pet Hospital
                </span>
                <span className={styles.divider}> | </span>
                <span className="nowrap">
                    <span className={styles.hidden}>Business Phone</span>
                    1234567899
                </span>
                <span className={styles.divider}> | </span>
                <Link href="http://wpintegrate.com/" className={styles.linkText} target="_blank" inline> http://wpintegrate.com/ </Link>
                <br />
                <Link href="http://www.termsandconditions.com/" className={styles.linkText} target="_blank" inline> Terms and Conditions </Link>
                <span className={styles.divider}> | </span>
                <Link href="http://www.privacypolicy.com/" className={styles.linkText} target="_blank" inline> Privacy Policies </Link>
            </p>
            <Divider appearance="strong" className={styles.seperator}></Divider>
            <p>                 
                <Icon iconName="BookingsLogo" className={styles.icon}/>
            </p>
            <p>
                <Link href="https://go.microsoft.com/fwlink/?linkid=860831" className={styles.linkText} target="_blank" > Powered by Microsoft Bookings </Link>
                <br />© 2023 Microsoft
            </p>
        </div>
      );
  };

  export default Footer;
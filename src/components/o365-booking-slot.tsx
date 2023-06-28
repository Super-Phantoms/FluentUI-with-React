
import { makeStyles, } from '@fluentui/react-components';
import { mergeStyles } from '@uifabric/styling';

const useStyles = makeStyles({
    
    slotArea:{
        marginTop:'20px',
        width:'80%' 
    },
    slot:{
        marginTop:'20px'
    }

  });


function Slot(){
    const styles = useStyles();
    const hoverStyle = mergeStyles({
        selectors: {
          ':hover': {
            backgroundColor: 'lightgray',
            cursor: 'pointer',
          },
        },
        height:'inherit'
      });
    const slotArea = mergeStyles('ms-Grid-row', styles.slotArea);
    const slotItem = mergeStyles('ms-Grid-col ms-lg4', styles.slot);
    return(
        <>
             <div className={slotArea}>                
                <div className={slotItem}>
                    <div className={hoverStyle}>
                        8:00 am
                    </div>
                </div>
                <div className={slotItem}>
                    <div className={hoverStyle}>
                        8:00 am
                    </div>
                </div>
                <div className={slotItem}>
                    <div className={hoverStyle}>
                        8:00 am
                    </div>
                </div>
                <div className={slotItem}>
                    <div className={hoverStyle}>
                        8:00 am
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slot;
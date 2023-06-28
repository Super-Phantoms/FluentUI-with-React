import { makeStyles, shorthands} from '@fluentui/react-components';
import { Icon } from '@fluentui/react/lib/Icon';
import { mergeStyles } from '@uifabric/styling';
import Services from './o365-booking-services';

const useStyles = makeStyles({
   
    serviceContent:{
        textAlign:'left',
    },
    serviceIcon:{
        marginTop:'12px',
        fontSize:'24px'
    },
    serviceMainName:{
        fontSize: '20px',
        marginTop:'5px',
        marginBottom:'5px'
    },
    serviceDefaultPrice:{
        fontSize: '14px',
        marginTop:'3px',
        marginBottom:'3px'
    },
});

interface props {
    service: any
}

const ServiceItem: React.FC<props> = ({service}) => {
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
    const serviceContentClass = mergeStyles('ms-Grid-col ms-lg8', styles.serviceContent);
    const serviceIconClass = mergeStyles('ms-Grid-col ms-lg2', styles.serviceIcon);
    const serviceMainName = mergeStyles('ms-Grid-row', styles.serviceMainName);
    const serviceDefaultPrice = mergeStyles('ms-Grid-row', styles.serviceDefaultPrice);

    return(
        <>
         <div className={hoverStyle}>
            <div className='ms-Grid-row'>
                <div className='ms-Grid-col ms-lg2'></div>
                <div className={serviceContentClass}>
                    <div className={serviceMainName}>
                        <span >{service?.displayName}</span>
                    </div>
                    <div className={serviceDefaultPrice}>
                        <span>{service?.defaultDuration}</span>
                    </div>
                    <div className={serviceDefaultPrice}>
                        <span>{service?.defaultPrice && `$${service?.defaultPrice}`}&nbsp;{service?.defaultPriceType}</span>
                    </div>
                </div>
                <div className={serviceIconClass}>
                    <Icon iconName="InfoSolid" />
                </div>
            </div>
        </div>
        </>
    )
}

export default ServiceItem;
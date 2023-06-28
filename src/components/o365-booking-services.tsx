import { makeStyles, shorthands,Button} from '@fluentui/react-components';
import { mergeStyles } from '@uifabric/styling';
import { Key, useCallback, useEffect, useState } from 'react';
import ServiceItem from './o365-booking-serviceItem';
import { getJSONStorage } from '../utils/setItemStorage';
import { getBookingServices } from '../service/BookingServices';
import { bookingServiceData } from '../constants/res';
const useStyles = makeStyles({
    title: {
        fontFamily: '"WF-Segoe-UI-Light", "Segoe UI Light", "Segoe WP Light", "Segoe UI", Tahoma, Arial, Sans-Serif',
        fontWeight: 'normal',
        opacity: '0.9',
        display: 'block',        
        marginBottom:'30px'
    },
    titleArea:{
        ...shorthands.padding('16px', '0px', '16px','0px'),
        boxShadow: '0 -2px 6px 0 rgba(0, 0, 0, 0.1)'
    },
    labelLeft:{
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor:'#eaeaea',
        marginRight:'4%',
        width:'46%',
        height:'80px'
    },
    labelRight:{
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor:'#eaeaea',
        width:'46%',
        marginLeft:'4%',
        height:'80px'
    },

  });

interface props {
    selectService: (id: string) => void
}

const Services:React.FC<props> = ({selectService}) => {
    const styles = useStyles();
    const labelLeftClass = mergeStyles('ms-Grid-col ms-lg2', styles.labelLeft);
    const labelRightClass = mergeStyles('ms-Grid-col ms-lg6', styles.labelRight);
    const [loading, setLoading] = useState(true);
    const [service, setService] = useState<any>();
    const [services, setServices] = useState([]);
    // const services = bookingServiceData;
    useEffect(() => {
        async function fetchServices(){
            let myservices = await getBookingServices();
            // let myservices = bookingServiceData;
            debugger;
            if (myservices) {
                setServices(myservices);
            }
            setLoading(false);
        }
        fetchServices();    
    }, [])

    const onSelectService = (service: any) => {
        selectService(service);
        setService(service);
    }

    return(
        <>
            <div>
                <div className={styles.titleArea}>
                    {!loading && <h1 id='serviceTitle' className={styles.title}>{(service && service?.displayName) ? service?.displayName:`Select service`}</h1>}
                    {loading && <h1 id='serviceTitle' className={styles.title}>Loading Services...</h1>}

                    <div className="ms-Grid" >
                        <div className="ms-Grid-row">
                            {services && services.length > 0 && services?.map((service: any, index: number) => 
                             <div key={service?.id} className={`${ index % 2 === 0? labelLeftClass: labelRightClass}`} onClick={e => {
                                e.preventDefault();
                                onSelectService(service);
                            }}>
                                 <ServiceItem service={service}/>
                            </div>
                        )}
                        </div>
                    </div>
                    
                </div>                
            </div>
        </>
    );
}

export default Services;
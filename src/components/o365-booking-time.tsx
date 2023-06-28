
import React, { useState, useEffect,useRef  } from "react";
import { makeStyles, shorthands,Select} from '@fluentui/react-components';

// import { fluentCalendar, provideFluentDesignSystem } from '@fluentui/web-components';


import { Calendar,ICalendarStyles ,mergeStyles } from '@fluentui/react';
import Slot from './o365-booking-slot';
import { getStaffMembers } from "../service/BookingServices";
import { getJSONStorage } from "../utils/setItemStorage";

// provideFluentDesignSystem().register(fluentCalendar());
  

const useStyles = makeStyles({
    title: {
        
        fontSize:'18px',
        fontFamily: '"WF-Segoe-UI-Light", "Segoe UI Light", "Segoe WP Light", "Segoe UI", Tahoma, Arial, Sans-Serif',
        fontWeight: 'normal',
        opacity: '0.9',
        display: 'block',
    },
    titleArea:{
        ...shorthands.padding('16px', '0px', '16px','0px'),
        boxShadow: '0 -2px 6px 0 rgba(0, 0, 0, 0.1)'
    },
    staffSelectTitle:{
        textAlign:'left',
        fontSize:'18px',
        marginTop:'20px'
    },
    staffSelect:{
        marginTop:'20px',
        width:'80%'    
    },
    calendar:{
        textSize:'20px',
        fontSize:'20px',
    }
   
  });

//   const customCalendarStyles: Partial<ICalendarStyles> = {
//         dayWrapper: { fontSize: '14px' },
//         year: { fontSize: '14px' },
//         weekText: { fontSize: '14px' }
//   };

  
interface props {
    service: any
}

const TimeArea:React.FC<props> = ({service}) => {

    const styles = useStyles();
    const staffSelectTitle = mergeStyles('ms-Grid-row', styles.staffSelectTitle);

    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(today);
    const [staffs, setStaffs] = useState<any[]>([]);

    const handleSelectDate = (date:any) => {
        setSelectedDate(date);
    };

    const calendarRef = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        const calendarElement = calendarRef.current;
        const buttons = calendarElement?.querySelectorAll('button');
            buttons?.forEach((button:any) => {
            button.classList.add('button-font-customized');
        });
    }, [])
    
    useEffect(() => {
        async function fetchStaffs() {
            let myStaffs = getJSONStorage('staffMembers');
            console.log('this is staffs')
            console.log(myStaffs)

            const filterMembers = myStaffs.filter((staff:any) => {
                if (service.staffMemberIds.includes(staff?.id)) {
                  return staff;
                }
            });
            debugger;
            let currentStaffs = [{id: 'anyone', displayName: 'Anyone'},...filterMembers] 
            setStaffs(currentStaffs);
        }
        if(service)
            fetchStaffs();
    }, [service])

    return(
        <>
            <div>
                <div className={styles.titleArea}>
                    <h1 id='timeTitle' className={styles.title}>Select time</h1>
                    <div className="ms-Grid" >
                        <div className="ms-Grid-row">
                            <div className="ms-Grid-col ms-lg1"></div>
                            <div className="ms-Grid-col ms-lg5" >
                                <Calendar showMonthPickerAsOverlay={true}
                                        showGoToToday={false} 
                                        minDate={today}
                                        onSelectDate={handleSelectDate}
                                        today={selectedDate}
                                        value={selectedDate}   
                                        // styles={customCalendarStyles}
                                        id="calendar"
                                        ref={calendarRef}
                                        // size="'large'"
                                        className={styles.calendar}                                       
                                        />
                                {/* <fluent-calendar></fluent-calendar> */}
                            </div>                    
                            <div className="ms-Grid-col ms-lg6">
                                <div className={staffSelectTitle}>
                                
                                    <span> Select staff (optional)</span>

                                    <Select appearance="outline" className={styles.staffSelect} >
                                        {staffs && staffs.length > 0 && staffs.map((staff: any) => (
                                            <option value={staff?.id}>{staff?.displayName}</option>)
                                        )}
                                    </Select>
                                </div>
                               <Slot />
                            </div>
                        </div>
                    </div>  
                </div>                
            </div>
        </>
    );

   
}

export default TimeArea;


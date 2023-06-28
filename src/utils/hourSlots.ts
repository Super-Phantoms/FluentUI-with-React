import moment from 'moment';
import { extendMoment } from 'moment-range';
import { formGetDurationInSeconds } from './getDurationAndCurrency';
// const moment = extendMoment(Moment);


export const getHourSlots = (slotsStartTime: any, slotsEndTime: string, format: number, slotTimeInterval: string, isUTC = false, bufferObj: any) => {
    let x = {
        slotInterval: slotTimeInterval,
        openTime: slotsStartTime,
        closeTime: slotsEndTime
    };
 
    // x.openTime = moment(x.openTime, 'hh:mm:ss').add(bufferObj?.prebuffer, 'minute');
    const startTime = moment(x.openTime, 'hh:mm:ss').add(bufferObj?.prebuffer, 'minute');
    const timeFormat = format === 12 ? 'HH:mm A' : 'hh:mm A';
    // let startTime = x.openTime;

    //Format the end time and the next day to it 
    let endTime = moment(x.closeTime, timeFormat) as any;
    if( endTime.isBefore(startTime)){
        endTime = moment(x.closeTime, timeFormat).add(1, 'days')
    }

    let slots = [];
    //Loop over the times - only pushes time with minutes interval
    console.log(startTime < endTime, startTime.format('hh:mm'), endTime.format('hh:mm'));

    while (startTime.isBefore(endTime)) {
        console.log(startTime < endTime);
        const slot = !isUTC ? startTime.format(timeFormat) : startTime.format('HH:mm:ss');
        slots.push(slot);
        //Add interval of minutes
        const min = x.slotInterval;
        startTime.add(min, 'minute');
     }
     return slots; 
}
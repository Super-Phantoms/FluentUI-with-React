import { initializeData } from "../constants/constant";
import { bookingServiceData, busniessData, staffMembersData } from "../constants/res";
import { getBookingServices, getBusinessData, getStaffMembers } from "../service/BookingServices";
import moment from 'moment';
import { formGetDurationInSeconds } from "../utils/getDurationAndCurrency";
import { getJSONStorage, setJSONStorage, setStringStorage } from '../utils/setItemStorage';

export function initialize() {    
    const data = initializeData;
    localStorage.clear();
    if (data.accessToken && data.businessid) {
      setStringStorage('accessToken', data.accessToken);
      setStringStorage('businessId', data.businessid);
    }
    setJSONStorage('initializeDataObj', data);
    setbookingBusinesses();
    bookingServices();
    bookingSaffMembers();
}

export async function bookingServices() {
    try {
        const services = await getBookingServices();
        debugger;
        // const services = bookingServiceData;
        console.log("lion service");
        console.log(services);
        makeServiceData(services)

    } catch (error) {
        console.log(error);
    }
}


export async function makeServiceData (services: any) {
    setJSONStorage('services', services);
    const currentDate = moment(new Date()).format('YYYY-MM-DD');
    let initializeDataObj = getJSONStorage('initializeDataObj');
    services.map((service: any) => {
        debugger;
        setService(service, currentDate)
        setJSONStorage(`serviceCustomQuestions["${service.id}"]`,service?.customQuestions);
        if (initializeDataObj && initializeDataObj.default_service.includes(service.id)) { 
            setJSONStorage('service',service);
        }
        // if (!initializeDataObj || !initializeDataObj?.default_service) { 
        //     return service;
        // }
    })
}

export async function setService(service: any, selectedDate: string) {

    const defaultDuration = formGetDurationInSeconds(service?.defaultDuration);
    const postbuffer = formGetDurationInSeconds(service?.postBuffer);
    const prebuffer = formGetDurationInSeconds(service?.preBuffer);
    setJSONStorage(`defaultDurationBuffer["${service.id}"]`, { duration: defaultDuration, prebuffer: prebuffer , postbuffer: postbuffer});
    if(!service?.schedulingPolicy) {
        let defaultBusinessSchedulingPolicy:any = getJSONStorage('defaultBusinessSchedulingPolicy');        
        const minutes = formGetDurationInSeconds(defaultBusinessSchedulingPolicy?.minimumLeadTime);
        const date = moment(selectedDate).add(minutes, 'minutes').format('YYYY-MM-DD');
        setStringStorage(`servicesSelectedDate[${service.id}]` , date);
        setStringStorage(`schedulingPolicySlotInterval[${service.id}]`, '' + formGetDurationInSeconds(defaultBusinessSchedulingPolicy?.timeSlotInterval));
    }
    if (service?.schedulingPolicy?.minimumLeadTime) {
      const minutes = formGetDurationInSeconds(service?.schedulingPolicy?.minimumLeadTime);
      const date = moment(selectedDate).add(minutes, 'minutes').format('YYYY-MM-DD');
      setStringStorage(`servicesSelectedDate[${service.id}]`, date);
      setStringStorage(`schedulingPolicySlotInterval[${service.id}]`, '' + formGetDurationInSeconds(service?.schedulingPolicy?.timeSlotInterval));
    }
  }

export async function  setbookingBusinesses() {
    try {
        // const bookingBusinesses = await getBusinessData();
        const bookingBusinesses = busniessData;
        setJSONStorage('businessInformation', bookingBusinesses);
        setJSONStorage('defaultBusinessHours', bookingBusinesses?.businessHours);
        setJSONStorage('defaultBusinessSchedulingPolicy', bookingBusinesses?.schedulingPolicy);
    } catch (error) {
      console.log(error);
    }
}

export async function bookingSaffMembers() {
    try {
        // const staff = await getStaffMembers();
        const staff = staffMembersData;
        setJSONStorage('staffMembers', staff);
    } catch (error) {
      console.log(error);
    }
}

export async function resetSelectService() {
    localStorage.setItem('selectDate', 'null');
    localStorage.setItem('selectDate', 'null');
    localStorage.setItem('selectedMinCurrentDate','null');
    localStorage.setItem('selectedService', '{}');
    localStorage.setItem('selectedStaff', "[{id: 'anyone', displayName: 'Anyone'}]");
    // this.selectedServiceStaffMembers = [];
    // this.bookingSlots = [];
  }






// export async function bookingServices() {
//     try {
//       const services = await getBookingServices();
      
//       this.makeServiceData(services)
//       console.log("this.services", this.services, this.serviceCustomQuestions);
//     } catch (error) {
//       console.log(error);
//     }
//   }

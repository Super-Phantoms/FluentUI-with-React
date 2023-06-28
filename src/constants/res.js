export const busniessData = {
    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#solutions/bookingBusinesses/$entity",
    "id": "TestBusiness@dwsnow.com",
    "displayName": "Pet Hospital",
    "businessType": "Consulting Services",
    "phone": "1234567899",
    "email": "example@mail.com",
    "webSiteUrl": "http://wpintegrate.com/",
    "defaultCurrencyIso": "USD",
    "isPublished": true,
    "publicUrl": "https://outlook.office365.com/owa/calendar/TestBusiness@dwsnow.com/bookings/",
    "languageTag": null,
    "address": {
        "street": "",
        "city": "",
        "state": "",
        "countryOrRegion": "",
        "postalCode": ""
    },
    "businessHours": [
        {
            "day": "sunday",
            "timeSlots": []
        },
        {
            "day": "monday",
            "timeSlots": [
                {
                    "startTime": "08:00:00.0000000",
                    "endTime": "17:00:00.0000000"
                }
            ]
        },
        {
            "day": "tuesday",
            "timeSlots": [
                {
                    "startTime": "08:00:00.0000000",
                    "endTime": "17:00:00.0000000"
                }
            ]
        },
        {
            "day": "wednesday",
            "timeSlots": [
                {
                    "startTime": "08:00:00.0000000",
                    "endTime": "17:00:00.0000000"
                }
            ]
        },
        {
            "day": "thursday",
            "timeSlots": [
                {
                    "startTime": "08:00:00.0000000",
                    "endTime": "17:00:00.0000000"
                }
            ]
        },
        {
            "day": "friday",
            "timeSlots": [
                {
                    "startTime": "08:00:00.0000000",
                    "endTime": "17:00:00.0000000"
                }
            ]
        },
        {
            "day": "saturday",
            "timeSlots": []
        }
    ],
    "schedulingPolicy": {
        "timeSlotInterval": "PT1H",
        "minimumLeadTime": "P1D",
        "maximumAdvance": "P365D",
        "sendConfirmationsToOwner": true,
        "allowStaffSelection": true
    }
}

export const bookingServiceData =  [
        {
            "id": "10c148c8-c8a5-45e2-85f7-c50e8d28d59c",
            "displayName": "Multiple attendees",
            "defaultDuration": "PT30M",
            "defaultPrice": 0.0,
            "defaultPriceType": "notSet",
            "description": "",
            "isHiddenFromCustomers": false,
            "notes": "",
            "additionalInformation": "",
            "languageTag": "",
            "preBuffer": "PT0S",
            "postBuffer": "PT15M",
            "staffMemberIds": [
                "4d48c82e-f1dd-43a2-939a-9288734c38db",
                "b4d51ef9-c136-4b96-b9e4-2e6877af7329",
                "9e5f680a-8e51-41de-80d2-675d6545c73f"
            ],
            "isLocationOnline": false,
            "smsNotificationsEnabled": false,
            "isAnonymousJoinEnabled": false,
            "webUrl": "",
            "maximumAttendeesCount": 3,
            "schedulingPolicy": null,
            "defaultLocation": {
                "displayName": "",
                "locationEmailAddress": "",
                "locationUri": "",
                "locationType": "default",
                "uniqueId": null,
                "uniqueIdType": null,
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "countryOrRegion": "",
                    "postalCode": ""
                },
                "coordinates": {
                    "altitude": "NaN",
                    "latitude": "NaN",
                    "longitude": "NaN",
                    "accuracy": "NaN",
                    "altitudeAccuracy": "NaN"
                }
            },
            "defaultReminders": [
                {
                    "offset": "P1D",
                    "recipients": "allAttendees",
                    "message": ""
                }
            ],
            "customQuestions": []
        },
        {
            "id": "d51583bd-af0c-44fe-babe-9697eb3f40ed",
            "displayName": "multidays",
            "defaultDuration": "P3D",
            "defaultPrice": 0.0,
            "defaultPriceType": "notSet",
            "description": "",
            "isHiddenFromCustomers": false,
            "notes": "",
            "additionalInformation": "",
            "languageTag": "",
            "preBuffer": "PT0S",
            "postBuffer": "PT0S",
            "staffMemberIds": [
                "4d48c82e-f1dd-43a2-939a-9288734c38db"
            ],
            "isLocationOnline": false,
            "smsNotificationsEnabled": false,
            "isAnonymousJoinEnabled": false,
            "webUrl": "",
            "maximumAttendeesCount": 1,
            "schedulingPolicy": null,
            "defaultLocation": {
                "displayName": "",
                "locationEmailAddress": "",
                "locationUri": "",
                "locationType": "default",
                "uniqueId": null,
                "uniqueIdType": null,
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "countryOrRegion": "",
                    "postalCode": ""
                },
                "coordinates": {
                    "altitude": "NaN",
                    "latitude": "NaN",
                    "longitude": "NaN",
                    "accuracy": "NaN",
                    "altitudeAccuracy": "NaN"
                }
            },
            "defaultReminders": [
                {
                    "offset": "P1D",
                    "recipients": "allAttendees",
                    "message": ""
                }
            ],
            "customQuestions": []
        },
        {
            "id": "38e4b14f-da2f-4e00-8f7f-e13784f68552",
            "displayName": "service 2",
            "defaultDuration": "PT1H",
            "defaultPrice": 0.0,
            "defaultPriceType": "notSet",
            "description": "service 2",
            "isHiddenFromCustomers": false,
            "notes": "",
            "additionalInformation": "",
            "languageTag": "",
            "preBuffer": "PT15M",
            "postBuffer": "PT30M",
            "staffMemberIds": [
                "b4d51ef9-c136-4b96-b9e4-2e6877af7329",
                "e275ba58-1d40-48d7-a499-a3fc6a42ebb2",
                "4d48c82e-f1dd-43a2-939a-9288734c38db"
            ],
            "isLocationOnline": false,
            "smsNotificationsEnabled": false,
            "isAnonymousJoinEnabled": false,
            "webUrl": "",
            "maximumAttendeesCount": 1,
            "defaultLocation": {
                "displayName": "Open Theater",
                "locationEmailAddress": "",
                "locationUri": "",
                "locationType": "default",
                "uniqueId": null,
                "uniqueIdType": null,
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "countryOrRegion": "",
                    "postalCode": ""
                },
                "coordinates": {
                    "altitude": "NaN",
                    "latitude": "NaN",
                    "longitude": "NaN",
                    "accuracy": "NaN",
                    "altitudeAccuracy": "NaN"
                }
            },
            "defaultReminders": [
                {
                    "offset": "P1D",
                    "recipients": "allAttendees",
                    "message": ""
                }
            ],
            "schedulingPolicy": {
                "timeSlotInterval": "PT1H",
                "minimumLeadTime": "P1DT7H",
                "maximumAdvance": "P365D",
                "sendConfirmationsToOwner": true,
                "allowStaffSelection": true
            },
            "customQuestions": [
                {
                    "questionId": "b8c5e124-5ede-4585-af11-13179a9856da",
                    "isRequired": true
                },
                {
                    "questionId": "cb1c9bf7-38df-42d4-a586-bdc9c9ca2f9b",
                    "isRequired": true
                },
                {
                    "questionId": "9f0204d2-8008-4869-ad60-2305f4880043",
                    "isRequired": true
                }
            ]
        },
        {
            "id": "7d2e40bb-13bf-4218-a7a2-93fc8d795a9a",
            "displayName": "service 1",
            "defaultDuration": "PT1H",
            "defaultPrice": 10.0,
            "defaultPriceType": "hourly",
            "description": "new service description",
            "isHiddenFromCustomers": false,
            "notes": "",
            "additionalInformation": "",
            "languageTag": "",
            "preBuffer": "PT0S",
            "postBuffer": "PT0S",
            "staffMemberIds": [
                "9e5f680a-8e51-41de-80d2-675d6545c73f",
                "ae15a660-e9c6-427b-b336-8a3a92b634e6",
                "e275ba58-1d40-48d7-a499-a3fc6a42ebb2"
            ],
            "isLocationOnline": false,
            "smsNotificationsEnabled": false,
            "isAnonymousJoinEnabled": false,
            "webUrl": "",
            "maximumAttendeesCount": 1,
            "defaultLocation": {
                "displayName": "Meeting Hall",
                "locationEmailAddress": "",
                "locationUri": "",
                "locationType": "default",
                "uniqueId": null,
                "uniqueIdType": null,
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "countryOrRegion": "",
                    "postalCode": ""
                },
                "coordinates": {
                    "altitude": "NaN",
                    "latitude": "NaN",
                    "longitude": "NaN",
                    "accuracy": "NaN",
                    "altitudeAccuracy": "NaN"
                }
            },
            "defaultReminders": [
                {
                    "offset": "P1D",
                    "recipients": "allAttendees",
                    "message": ""
                }
            ],
            "schedulingPolicy": {
                "timeSlotInterval": "PT1H",
                "minimumLeadTime": "P1D",
                "maximumAdvance": "P365D",
                "sendConfirmationsToOwner": true,
                "allowStaffSelection": true
            },
            "customQuestions": []
        },
        {
            "id": "2e891f79-99ce-4247-852f-81fcd4f5ee91",
            "displayName": "Multiuser booking",
            "defaultDuration": "PT1H30M",
            "defaultPrice": 10.0,
            "defaultPriceType": "startingAt",
            "description": "",
            "isHiddenFromCustomers": false,
            "notes": "",
            "additionalInformation": "",
            "languageTag": "",
            "preBuffer": "PT0S",
            "postBuffer": "PT0S",
            "staffMemberIds": [
                "e275ba58-1d40-48d7-a499-a3fc6a42ebb2",
                "94099d9b-526b-4a38-8d63-d41c0e92d38e",
                "ae15a660-e9c6-427b-b336-8a3a92b634e6"
            ],
            "isLocationOnline": false,
            "smsNotificationsEnabled": false,
            "isAnonymousJoinEnabled": false,
            "webUrl": "",
            "maximumAttendeesCount": 5,
            "defaultLocation": {
                "displayName": "",
                "locationEmailAddress": "",
                "locationUri": "",
                "locationType": "default",
                "uniqueId": null,
                "uniqueIdType": null,
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "countryOrRegion": "",
                    "postalCode": ""
                },
                "coordinates": {
                    "altitude": "NaN",
                    "latitude": "NaN",
                    "longitude": "NaN",
                    "accuracy": "NaN",
                    "altitudeAccuracy": "NaN"
                }
            },
            "defaultReminders": [
                {
                    "offset": "P1D",
                    "recipients": "allAttendees",
                    "message": ""
                }
            ],
            "schedulingPolicy": {
                "timeSlotInterval": "PT1H30M",
                "minimumLeadTime": "P1D",
                "maximumAdvance": "P365D",
                "sendConfirmationsToOwner": true,
                "allowStaffSelection": true
            },
            "customQuestions": []
        },
        {
            "id": "f667d90f-e211-444b-82b4-c407a2e93e30",
            "displayName": "whyayeltd.com",
            "defaultDuration": "PT15M",
            "defaultPrice": 0.0,
            "defaultPriceType": "priceVaries",
            "description": "",
            "isHiddenFromCustomers": false,
            "notes": "",
            "additionalInformation": "",
            "languageTag": "",
            "preBuffer": "PT0S",
            "postBuffer": "PT0S",
            "staffMemberIds": [
                "4d48c82e-f1dd-43a2-939a-9288734c38db"
            ],
            "isLocationOnline": false,
            "smsNotificationsEnabled": false,
            "isAnonymousJoinEnabled": false,
            "webUrl": "",
            "maximumAttendeesCount": 1,
            "defaultLocation": {
                "displayName": "",
                "locationEmailAddress": "",
                "locationUri": "",
                "locationType": "default",
                "uniqueId": null,
                "uniqueIdType": null,
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "countryOrRegion": "",
                    "postalCode": ""
                },
                "coordinates": {
                    "altitude": "NaN",
                    "latitude": "NaN",
                    "longitude": "NaN",
                    "accuracy": "NaN",
                    "altitudeAccuracy": "NaN"
                }
            },
            "defaultReminders": [
                {
                    "offset": "P1D",
                    "recipients": "allAttendees",
                    "message": ""
                }
            ],
            "schedulingPolicy": {
                "timeSlotInterval": "PT15M",
                "minimumLeadTime": "P1D",
                "maximumAdvance": "P365D",
                "sendConfirmationsToOwner": true,
                "allowStaffSelection": true
            },
            "customQuestions": []
        },
        {
            "id": "40717675-5e5b-4726-b67a-f021d0c5a262",
            "displayName": "Pet Training",
            "defaultDuration": "P1D",
            "defaultPrice": 5.0,
            "defaultPriceType": "startingAt",
            "description": "",
            "isHiddenFromCustomers": false,
            "notes": "",
            "additionalInformation": "",
            "languageTag": "",
            "preBuffer": "PT0S",
            "postBuffer": "PT0S",
            "staffMemberIds": [
                "e275ba58-1d40-48d7-a499-a3fc6a42ebb2",
                "94099d9b-526b-4a38-8d63-d41c0e92d38e",
                "ae15a660-e9c6-427b-b336-8a3a92b634e6"
            ],
            "isLocationOnline": false,
            "smsNotificationsEnabled": false,
            "isAnonymousJoinEnabled": false,
            "webUrl": "",
            "maximumAttendeesCount": 1,
            "defaultLocation": {
                "displayName": "",
                "locationEmailAddress": "",
                "locationUri": "",
                "locationType": "default",
                "uniqueId": null,
                "uniqueIdType": null,
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "countryOrRegion": "",
                    "postalCode": ""
                },
                "coordinates": {
                    "altitude": "NaN",
                    "latitude": "NaN",
                    "longitude": "NaN",
                    "accuracy": "NaN",
                    "altitudeAccuracy": "NaN"
                }
            },
            "defaultReminders": [
                {
                    "offset": "P1D",
                    "recipients": "allAttendees",
                    "message": ""
                }
            ],
            "schedulingPolicy": {
                "timeSlotInterval": "PT45M",
                "minimumLeadTime": "P4D",
                "maximumAdvance": "P15D",
                "sendConfirmationsToOwner": true,
                "allowStaffSelection": true
            },
            "customQuestions": [
                {
                    "questionId": "9f0204d2-8008-4869-ad60-2305f4880043",
                    "isRequired": false
                },
                {
                    "questionId": "87113712-94bc-47ec-bb1d-fd642fbbabd2",
                    "isRequired": false
                }
            ]
        },
        {
            "id": "646069f3-64e5-4688-ab14-6116b152016c",
            "displayName": "Pet Sitting",
            "defaultDuration": "PT30M",
            "defaultPrice": 0.0,
            "defaultPriceType": "priceVaries",
            "description": "",
            "isHiddenFromCustomers": false,
            "notes": "",
            "additionalInformation": "",
            "languageTag": "",
            "preBuffer": "PT0S",
            "postBuffer": "PT0S",
            "staffMemberIds": [
                "b4d51ef9-c136-4b96-b9e4-2e6877af7329",
                "4d48c82e-f1dd-43a2-939a-9288734c38db"
            ],
            "isLocationOnline": true,
            "smsNotificationsEnabled": false,
            "isAnonymousJoinEnabled": false,
            "webUrl": "",
            "maximumAttendeesCount": 1,
            "defaultLocation": {
                "displayName": "",
                "locationEmailAddress": "",
                "locationUri": "",
                "locationType": "default",
                "uniqueId": null,
                "uniqueIdType": null,
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "countryOrRegion": "",
                    "postalCode": ""
                },
                "coordinates": {
                    "altitude": "NaN",
                    "latitude": "NaN",
                    "longitude": "NaN",
                    "accuracy": "NaN",
                    "altitudeAccuracy": "NaN"
                }
            },
            "defaultReminders": [
                {
                    "offset": "P1D",
                    "recipients": "allAttendees",
                    "message": ""
                }
            ],
            "schedulingPolicy": {
                "timeSlotInterval": "PT10M",
                "minimumLeadTime": "P1D",
                "maximumAdvance": "P365D",
                "sendConfirmationsToOwner": true,
                "allowStaffSelection": true
            },
            "customQuestions": [
                {
                    "questionId": "b8c5e124-5ede-4585-af11-13179a9856da",
                    "isRequired": false
                },
                {
                    "questionId": "cb1c9bf7-38df-42d4-a586-bdc9c9ca2f9b",
                    "isRequired": false
                },
                {
                    "questionId": "6baa46dc-30f4-4811-b9d3-5790f081b60c",
                    "isRequired": false
                },
                {
                    "questionId": "0a701377-729e-4ecb-aaf5-2b93836cd166",
                    "isRequired": false
                }
            ]
        },
        {
            "id": "dc7af4e2-8809-487e-8ccf-c9c1b0453bdf",
            "displayName": "Veterinarian",
            "defaultDuration": "PT4H30M",
            "defaultPrice": 10.0,
            "defaultPriceType": "fixedPrice",
            "description": "",
            "isHiddenFromCustomers": false,
            "notes": "",
            "additionalInformation": "",
            "languageTag": "",
            "preBuffer": "PT0S",
            "postBuffer": "PT0S",
            "staffMemberIds": [
                "e275ba58-1d40-48d7-a499-a3fc6a42ebb2",
                "94099d9b-526b-4a38-8d63-d41c0e92d38e",
                "ae15a660-e9c6-427b-b336-8a3a92b634e6"
            ],
            "isLocationOnline": true,
            "smsNotificationsEnabled": false,
            "isAnonymousJoinEnabled": false,
            "webUrl": "",
            "maximumAttendeesCount": 1,
            "defaultLocation": {
                "displayName": "",
                "locationEmailAddress": "",
                "locationUri": "",
                "locationType": "default",
                "uniqueId": null,
                "uniqueIdType": null,
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "countryOrRegion": "",
                    "postalCode": ""
                },
                "coordinates": {
                    "altitude": "NaN",
                    "latitude": "NaN",
                    "longitude": "NaN",
                    "accuracy": "NaN",
                    "altitudeAccuracy": "NaN"
                }
            },
            "defaultReminders": [
                {
                    "offset": "P1D",
                    "recipients": "allAttendees",
                    "message": ""
                }
            ],
            "schedulingPolicy": {
                "timeSlotInterval": "PT30M",
                "minimumLeadTime": "P1D",
                "maximumAdvance": "P365D",
                "sendConfirmationsToOwner": true,
                "allowStaffSelection": true
            },
            "customQuestions": [
                {
                    "questionId": "0a701377-729e-4ecb-aaf5-2b93836cd166",
                    "isRequired": false
                },
                {
                    "questionId": "de509d92-bb93-41f1-a04e-6b30d16b0972",
                    "isRequired": false
                }
            ]
        },
        {
            "id": "c635047e-6d09-4d5b-98db-377c032e8dba",
            "displayName": "Pet Groomer",
            "defaultDuration": "PT1H",
            "defaultPrice": 0.0,
            "defaultPriceType": "notSet",
            "description": "Not sure what you need? Grab 60 minutes with us and we will work with you to understand your goals, and to develop a proposal and price estimate.",
            "isHiddenFromCustomers": false,
            "notes": "This is where you can add notes about this service that only you and your staff see.",
            "additionalInformation": "",
            "languageTag": "",
            "preBuffer": "PT0S",
            "postBuffer": "PT0S",
            "staffMemberIds": [
                "b4d51ef9-c136-4b96-b9e4-2e6877af7329"
            ],
            "isLocationOnline": false,
            "smsNotificationsEnabled": false,
            "isAnonymousJoinEnabled": false,
            "webUrl": "",
            "maximumAttendeesCount": 1,
            "defaultLocation": {
                "displayName": "Our office address",
                "locationEmailAddress": "",
                "locationUri": "",
                "locationType": "default",
                "uniqueId": null,
                "uniqueIdType": null,
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "countryOrRegion": "",
                    "postalCode": ""
                },
                "coordinates": {
                    "altitude": "NaN",
                    "latitude": "NaN",
                    "longitude": "NaN",
                    "accuracy": "NaN",
                    "altitudeAccuracy": "NaN"
                }
            },
            "defaultReminders": [
                {
                    "offset": "P1D",
                    "recipients": "allAttendees",
                    "message": ""
                }
            ],
            "schedulingPolicy": {
                "timeSlotInterval": "PT2H",
                "minimumLeadTime": "PT0S",
                "maximumAdvance": "P365D",
                "sendConfirmationsToOwner": true,
                "allowStaffSelection": true
            },
            "customQuestions": [
                {
                    "questionId": "64dbb852-1317-414a-870f-3fa5e3dc4809",
                    "isRequired": false
                },
                {
                    "questionId": "70365e57-b27c-4357-a0f6-563e5151bdd0",
                    "isRequired": false
                }
            ]
        }
    ]

export const staffMembersData = [
    {
        "@odata.type": "#microsoft.graph.bookingStaffMember",
        "id": "b4d51ef9-c136-4b96-b9e4-2e6877af7329",
        "displayName": "Debayo Graham",
        "emailAddress": "techd2@dwsnow.com",
        "availabilityIsAffectedByPersonalCalendar": true,
        "role": "guest",
        "useBusinessHours": false,
        "isEmailNotificationEnabled": false,
        "timeZone": "",
        "workingHours": [
            {
                "day": "sunday",
                "timeSlots": []
            },
            {
                "day": "monday",
                "timeSlots": [
                    {
                        "startTime": "08:00:00.0000000",
                        "endTime": "17:00:00.0000000"
                    }
                ]
            },
            {
                "day": "tuesday",
                "timeSlots": [
                    {
                        "startTime": "08:00:00.0000000",
                        "endTime": "17:00:00.0000000"
                    }
                ]
            },
            {
                "day": "wednesday",
                "timeSlots": [
                    {
                        "startTime": "08:00:00.0000000",
                        "endTime": "17:00:00.0000000"
                    }
                ]
            },
            {
                "day": "thursday",
                "timeSlots": []
            },
            {
                "day": "friday",
                "timeSlots": [
                    {
                        "startTime": "08:00:00.0000000",
                        "endTime": "17:00:00.0000000"
                    }
                ]
            },
            {
                "day": "saturday",
                "timeSlots": []
            }
        ]
    },
    {
        "@odata.type": "#microsoft.graph.bookingStaffMember",
        "id": "9e5f680a-8e51-41de-80d2-675d6545c73f",
        "displayName": "Christopher Hunt",
        "emailAddress": "info@wpintegrate.com",
        "availabilityIsAffectedByPersonalCalendar": false,
        "role": "viewer",
        "useBusinessHours": true,
        "isEmailNotificationEnabled": false,
        "timeZone": "",
        "workingHours": [
            {
                "day": "sunday",
                "timeSlots": []
            },
            {
                "day": "monday",
                "timeSlots": [
                    {
                        "startTime": "08:00:00.0000000",
                        "endTime": "17:00:00.0000000"
                    }
                ]
            },
            {
                "day": "tuesday",
                "timeSlots": [
                    {
                        "startTime": "08:00:00.0000000",
                        "endTime": "17:00:00.0000000"
                    }
                ]
            },
            {
                "day": "wednesday",
                "timeSlots": [
                    {
                        "startTime": "08:00:00.0000000",
                        "endTime": "17:00:00.0000000"
                    }
                ]
            },
            {
                "day": "thursday",
                "timeSlots": [
                    {
                        "startTime": "08:00:00.0000000",
                        "endTime": "17:00:00.0000000"
                    }
                ]
            },
            {
                "day": "friday",
                "timeSlots": [
                    {
                        "startTime": "08:00:00.0000000",
                        "endTime": "17:00:00.0000000"
                    }
                ]
            },
            {
                "day": "saturday",
                "timeSlots": []
            }
        ]
    },
    {
        "@odata.type": "#microsoft.graph.bookingStaffMember",
        "id": "cc9d5356-27cb-48ef-8cee-19246656399e",
        "displayName": "Room 4",
        "emailAddress": "rajutestdelete@dwsnow.com",
        "availabilityIsAffectedByPersonalCalendar": false,
        "role": "guest",
        "useBusinessHours": true,
        "isEmailNotificationEnabled": false,
        "timeZone": "",
        "workingHours": [
            {
                "day": "sunday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "monday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "tuesday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "wednesday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "thursday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "friday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "saturday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            }
        ]
    },
    {
        "@odata.type": "#microsoft.graph.bookingStaffMember",
        "id": "4d48c82e-f1dd-43a2-939a-9288734c38db",
        "displayName": "Dwayne Walters",
        "emailAddress": "techd1@dwsnow.com",
        "availabilityIsAffectedByPersonalCalendar": true,
        "role": "guest",
        "useBusinessHours": true,
        "isEmailNotificationEnabled": false,
        "timeZone": "",
        "workingHours": [
            {
                "day": "sunday",
                "timeSlots": []
            },
            {
                "day": "monday",
                "timeSlots": [
                    {
                        "startTime": "06:00:00.0000000",
                        "endTime": "14:00:00.0000000"
                    }
                ]
            },
            {
                "day": "tuesday",
                "timeSlots": [
                    {
                        "startTime": "06:00:00.0000000",
                        "endTime": "14:00:00.0000000"
                    }
                ]
            },
            {
                "day": "wednesday",
                "timeSlots": [
                    {
                        "startTime": "06:00:00.0000000",
                        "endTime": "21:00:00.0000000"
                    }
                ]
            },
            {
                "day": "thursday",
                "timeSlots": [
                    {
                        "startTime": "06:00:00.0000000",
                        "endTime": "14:00:00.0000000"
                    }
                ]
            },
            {
                "day": "friday",
                "timeSlots": [
                    {
                        "startTime": "06:00:00.0000000",
                        "endTime": "14:00:00.0000000"
                    }
                ]
            },
            {
                "day": "saturday",
                "timeSlots": []
            }
        ]
    },
    {
        "@odata.type": "#microsoft.graph.bookingStaffMember",
        "id": "ae15a660-e9c6-427b-b336-8a3a92b634e6",
        "displayName": "Room 1",
        "emailAddress": "dilipgenex125@gmail.com",
        "availabilityIsAffectedByPersonalCalendar": false,
        "role": "guest",
        "useBusinessHours": true,
        "isEmailNotificationEnabled": false,
        "timeZone": "",
        "workingHours": [
            {
                "day": "sunday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "monday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "tuesday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "wednesday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "thursday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "friday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "saturday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            }
        ]
    },
    {
        "@odata.type": "#microsoft.graph.bookingStaffMember",
        "id": "94099d9b-526b-4a38-8d63-d41c0e92d38e",
        "displayName": "Room 2",
        "emailAddress": "dilipgenex132@gmail.com",
        "availabilityIsAffectedByPersonalCalendar": false,
        "role": "guest",
        "useBusinessHours": true,
        "isEmailNotificationEnabled": false,
        "timeZone": "",
        "workingHours": [
            {
                "day": "sunday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "monday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "tuesday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "wednesday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "thursday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "friday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "saturday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            }
        ]
    },
    {
        "@odata.type": "#microsoft.graph.bookingStaffMember",
        "id": "e275ba58-1d40-48d7-a499-a3fc6a42ebb2",
        "displayName": "Room 3",
        "emailAddress": "dilipgenex127@gmail.com",
        "availabilityIsAffectedByPersonalCalendar": false,
        "role": "guest",
        "useBusinessHours": true,
        "isEmailNotificationEnabled": false,
        "timeZone": "",
        "workingHours": [
            {
                "day": "sunday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "monday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "tuesday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "wednesday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "thursday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "friday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            },
            {
                "day": "saturday",
                "timeSlots": [
                    {
                        "startTime": "00:00:00.0000000",
                        "endTime": "06:00:00.0000000"
                    }
                ]
            }
        ]
    }
]
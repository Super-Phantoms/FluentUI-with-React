export const formGetDurationInSeconds = (time: String, point = "") => {
    let tempTime = 0,
        D = 'D',
        H = 'H',
        M = 'M',
        DT = 'DT',
        PT = 'PT';

    //P1DT1H
    if (time.indexOf(DT) != -1 && time.indexOf(H) != -1) {
        let data = time.split("DT");
        let dayHrs: any = data[0].replace("P", "");
        dayHrs = dayHrs * 24 * 60;
        let hrsData: any = data[1].replace("H", "");
        return Number(hrsData * 60) + Number(dayHrs);

    }

    //P1D
    if (time.indexOf(D) != -1) {
        let data = time.split("P");
        let hrs: any = data[1].replace("D", "");
        return hrs * 24 * 60;
    }

    //PT1H30M
    if (time.indexOf(H) != -1 && time.indexOf(M) != -1) {
        let data = time.split("H");
        let hrs: any = data[0].replace("PT", "");
        hrs = hrs * 60;
        let minutes: any = data[1].replace("M", "");
        minutes = point == "for_start" ? minutes : minutes;
        tempTime = Number(hrs) + Number(minutes);
        return Number(tempTime);
    }

    //PT1H
    if (time.indexOf(H) != -1) {
        let data = time.split("PT");
        let hrs: any = data[1].replace("H", "");
        return Number(hrs * 60);
    }

    //PT15M
    if (time.indexOf(M) != -1) {
        let data = time.split("PT");
        let minutes: any = data[1].replace("M", "");
        minutes = point == "for_start" ? minutes : minutes;
        console.log({ minutes });
        return Number(minutes);
    }
    //PT0S
    return Number(tempTime / 60);
}

export const firstLetterCapitalize = (s: any) => s && s[0].toUpperCase() + s.slice(1)

export const getCurrecySymbol = (currencyString: String) => {
    const currency = [
        {
            "id": "AED",
            "symbol": "د.إ.‏"
        },
        {
            "id": "AFN",
            "symbol": "؋"
        },
        {
            "id": "ALL",
            "symbol": "Lekë"
        },
        {
            "id": "AMD",
            "symbol": "֏"
        },
        {
            "id": "ANG",
            "symbol": "NAf."
        },
        {
            "id": "AOA",
            "symbol": "Kz"
        },
        {
            "id": "ARS",
            "symbol": "$"
        },
        {
            "id": "AUD",
            "symbol": "$"
        },
        {
            "id": "AWG",
            "symbol": "Afl."
        },
        {
            "id": "AZN",
            "symbol": "₼"
        },
        {
            "id": "BAM",
            "symbol": "КМ"
        },
        {
            "id": "BBD",
            "symbol": "$"
        },
        {
            "id": "BDT",
            "symbol": "৳"
        },
        {
            "id": "BGN",
            "symbol": "лв."
        },
        {
            "id": "BHD",
            "symbol": "د.ب.‏"
        },
        {
            "id": "BIF",
            "symbol": "FBu"
        },
        {
            "id": "BMD",
            "symbol": "$"
        },
        {
            "id": "BND",
            "symbol": "$"
        },
        {
            "id": "BOB",
            "symbol": "Bs"
        },
        {
            "id": "BRL",
            "symbol": "R$"
        },
        {
            "id": "BSD",
            "symbol": "$"
        },
        {
            "id": "BTN",
            "symbol": "Nu."
        },
        {
            "id": "BWP",
            "symbol": "P"
        },
        {
            "id": "BYN",
            "symbol": "Br"
        },
        {
            "id": "BZD",
            "symbol": "$"
        },
        {
            "id": "CAD",
            "symbol": "$"
        },
        {
            "id": "CDF",
            "symbol": "FC"
        },
        {
            "id": "CHF",
            "symbol": "CHF"
        },
        {
            "id": "CLP",
            "symbol": "$"
        },
        {
            "id": "CNY",
            "symbol": "¥"
        },
        {
            "id": "COP",
            "symbol": "$"
        },
        {
            "id": "CRC",
            "symbol": "₡"
        },
        {
            "id": "CUP",
            "symbol": "$"
        },
        {
            "id": "CVE",
            "symbol": "​"
        },
        {
            "id": "CZK",
            "symbol": "Kč"
        },
        {
            "id": "DJF",
            "symbol": "Fdj"
        },
        {
            "id": "DKK",
            "symbol": "kr."
        },
        {
            "id": "DOP",
            "symbol": "$"
        },
        {
            "id": "DZD",
            "symbol": "د.ج.‏"
        },
        {
            "id": "EGP",
            "symbol": "ج.م.‏"
        },
        {
            "id": "ERN",
            "symbol": "Nfk"
        },
        {
            "id": "ETB",
            "symbol": "Br"
        },
        {
            "id": "EUR",
            "symbol": "€"
        },
        {
            "id": "FJD",
            "symbol": "$"
        },
        {
            "id": "FKP",
            "symbol": "£"
        },
        {
            "id": "GBP",
            "symbol": "£"
        },
        {
            "id": "GEL",
            "symbol": "₾"
        },
        {
            "id": "GHS",
            "symbol": "GH₵"
        },
        {
            "id": "GIP",
            "symbol": "£"
        },
        {
            "id": "GMD",
            "symbol": "D"
        },
        {
            "id": "GNF",
            "symbol": "FG"
        },
        {
            "id": "GTQ",
            "symbol": "Q"
        },
        {
            "id": "GYD",
            "symbol": "$"
        },
        {
            "id": "HKD",
            "symbol": "$"
        },
        {
            "id": "HNL",
            "symbol": "L"
        },
        {
            "id": "HRK",
            "symbol": "kn"
        },
        {
            "id": "HTG",
            "symbol": "G"
        },
        {
            "id": "HUF",
            "symbol": "Ft"
        },
        {
            "id": "IDR",
            "symbol": "Rp"
        },
        {
            "id": "ILS",
            "symbol": "₪"
        },
        {
            "id": "INR",
            "symbol": "₹"
        },
        {
            "id": "IQD",
            "symbol": "د.ع.‏"
        },
        {
            "id": "IRR",
            "symbol": "ريال"
        },
        {
            "id": "ISK",
            "symbol": "ISK"
        },
        {
            "id": "JMD",
            "symbol": "$"
        },
        {
            "id": "JOD",
            "symbol": "د.ا.‏"
        },
        {
            "id": "JPY",
            "symbol": "¥"
        },
        {
            "id": "KES",
            "symbol": "Ksh"
        },
        {
            "id": "KGS",
            "symbol": "сом"
        },
        {
            "id": "KHR",
            "symbol": "៛"
        },
        {
            "id": "KMF",
            "symbol": "CF"
        },
        {
            "id": "KPW",
            "symbol": "₩"
        },
        {
            "id": "KRW",
            "symbol": "₩"
        },
        {
            "id": "KWD",
            "symbol": "د.ك.‏"
        },
        {
            "id": "KYD",
            "symbol": "$"
        },
        {
            "id": "KZT",
            "symbol": "₸"
        },
        {
            "id": "LAK",
            "symbol": "₭"
        },
        {
            "id": "LBP",
            "symbol": "ل.ل.‏"
        },
        {
            "id": "LKR",
            "symbol": "රු."
        },
        {
            "id": "LRD",
            "symbol": "$"
        },
        {
            "id": "LYD",
            "symbol": "د.ل.‏"
        },
        {
            "id": "MAD",
            "symbol": "د.م.‏"
        },
        {
            "id": "MDL",
            "symbol": "L"
        },
        {
            "id": "MGA",
            "symbol": "Ar"
        },
        {
            "id": "MKD",
            "symbol": "ден"
        },
        {
            "id": "MMK",
            "symbol": "K"
        },
        {
            "id": "MNT",
            "symbol": "₮"
        },
        {
            "id": "MOP",
            "symbol": "MOP$"
        },
        {
            "id": "MRU",
            "symbol": "أ.م.‏"
        },
        {
            "id": "MUR",
            "symbol": "Rs"
        },
        {
            "id": "MVR",
            "symbol": "ރ."
        },
        {
            "id": "MWK",
            "symbol": "MK"
        },
        {
            "id": "MXN",
            "symbol": "$"
        },
        {
            "id": "MYR",
            "symbol": "RM"
        },
        {
            "id": "MZN",
            "symbol": "MTn"
        },
        {
            "id": "NAD",
            "symbol": "$"
        },
        {
            "id": "NGN",
            "symbol": "₦"
        },
        {
            "id": "NIO",
            "symbol": "C$"
        },
        {
            "id": "NOK",
            "symbol": "kr"
        },
        {
            "id": "NPR",
            "symbol": "रु"
        },
        {
            "id": "NZD",
            "symbol": "$"
        },
        {
            "id": "OMR",
            "symbol": "ر.ع.‏"
        },
        {
            "id": "PAB",
            "symbol": "B/."
        },
        {
            "id": "PEN",
            "symbol": "S/"
        },
        {
            "id": "PGK",
            "symbol": "K"
        },
        {
            "id": "PHP",
            "symbol": "₱"
        },
        {
            "id": "PKR",
            "symbol": "Rs"
        },
        {
            "id": "PLN",
            "symbol": "zł"
        },
        {
            "id": "PYG",
            "symbol": "₲"
        },
        {
            "id": "QAR",
            "symbol": "ر.ق.‏"
        },
        {
            "id": "RON",
            "symbol": "RON"
        },
        {
            "id": "RSD",
            "symbol": "дин."
        },
        {
            "id": "RUB",
            "symbol": "₽"
        },
        {
            "id": "RWF",
            "symbol": "RF"
        },
        {
            "id": "SAR",
            "symbol": "ر.س.‏"
        },
        {
            "id": "SBD",
            "symbol": "$"
        },
        {
            "id": "SCR",
            "symbol": "SR"
        },
        {
            "id": "SDG",
            "symbol": "ج.س."
        },
        {
            "id": "SEK",
            "symbol": "kr"
        },
        {
            "id": "SGD",
            "symbol": "$"
        },
        {
            "id": "SHP",
            "symbol": "£"
        },
        {
            "id": "SLL",
            "symbol": "Le"
        },
        {
            "id": "SOS",
            "symbol": "S"
        },
        {
            "id": "SRD",
            "symbol": "$"
        },
        {
            "id": "SSP",
            "symbol": "£"
        },
        {
            "id": "STN",
            "symbol": "Db"
        },
        {
            "id": "SYP",
            "symbol": "ل.س.‏"
        },
        {
            "id": "SZL",
            "symbol": "E"
        },
        {
            "id": "THB",
            "symbol": "฿"
        },
        {
            "id": "TJS",
            "symbol": "смн"
        },
        {
            "id": "TMT",
            "symbol": "m."
        },
        {
            "id": "TND",
            "symbol": "د.ت.‏"
        },
        {
            "id": "TOP",
            "symbol": "T$"
        },
        {
            "id": "TRY",
            "symbol": "₺"
        },
        {
            "id": "TTD",
            "symbol": "$"
        },
        {
            "id": "TWD",
            "symbol": "NT$"
        },
        {
            "id": "TZS",
            "symbol": "TSh"
        },
        {
            "id": "UAH",
            "symbol": "₴"
        },
        {
            "id": "UGX",
            "symbol": "USh"
        },
        {
            "id": "USD",
            "symbol": "$"
        },
        {
            "id": "UYU",
            "symbol": "$"
        },
        {
            "id": "UZS",
            "symbol": "сўм"
        },
        {
            "id": "VES",
            "symbol": "Bs.S"
        },
        {
            "id": "VND",
            "symbol": "₫"
        },
        {
            "id": "VUV",
            "symbol": "VT"
        },
        {
            "id": "WST",
            "symbol": "WS$"
        },
        {
            "id": "XAF",
            "symbol": "FCFA"
        },
        {
            "id": "XCD",
            "symbol": "EC$"
        },
        {
            "id": "XDR",
            "symbol": "XDR"
        },
        {
            "id": "XOF",
            "symbol": "CFA"
        },
        {
            "id": "XPF",
            "symbol": "FCFP"
        },
        {
            "id": "YER",
            "symbol": "ر.ي.‏"
        },
        {
            "id": "ZAR",
            "symbol": "R"
        },
        {
            "id": "ZMW",
            "symbol": "K"
        }
    ];
    const filterSymbol = currency.filter((currency) => currency.id == currencyString);
    return filterSymbol ? filterSymbol : '$';
}

//price type in the service
export const getPriceTypes = (defaultPriceType: string, defaultPrice: number, currencySymbol: any, duration: number) => {
    if (defaultPriceType === 'notSet') {
        return {
            defaultPriceType: '',
            eventPrice: defaultPrice
        }
    }

    if (defaultPriceType === 'fixedPrice') {
        return {
            defaultPriceType: `${currencySymbol.symbol}${defaultPrice}`,
            eventPrice: defaultPrice
        }
    }

    if (defaultPriceType === 'startingAt') {
        return {
            defaultPriceType: `${currencySymbol.symbol}${defaultPrice} and up`,
            eventPrice: defaultPrice
        }
    }

    if (defaultPriceType === 'hourly') {
        const durationInHour = (duration / 60) / 60;
        return {
            defaultPriceType: `${currencySymbol.symbol}${defaultPrice}/hour`,
            eventPrice: durationInHour * defaultPrice
        }

    }

    if (defaultPriceType === 'free') {
        return {
            defaultPriceType: 'Free',
            eventPrice: defaultPrice
        }
    }
    if (defaultPriceType === 'priceVaries') {
        return {
            defaultPriceType: 'Price varies',
            eventPrice: defaultPrice
        }
    }
    if (defaultPriceType === 'callUs') {
        return {
            defaultPriceType: 'Call for price',
            eventPrice: defaultPrice
        }
    }
}

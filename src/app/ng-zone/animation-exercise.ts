const stepSquats = [
    ['-1px -1px'],
    ['-1px -1px'],
    ['-1px -1px'],
    ['-1px -1px'],
    ['-190px -1px'],
    ['-379px -1px'],
    ['-568px -1px'],
    ['-757px -1px'],
    ['-946px -1px'],
    ['-1135px -1px'],
    ['-1324px -1px'],
    ['-1513px -1px'],
    ['-1702px -1px'],
    ['-1px -282px'],
    ['-190px -282px'],
    ['-379px -282px'],
    ['-568px -282px'],
    ['-757px -282px'],
    ['-946px -282px'],
    ['-1135px -282px'],
    ['-1324px -282px'],
    ['-1513px -282px'],
    ['-1702px -282px'],
    ['-1px -563px'],
    ['-1px -563px'],
    ['-1px -563px'],
    ['-1px -563px'],
    ['-190px -563px'],
    ['-379px -563px'],
    ['-568px -563px'],
    ['-757px -563px'],
    ['-946px -563px'],
    ['-1135px -563px'],
    ['-1324px -563px'],
    ['-1513px -563px'],
    ['-1702px -563px'],
    ['-1px -844px'],
    ['-190px -844px'],
    ['-379px -844px'],
    ['-568px -844px'],
    ['-757px -844px'],
    ['-946px -844px'],
    ['-1135px -844px'],
    ['-1324px -844px'],
    ['-1513px -844px'],
    ['-1702px -844px']
];

const stepAbdominals = [
    ['-1px -1px'],
    ['-239px -1px'],
    ['-477px -1px'],
    ['-715px -1px'],
    ['-1px -138px'],
    ['-239px -138px'],
    ['-477px -138px'],
    ['-715px -138px'],
    ['-1px -275px'],
    ['-239px -275px'],
    ['-477px -275px'],
    ['-715px -275px'],
    ['-1px -412px'],
    ['-239px -412px'],
    ['-477px -412px'],
    ['-715px -412px'],
    ['-1px -549px'],
    ['-239px -549px'],
    ['-477px -549px'],
    ['-715px -549px'],
    ['-1px -686px'],
    ['-239px -686px'],
    ['-477px -686px'],
    ['-715px -686px'],
    ['-1px -823px'],
    ['-477px -823px'],
    ['-1px -1px'],
    ['-1px -1px'],
    ['-1px -1px']
];

const stepBike = [
    ['-1px -1px'],
    ['-306px -1px'],
    ['-611px -1px'],
    ['-916px -1px'],
    ['-1221px -1px'],
    ['-1526px -1px'],
    ['-1px -295px'],
    ['-306px -295px'],
    ['-611px -295px'],
    ['-916px -295px'],
    ['-1221px -295px'],
    ['-1526px -295px'],
    ['-1px -589px'],
    ['-306px -589px'],
    ['-611px -589px'],
    ['-916px -589px'],
    ['-1221px -589px'],
    ['-1526px -589px'],
    ['-1px -883px'],
    ['-306px -883px'],
    ['-611px -883px'],
    ['-916px -883px'],
    ['-1221px -883px'],
    ['-1526px -883px']
];

const stepDancing = [
    ['-212px -1px'],
    ['-423px -1px'],
    ['-634px -1px'],
    ['-845px -1px'],
    ['-1056px -1px'],
    ['-1267px -1px'],
    ['-1478px -1px'],
    ['-1689px -1px'],
    ['-1px -297px'],
    ['-212px -297px'],
    ['-423px -297px'],
    ['-634px -297px'],
    ['-845px -297px'],
    ['-1056px -297px'],
    ['-1267px -297px'],
    ['-1478px -297px'],
    ['-1689px -297px'],
    ['-1px -593px'],
    ['-212px -593px'],
    ['-423px -593px'],
    ['-634px -593px'],
    ['-845px -593px'],
    ['-1056px -593px'],
    ['-1267px -593px'],
    ['-1478px -593px'],
    ['-1689px -593px'],
    ['-1px -889px'],
    ['-212px -889px'],
    ['-423px -889px'],
    ['-634px -889px'],
    ['-845px -889px'],
    ['-1056px -889px'],
    ['-1267px -889px'],
    ['-1478px -889px'],
    ['-1689px -889px'],
    ['-1px -1185px'],
    ['-212px -1185px'],
    ['-423px -1185px'],
    ['-634px -1185px'],
    ['-845px -1185px'],
    ['-1056px -1185px'],
    ['-1267px -1185px'],
    ['-1478px -1185px'],
    ['-1689px -1185px'],
    ['-1px -1481px'],
    ['-212px -1481px'],
    ['-423px -1481px'],
    ['-634px -1481px'],
    ['-845px -1481px'],
    ['-1056px -1481px'],
    ['-1267px -1481px'],
    ['-1478px -1481px'],
    ['-1689px -1481px'],
    ['-1px -1777px'],
    ['-212px -1777px'],
    ['-423px -1777px'],
    ['-634px -1777px'],
    ['-845px -1777px'],
    ['-1056px -1777px'],
    ['-1267px -1777px'],
    ['-1478px -1777px'],
    ['-1689px -1777px'],
    ['-1px -2073px'],
    ['-212px -2073px'],
    ['-423px -2073px'],
    ['-845px -2073px'],
    ['-1056px -2073px'],
    ['-1267px -2073px'],
    ['-1478px -2073px'],
    ['-1689px -2073px']
];

export function initAnimation(ref, nameClass: string, frames: number) {
    const element = ref.nativeElement.querySelector(nameClass);
    let iterator = 0;
    //let interval;
    //clearInterval(interval);

    switch (nameClass) {
        case '.exercise--squats':
            setInterval(() => {
                element.style.backgroundPosition = stepSquats[iterator++];
                if (iterator >= stepSquats.length) iterator = 0;
            }, frames);
            break;
        case '.exercise--abdominals':
            setInterval(() => {
                element.style.backgroundPosition = stepAbdominals[iterator++];
                if (iterator >= stepAbdominals.length) iterator = 0;
            }, frames);
            break;
        case '.exercise--bike':
            setInterval(() => {
                element.style.backgroundPosition = stepBike[iterator++];
                if (iterator >= stepBike.length) iterator = 0;
            }, frames);
            break;
        default:
            setInterval(() => {
                element.style.backgroundPosition = stepDancing[iterator++];
                if (iterator >= stepDancing.length) iterator = 0;
            }, frames);
            break;
    }
}

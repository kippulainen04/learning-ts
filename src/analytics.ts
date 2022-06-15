let logger;

function sendAnalytics(data: string) {
    console.log(data);
    logger = true;
    logger = 'Nio';
    console.log(logger);
}

sendAnalytics('The data')
function parseEvents(EVENTS) {

    //console.log(EVENTS);

    let parsedEvents = [];

    console.log(EVENTS);

    for(const event of EVENTS) {

        if(event.YouTube_Link && event.YouTube_Link.indexOf("http") !== -1 && event.FOL_Session && event.FOL_Session.Id) {
            //console.log(event);

            let eventToAdd = {
                date: (event.Date ? event.Date : null),
                title: (event.Title ? event.Title : ''),
                description: (event.Description ? event.Description : ''),
                facilitator: (event.Facilitator ? event.Facilitator : ''),
                section: (event.Section.Value ? event.Section.Value : ''),
                youtubeLink: (event.YouTube_Link ? event.YouTube_Link : null),
                sessionId: (event.FOL_Session.Id ? event.FOL_Session.Id: null),
                topic: (event.TopicsCovered ? event.TopicsCovered: ''),

            }

            parsedEvents.push(eventToAdd);
        }

        
    }

    console.log(parsedEvents);
    return parsedEvents.sort(compareValues('date'));

}

function parseSessions(SESSIONS) {

    // console.log(SESSIONS);


    let parsedSessions = [];

    for(const session of SESSIONS) {

        let sessionToAdd = {
            id: (session.ID ? session.ID : ''),
            title: (session.Title ? session.Title : ''),
            section: (session.Session_Type.Value ? session.Session_Type.Value : ''),
            resourceLink: (session.Resources_Link ? session.Resources_Link : null)
        }

        parsedSessions.push(sessionToAdd);

    }
    // console.log(parsedSessions);
    return parsedSessions.sort(compareValues('title'));

}

function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string') ?
            a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}
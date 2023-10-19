var currentModule = 1;
var directLink = false;

function updatePage(view, data) {

    let account;

    if (!view) {
        navigateToModules();

    } else {

        if(!directLink) {
            showBackNav(view);
        }
        //showAccountNav(account);

        switch (view) {
            case VIEWS.error:
                showError(data);
                break;
            case VIEWS.modules:
                showModulesPage(data);
                break;
            case VIEWS.recordings:
                showRecordingsPage(data);
                break;
            case VIEWS.loading:
                showLoadingPage(data);
                break;
        }

    }

}


function navigateToModules(type) {
    updatePage(VIEWS.loading, 'Modules');
    updatePage(VIEWS.modules, type);
}

function navigateToRecordings(modId) {
    if (modId) {
        currentModule = modId;
    }

    updatePage(VIEWS.loading, 'Files and Recordings');

    updatePage(VIEWS.recordings, currentModule);
}

function navigateToError(error) {
    updatePage(VIEWS.error, error);
}

$(document).ready(function () {

    CURURL = location.protocol + '//' + location.host + location.pathname;


    getEventData ();
    getSessionData();

});

function loadPage(){
    if(PARSEDEVENTS && PARSEDSESSIONS) {
        let params = getParams(window.location.href);

        if (params.heading && params.heading == 'false'){
            SHOWTYPEHEADING = false;
        }

        if (params.module) {
            directLink = true;
            navigateToRecordings(params.module);
        } else if(params.type) {
            navigateToModules(params.type);
        } else {
            updatePage();
        }
    }
}



/**
 * Get the Event Data
 */
 
function getEventData () {
    //Show location and date
    // showHeader();
    // showDate();
    //your code here
    //console.log('Loading Data');
    let request = new XMLHttpRequest();
    request.open('GET', 'https://www.googleapis.com/drive/v3/files/1jP_yzd2kpHnHyx6s-w8eNJIYJnI4qLNeNHQkDU6rrVE/export?key=AIzaSyA8WTU9SsJleUjmAqdDY7294R1WVxMqAOg&mimeType=text/plain');
    request.responseType = 'text';
    request.onload = function() {
        PARSEDEVENTS = parseEvents(eval(request.response));
        loadPage();
      };
    request.send();
 }

 /**
 * Get the Session Data
 */
 
function getSessionData() {
    //Show location and date
    // showHeader();
    // showDate();
    //your code here
    //console.log('Loading Data');
    let request = new XMLHttpRequest();
    request.open('GET', 'https://www.googleapis.com/drive/v3/files/1EZC-fxQPs1ODCmBVmlZuBcUvFcet6Pa6oYypKcVPLXQ/export?key=AIzaSyA8WTU9SsJleUjmAqdDY7294R1WVxMqAOg&mimeType=text/plain');
    request.responseType = 'text';
    request.onload = function() {
        PARSEDSESSIONS = parseSessions(eval(request.response));
        loadPage();
      };
    request.send();
 }



/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
var getParams = function (url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};

//Sort Values

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
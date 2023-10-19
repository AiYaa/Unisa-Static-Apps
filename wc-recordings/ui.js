// Select DOM elements to work with
const authenticatedNav = document.getElementById('authenticated-nav');
const accountNav = document.getElementById('account-nav');
const mainContainer = document.getElementById('main-container');



function createElement(section, className, text) {
    var element = document.createElement(section);
    element.className = className;

    if (text) {
        var textNode = document.createTextNode(text);
        element.appendChild(textNode);
    }

    return element;
}

function showBackNav(view) {
    authenticatedNav.innerHTML = '';

    if (view && view == VIEWS.recordings) {
        authenticatedNav.innerHTML = '';

        var backNav = createElement('li', 'nav-item');
        var backLink = createElement('button', 'btn btn-link nav-link');
        var userIcon = createElement('i', 'far fa-arrow-alt-circle-left fa-lg align-self-center');
        backLink.appendChild(userIcon);
        backLink.setAttribute('onclick', 'navigateToModules();');
        backNav.appendChild(backLink);
        authenticatedNav.appendChild(backNav);
    }
}


function showLoadingPage(resource) {

    var container = createElement('div', 'container-fluid');

    var loadingMessage = createElement('h2', null, 'Loading ' + resource + '...');
    container.appendChild(loadingMessage);

    var row4 = createElement('div', 'row');

    var supportMessage = createElement('p', 'mt-4 mb-4', 'If you encounter any problems viewing the resources please complete the following form: ');
    var formLink = createElement('a');
    var link = document.createTextNode("Support Form");
    formLink.appendChild(link);
    formLink.title = "https://forms.office.com/Pages/ResponsePage.aspx?id=jIuayqM-mUekPlUQOY56OxJ6iDlIGxFHqexzN7MLxFJUMjhaRlMzRjg2RU4zS0tFSVdKVzlCNE5XRi4u";
    formLink.href = "https://forms.office.com/Pages/ResponsePage.aspx?id=jIuayqM-mUekPlUQOY56OxJ6iDlIGxFHqexzN7MLxFJUMjhaRlMzRjg2RU4zS0tFSVdKVzlCNE5XRi4u";
    formLink.target = "_blank";
    supportMessage.appendChild(formLink);
    row4.appendChild(supportMessage);
    container.appendChild(row4);
    mainContainer.innerHTML = '';
    mainContainer.appendChild(container);
}


function showModulesPage(section) {

    var container = createElement('div', 'container-fluid')



    if (!section || section == 'tutorial') {

        //Writing Cnetre

        if (SHOWTYPEHEADING == true) {
            var row0 = createElement('div', 'row');
            var title = createElement('h2', 'text-center mt-4 mb-4', 'Tutorials')
            row0.appendChild(title);
            container.appendChild(row0);
        }



        var row1 = createElement('div', 'row row-cols-1 row-cols-sm-1 row-cols-md-2');

        for (const session of PARSEDSESSIONS) {
            if (session.section == "Tutorial") {

                var column = createElement('div', 'col');
                // var moduleButton = createElement('button', 'btn btn-secondary btn-lg btn-block  mt-2 mb-2', session.title);
                // moduleButton.setAttribute('onclick', 'navigateToRecordings(' + "'" + session.id + "'" + ');');
                // column.appendChild(moduleButton);
                // row1.appendChild(column);

                var resourceButton = createElement('a', 'btn btn-secondary btn-lg btn-block  mt-2 mb-2', session.title);
                //var link = document.createTextNode("Support Form");
                //resourceButton.appendChild(link);
                resourceButton.title = session.title;
                resourceButton.href = CURURL + "?module=" + session.id;
                resourceButton.target = "_blank";
                column.appendChild(resourceButton);
                row1.appendChild(column);
            }

        }

        container.appendChild(row1);
    }

    if (!section || section == 'writing') {

        //Writing Cnetre

        var row0 = createElement('div', 'row');
        var title = createElement('h2', 'text-center mt-4 mb-4', 'Writing Centre')
        row0.appendChild(title);
        container.appendChild(row0);

        var row1 = createElement('div', 'row row-cols-1 row-cols-sm-1 row-cols-md-1');

        for (const session of PARSEDSESSIONS) {
            if (session.section == "Writing Centre") {

                var column = createElement('div', 'col');
                // var moduleButton = createElement('button', 'btn btn-secondary btn-lg btn-block  mt-2 mb-2', session.title);
                // moduleButton.setAttribute('onclick', 'navigateToRecordings(' + "'" + session.id + "'" + ');');
                // column.appendChild(moduleButton);
                // row1.appendChild(column);
                var resourceButton = createElement('a', 'btn btn-secondary btn-lg btn-block  mt-2 mb-2', session.title);
                resourceButton.title = session.title;
                resourceButton.href = CURURL + "?module=" + session.id;
                resourceButton.target = "_blank";
                column.appendChild(resourceButton);
                row1.appendChild(column);
            }

        }

        container.appendChild(row1);
    }

    if (!section || section == 'numeracy') {

        //Numeracy Centre

        var row0 = createElement('div', 'row');
        var title = createElement('h2', 'text-center mt-4 mb-4', 'Numeracy Centre')
        row0.appendChild(title);
        container.appendChild(row0);

        var row1 = createElement('div', 'row row-cols-1 row-cols-sm-1 row-cols-md-1');

        for (const session of PARSEDSESSIONS) {
            if (session.section == "Numeracy Centre") {

                var column = createElement('div', 'col');
                // var moduleButton = createElement('button', 'btn btn-secondary btn-lg btn-block  mt-2 mb-2', session.title);
                // moduleButton.setAttribute('onclick', 'navigateToRecordings(' + "'" + session.id + "'" + ');');
                // column.appendChild(moduleButton);
                // row1.appendChild(column);
                var resourceButton = createElement('a', 'btn btn-secondary btn-lg btn-block  mt-2 mb-2', session.title);
                resourceButton.title = session.title;
                resourceButton.href = CURURL + "?module=" + session.id;
                resourceButton.target = "_blank";
                column.appendChild(resourceButton);
                row1.appendChild(column);
            }

        }

        container.appendChild(row1);
    }

    if (!section || section == 'postgraduate') {

        //Postgraduate

        var row0 = createElement('div', 'row');
        var title = createElement('h2', 'text-center mt-4 mb-4', 'Postgraduate')
        row0.appendChild(title);
        container.appendChild(row0);

        var row1 = createElement('div', 'row row-cols-1 row-cols-sm-1 row-cols-md-2');

        for (const session of PARSEDSESSIONS) {
            if (session.section == "Postgraduate") {

                var column = createElement('div', 'col');
                var moduleButton = createElement('button', 'btn btn-secondary btn-lg btn-block  mt-2 mb-2', session.title);
                moduleButton.setAttribute('onclick', 'navigateToRecordings(' + "'" + session.id + "'" + ');');
                column.appendChild(moduleButton);
                row1.appendChild(column);
            }

        }

        container.appendChild(row1);
    }


    // var row4 = createElement('div', 'row');

    // var supportMessage = createElement('p', 'mt-4 mb-4', 'If you encounter any problems viewing the resources please complete the following form: ');
    // var formLink = createElement('a');
    // var link = document.createTextNode("Support Form");
    // formLink.appendChild(link);
    // formLink.title = "https://forms.office.com/Pages/ResponsePage.aspx?id=jIuayqM-mUekPlUQOY56OxJ6iDlIGxFHqexzN7MLxFJUMjhaRlMzRjg2RU4zS0tFSVdKVzlCNE5XRi4u";
    // formLink.href = "https://forms.office.com/Pages/ResponsePage.aspx?id=jIuayqM-mUekPlUQOY56OxJ6iDlIGxFHqexzN7MLxFJUMjhaRlMzRjg2RU4zS0tFSVdKVzlCNE5XRi4u";
    // formLink.target = "_blank";
    // supportMessage.appendChild(formLink);
    // row4.appendChild(supportMessage);

    // container.appendChild(row4);

    mainContainer.innerHTML = '';
    mainContainer.appendChild(container);

}

function showRecordingsPage(modId) {

    //console.log('Recording page called')

    let curModule = null;

    for (const module of PARSEDSESSIONS) {
        if (module.id == modId) {
            curModule = module;
        }
    }


    var container = createElement('div', 'container')

    container.appendChild(createElement('h1', 'mt-4 mb-4', curModule.title))

    container.appendChild(createElement('h3', 'mt-4 mb-4', 'Resources'));
    container.appendChild(createElement('p', null, 'Presentations and other documents referenced during sessions and which are included in the recorded sessions.'));
    container.appendChild(createElement('p', null, ' '));

    if (!curModule.resourceLink || curModule.resourceLink == "") {
        container.appendChild(createElement('p', null, 'No resources available.'))
    } else {

        var row1 = createElement('div', 'row row-cols-1 row-cols-sm-1 row-cols-md-1');
        var column = createElement('div', 'col');
        var resourceButton = createElement('a', 'btn btn-secondary btn-lg btn-block  mt-2 mb-2', 'Open Class Notes Folder');
        //var link = document.createTextNode("Support Form");
        //resourceButton.appendChild(link);
        resourceButton.title = curModule.resourceLink;
        resourceButton.href = curModule.resourceLink;
        resourceButton.target = "_blank";
        column.appendChild(resourceButton);
        row1.appendChild(column);

        container.appendChild(row1);

    }

    // if (!resources || resources.length == 0) {
    //     container.appendChild(createElement('p', null, 'No recources available.'))
    // } else {

    //     var table = createElement('table', 'table');
    //     container.appendChild(table);

    //     var thead = document.createElement('thead');
    //     table.appendChild(thead);

    //     var headerrow = document.createElement('tr');
    //     thead.appendChild(headerrow);

    //     var organizer = createElement('th', null, 'File Name');
    //     organizer.setAttribute('scope', 'col');
    //     headerrow.appendChild(organizer);

    //     var subject = createElement('th', null, 'Download');
    //     subject.setAttribute('scope', 'col');
    //     headerrow.appendChild(subject);

    //     var tbody = document.createElement('tbody');
    //     table.appendChild(tbody);

    //     for (const resource of resources) {
    //         var resourceRow = document.createElement('tr');
    //         //eventrow.setAttribute('key', event.id);
    //         tbody.appendChild(resourceRow);

    //         var organizercell = createElement('td', null, resource.name);
    //         resourceRow.appendChild(organizercell);

    //         var downloadLink = createElement('a');
    //         var link = document.createTextNode("Open File or Folder");
    //         downloadLink.appendChild(link);
    //         downloadLink.title = resource.webUrl;
    //         downloadLink.href = resource.webUrl + '?download=1';
    //         //downloadLink.download = resource.webUrl;
    //         downloadLink.target = "_blank";


    //         var subjectcell = createElement('td');
    //         subjectcell.appendChild(downloadLink);
    //         resourceRow.appendChild(subjectcell);
    //     }

    // }

    container.appendChild(createElement('h3', 'mt-4 mb-4', 'Recorded Sessions'));

    //Get all recordings

    let recordings = [];
    //var recordingsToStart = [];

    for (const recording of PARSEDEVENTS) {
        if (recording.sessionId == modId && recording.youtubeLink != "") {
            recordings.push(recording);
        }
    }


    if (!recordings || recordings.length == 0) {
        container.appendChild(createElement('p', null, 'No recordings available.'))

    } else {

        var sessionNumber = 1;

        for (const recording of recordings) {

            container.appendChild(createElement('h4', 'mt-4 mb-4', 'Session ' + sessionNumber + ': ' + moment.utc(recording.date).subtract(7, 'hours').format('DD MMMM YYYY')));

            sessionNumber++;

            if (recording.description) {
                var descripDiv = createElement('div');
                descripDiv.innerHTML = recording.topic;
                container.appendChild(descripDiv);
            }

            // if (sessionFiles['Session ' + recording.sessionNo] && sessionFiles['Session ' + recording.sessionNo].length != 0) {
            //     var table = createElement('table', 'table');
            //         container.appendChild(table);

            //         var thead = document.createElement('thead');
            //         table.appendChild(thead);

            //         var headerrow = document.createElement('tr');
            //         thead.appendChild(headerrow);

            //         var organizer = createElement('th', null, 'File Name');
            //         organizer.setAttribute('scope', 'col');
            //         headerrow.appendChild(organizer);

            //         var subject = createElement('th', null, 'Download');
            //         subject.setAttribute('scope', 'col');
            //         headerrow.appendChild(subject);

            //         var tbody = document.createElement('tbody');
            //         table.appendChild(tbody);

            //     for (const file of sessionFiles['Session ' + recording.sessionNo]) {

            //         var resourceRow = document.createElement('tr');
            //             //eventrow.setAttribute('key', event.id);
            //             tbody.appendChild(resourceRow);

            //             var organizercell = createElement('td', null, file.name);
            //             resourceRow.appendChild(organizercell);

            //             var downloadLink = createElement('a');
            //             var link = document.createTextNode("Open File or Folder");
            //             downloadLink.appendChild(link);
            //             downloadLink.title = file.webUrl;
            //             downloadLink.href = file.webUrl + '?download=1';
            //             //downloadLink.download = resource.webUrl;
            //             downloadLink.target = "_blank";


            //             var subjectcell = createElement('td');
            //             subjectcell.appendChild(downloadLink);
            //             resourceRow.appendChild(subjectcell);

            //     }
            // }

            //Embed Youtube Video


            var n = recording.youtubeLink.lastIndexOf('/');
            var youtubeId = recording.youtubeLink.substring(n + 1);

            var iframeDiv = createElement('div', 'embed-responsive embed-responsive-16by9 mb-4');
            var iframe = createElement('iframe', 'embed-responsive-item');
            iframe.src = 'https://www.youtube.com/embed/' + youtubeId + '?rel=0';
            iframe.allowfullscreen = true;
            iframeDiv.appendChild(iframe);
            container.appendChild(iframeDiv);
        }


    }

    mainContainer.innerHTML = '';
    mainContainer.appendChild(container);

}

function showError(error) {
    var alert = createElement('div', 'alert alert-danger');

    var message = createElement('p', 'mb-3', error.message);
    alert.appendChild(message);

    if (error.debug) {
        var pre = createElement('pre', 'alert-pre border bg-light p-2');
        alert.appendChild(pre);

        var code = createElement('code', 'text-break text-wrap',
            JSON.stringify(error.debug, null, 2));
        pre.appendChild(code);
    }

    mainContainer.innerHTML = '';
    mainContainer.appendChild(alert);
}
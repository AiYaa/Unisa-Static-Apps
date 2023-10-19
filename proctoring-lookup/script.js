document.addEventListener("DOMContentLoaded", function() {
    var $input = document.getElementById("modulesearchbar"),
        $table = document.getElementById("modulelist"),
        $$tr   = $table.querySelectorAll("tbody tr"),
        $headerrow = $table.querySelector("thead tr");
        $noResults = $table.querySelector("tfoot tr");

    for (var i = 0; i < $$tr.length; i++) {
      var $$td    = $$tr[i].querySelectorAll("td"),
            modulecode    = $$td[1].innerText;
            //console.log($$td[2].innerText);
      $$tr[i].normalizedValue = normalizeStr( modulecode);
    }
    $input.addEventListener("input", performSearch);

    function performSearch() {
        if (this.value.length < 3) return;
      var filter = normalizeStr(this.value),
              resultCount = 0;
              console.log(this.value);
      for (var i = 0; i < $$tr.length; i++) {

        var isMatch = filter.length > 0 && $$tr[i].normalizedValue.includes(filter);
        console.log(isMatch);
        if (isMatch) { resultCount++; }

        $$tr[i].classList[isMatch ? "add" : "remove"]("visible");
      }

      var showNoResultsMessage = resultCount === 0 && filter.length > 0;
      $noResults.classList[showNoResultsMessage ? "add" : "remove"]("visible");
      $headerrow.classList[showNoResultsMessage ? "remove" : "add"]("visible");
    }

    function normalizeStr(str) {
      return (str || '').toUpperCase().trim();
    }
  });
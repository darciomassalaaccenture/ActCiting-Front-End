function formatDate(date) {
    if (date === undefined) {
      console.log("Date does not exist");
    } else if (date.length <= 23) {
      console.log("Date is too short")
    } else if (!date.includes("T", 10)) {
      console.log("Date does not contain a T");
    } else if (
      date.indexOf("-") !== 4 &&
      date.indexOf("-") !== 7
    ) { console.log("Date does not contain 2 dashes in positions 4 and 7");
    } else {
      var start_date = date.split("T");
      var start_date_first_element = start_date[0];
      var newDateFormat = start_date_first_element.split("-");
      newDateFormat.reverse();
      newDateFormat = newDateFormat.join("-");
      return newDateFormat
    }
  }

export default formatDate

// 10/11/2019 09:09 pm - SSN

export class ErrorHandlingHelpers {


  static showHtmlErrorResponse(response) {

    console.log('errorHandlingHelpers - 20191107-1237 ');
    console.log('errorHandlingHelpers - 20191107-1237 ');
    console.log('errorHandlingHelpers - 20191107-1237 ');
    console.log('errorHandlingHelpers - 20191107-1237 ');
    console.log('errorHandlingHelpers - 20191107-1237 ');
    console.log('------------------------------------- ');

    console.log(response);

    console.log('------------------------------------- ');

    console.log('errorHandlingHelpers - 20191107-1237 ');
    console.log('errorHandlingHelpers - 20191107-1237 ');
    console.log('errorHandlingHelpers - 20191107-1237 ');
    console.log('errorHandlingHelpers - 20191107-1237 ');
    console.log('errorHandlingHelpers - 20191107-1237 ');

    // 11/07/2019 12:39 pm - SSN - [20191107-1213] - [006] - Login -  Test run after working with newly added register option
    // Check if we have an error oobject

    if (response.error) {
      if (response.error[0] == "<") {
        console.log('ErrorHandlingHelpers - showHtmlErrorResponse - 20191011-2117 - Opening error window...');

        var tempWin = window.open();
        tempWin.document.write(response.error);
      }
    }

  }


}


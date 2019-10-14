
// 10/11/2019 09:09 pm - SSN

export class ErrorHandlingHelpers {


  static showHtmlErrorResponse(response) {

    if (response.error[0] == "<") {
      console.log('ErrorHandlingHelpers - showHtmlErrorResponse - 20191011-2117 - Opening error window...');

      var tempWin = window.open();
      tempWin.document.write(response.error);
    }
  }


}


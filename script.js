const start = () => {
  pageURL = location.href;

  if (pageURL.includes("meet.google.com")) {
    meet();
    console.log(`URL :- ${pageURL}`);
  }
};

const meet = () => {
  setTimeout(() => {
    try {
      // This code will turn on the mic
      document
        .getElementsByClassName(
          "VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ tWDL4c uaILN bPEdgb qIiG8c FTMc0c N2RpBe jY9Dbb"
        )[0]
        .click();

      // This code will turn on the camera
      document
        .getElementsByClassName(
          "VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ tWDL4c uaILN bPEdgb AAU0Jf FTMc0c N2RpBe jY9Dbb"
        )[0]
        .click();
    } catch (error) {
      console.log(error);
    }
  }, 60000);
};

start();

// check the validity of a images urls.
function checkUrl(string: string) {
    let givenURL;
    let regEx = /http(s)?:\/\/localhost\//i;
    if (regEx.test(string)) return false;
    try {
        givenURL = new URL(string);
    } catch (error) {
        console.log("error is", error);
        return false;
    }
    return givenURL ? true : false;
}

export default checkUrl;
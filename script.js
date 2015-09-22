/*1.validat cell phone number for NTC.*/
function check(){
     var phone = prompt("Enter phone number:");
    var pattern = /^(98)[456][0-9]{7}$/; //Number should start with 98 and ends with digit between 0-9.
    if (phone.match(pattern)) {
        alert("Correct")
    }
    else{
        alert("Incorrect")
    }
}

/*2. Function to check if value is domain or not.*/
function check_domain()
{
    var domainName = prompt("Enter the domain name:");//regular expression for check of domain that begins with www and ends with .com , .net or .org
    var domain = /^(w{3}[\.])([a-z0-9])+\.((com)|(org)|(net))$/i;

    if (domain.test(domainName))
    {
        alert("Domain.")
    }
    else
    {
        alert("Not Domain.")
    }
}
/*3. Function to check a given value contains alpha, dash and underscore.*/
function check_alphaDash()
{
    var input=prompt("Enter the value")
    regexp=/[a-zA-Z_\-]/;    /*Regex for value containing alpha,dash and underscore*/

    if (regexp.test(input))
    {
        alert("Correct Pattern");
    }
    else
    {
        alert("Incorrect Pattern");
    }
}
/*4. Function to check if a given string is a date.*/
function check_Date(){
    var inputDate=prompt('Enter the date(mm/dd/yyyy)');
    //input pattern must be mm/dd/yyyy
    var pattern = /^(1[0-2]|0[1-9])\/(3[01]|[12][0-9]|0[1-9])\/[0-9]{4}$/;
    var t = inputDate.match(pattern);

    if(t){
        alert("Correct Date String");
    }
    else{
        alert("Incorrect Date String");
    }
}

/*5. Function to check whether a given value is time string or not.*/
function check_time()
{
    var time = prompt("Enter time:");
    //time pattern regular expression
    var regexp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;

    if (regexp.test(time))
    {
        alert("Right time format")
    }
    else
    {
        alert("Wrong time format")
    }
}

/*6. Function to check value is Hex color value or not.*/
function check_hex(){

    var hex=prompt("Enter HexCode: ");
    var hexPattern  = /^#[0-9A-F]{6}$/i; //regex for hex code color match
    if(hexPattern.test(hex)){
        alert("Correct HEX code");
    }
    else{
        alert("Incorrect HEX code");
    }
}



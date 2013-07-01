// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

function placeholder() {
  var date = new Date(),
      campaign = document.getElementById("campaign");
    
  campaign.placeholder = (date.getFullYear() + "_" + (date.getMonth() + 1) + "_" + date.getDate());
  
};

function createURL(name) {
  var input = document.getElementById("input").value
      campaign = encodeURIComponent(document.getElementById("campaign").value);
  
  _gaq.push(['_trackEvent', 'Tags', 'Clicked', name]);
  
  if (input.indexOf("?") == -1) {
    input += "?";
  } else {
    input += "&";
  }
  
  if (campaign == "") {
    var date = new Date();
    campaign = (date.getFullYear() + "_" + (date.getMonth() + 1) + "_" + date.getDate());
  }
  
  switch (name) {
    case "Google AdWords":
      toOutput(input + "utm_source=google&utm_medium=cpc&utm_campaign=" + campaign);
      break;
    case "Google AdSense":
      toOutput(input + "utm_source=google&utm_medium=content&utm_campaign=" + campaign);
      break;
    case "Bing":
      toOutput(input + "utm_source=bing&utm_medium=cpc&utm_campaign=" + campaign);
      break;
    case "Yahoo!":
      toOutput(input + "utm_source=yahoo&utm_medium=cpc&utm_campaign=" + campaign);
      break;
    case "Twitter":
      toOutput(input + "utm_source=twitter&utm_medium=social&utm_campaign=" + campaign);
      break;
    case "Facebook":
      toOutput(input + "utm_source=facebook&utm_medium=social&utm_campaign=" + campaign);
      break;
    case "Facebook Ads":
      toOutput(input + "utm_source=facebook&utm_medium=cpc&utm_campaign=" + campaign);
      break;
    case "Google+":
      toOutput(input + "utm_source=google&utm_medium=social&utm_campaign=" + campaign);
      break;
    case "Quora":
      toOutput(input + "utm_source=quora&utm_medium=social&utm_campaign=" + campaign);
      break;
    case "Pinterest":
      toOutput(input + "utm_source=pinterest&utm_medium=social&utm_campaign=" + campaign);
      break;      
    case "LinkedIn":
      toOutput(input + "utm_source=linkedin&utm_medium=social&utm_campaign=" + campaign);
      break;      
    case "Newsletter":
      toOutput(input + "utm_source=newsletter&utm_medium=email&utm_campaign=" + campaign);
      break;   
    case "E-mail":
      toOutput(input + "utm_source=email&utm_medium=email&utm_campaign=" + campaign);
      break;
    case "QR":
      toOutput(input + "utm_source=qrcode&utm_medium=offline&utm_campaign=" + campaign);
      break;
    case "Etarget":
      toOutput(input + "utm_source=etarget&utm_medium=content&utm_campaign=" + campaign);
      break;
    case "Sklik":
      toOutput(input + "utm_source=sklik&utm_medium=cpc&utm_campaign=" + campaign);
      break;
    default:
      toOutput(input);
  }
};

function toOutput(text) {
  var input = document.getElementById("input").value,
      output = document.getElementById("output");
  
  if (input.match(/^https?\:\/\//)) {
    output.value = text;
    selectValue("output");
  } else if (input.match(/\w+\.[a-z]{2,3}(\.[a-z]{2})?/)) {
      output.value = "http://" + text;
      selectValue("output");
  } else {
      output.value = "The correct URL format is: http://www.example.com";
      alert("The correct URL format is: http://www.example.com");
  }
};

function selectValue(id) {
  document.getElementById(id).focus();
  document.getElementById(id).select();
};

function resetAll() {
  var input = document.getElementById("input"),
      output = document.getElementById("output");
  
  input.value = "";
  output.value = "";

};
$(document).ready(function() {
var connect = document.querySelector('.getConnected');
var connectUL = document.querySelector('.getConnected>ul');
var serve = document.querySelector('.serve');
var serveUL = document.querySelector('.serve>ul');
var media = document.querySelector('.ourMedia');
var mediaUL = document.querySelector('.ourMedia>ul');
var about = document.querySelector('.about');
var aboutUL = document.querySelector('.about>ul');
var give = document.querySelector('.give');
var giveUL = document.querySelector('.give>ul');

console.log(window.innerWidth);
console.log(document.body.clientWidth);

if (window.innerWidth <= 400) {
    $(connect).on('click', function() { $(connectUL).slideToggle(500); });
    $(serve).on('click', function() { $(serveUL).slideToggle(500); });
    $(media).on('click', function() { $(mediaUL).slideToggle(500); });
    $(about).on('click', function() { $(aboutUL).slideToggle(500); });
    $(give).on('click', function() { $(giveUL).slideToggle(500); });
}
});

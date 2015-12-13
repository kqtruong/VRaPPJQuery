// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        document.getElementById("capturePic").onclick = function () {
            navigator.camera.getPicture(addPictureToDiv, null, null);
        };

        var button = document.getElementById("cameraBtn");
        button.addEventListener("click",funtion() {
            navigator.camera.getPicture(onSuccess,onFail);
    })
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function addPictureToDiv(imageUri) {
        var currentPhotoDiv = document.getElementById("currentPic");
        currentPhotoDiv.innerHTML = "<img src='" + imageUri + "'/>";
    }

    function showPopup() {
        var input = document.getElementById("textInput").value;
        alert(input);
    }

    function onSuccess(imageFile) {
        var imgTag = document.getElementById("picture");
        imgTag.src = imageFile;
    }
    
    function onFail(message) {
        alert(message);
    }

} )();
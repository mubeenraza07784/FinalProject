$(document).ready(function () {
  // ===================================== Section 1: Fade In Loader ====================================
  // Fade in the loader element slowly when the page is ready.
  $(".loader").fadeIn("slow");

  // ===================================== Section 2: Fade Out Loader and Show Container ====================
  setTimeout(function () {
    // After 3 seconds (3000ms), fade out the loader element slowly.
    $(".loader").fadeOut("slow", function () {

      // After the loader fades out, fade in the main content container slowly.
      $(".container").fadeIn("slow", function () {
      });
    });
  }, 3000);  // This timeout ensures the loader stays visible for 3 seconds before it fades out and shows the content.
});

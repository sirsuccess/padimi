$("#fileup").change(function() {
  //here we take the file extension and set an array of valid extensions
  var res = $("#fileup").val();
  var arr = res.split("\\");
  var filename = arr.slice(-1)[0];
  filextension = filename.split(".");
  filext = "." + filextension.slice(-1)[0];
  valid = [".jpg", ".png", ".jpeg", ".bmp"];
  //if file is not valid we show the error icon, the red alert, and hide the submit button
  if (valid.indexOf(filext.toLowerCase()) == -1) {
    $(".imgupload").hide("slow");
    $(".imgupload.ok").hide("slow");
    $(".imgupload.stop").show("slow");

    $("#namefile").css({ color: "red", "font-weight": 700 });
    $("#namefile").html("File " + filename + " is not  pic!");

    $("#submitbtn").hide();
    $("#fakebtn").show();
  } else {
    //if file is valid we show the green alert and show the valid submit
    $(".imgupload").hide("slow");
    $(".imgupload.stop").hide("slow");
    $(".imgupload.ok").show("slow");

    $("#namefile").css({ color: "green", "font-weight": 700 });
    $("#namefile").html(filename);

    $("#submitbtn").show();
    $("#fakebtn").hide();
  }
});


///////////////////////////////////////////// bvm

$(".f1").on("change", function() {
  // Name of file and placeholder
   
    var file = this.files[0].name;
     
    var dflt = $(this).attr("placeholder");
    
  if ($(this).val() != "") {
    $(this)
      .next()
      .text(file);
  } else {
    $(this)
      .next()
      .text(dflt);
  }
});

$(".ff").on("change", function() {
  // Name of file and placeholder
    var file = this.files[0].name;
  var dflt = $(this).attr("placeholder");
  if ($(this).val() != "") {
    $(this)
      .next()
      .text(file);
  } else {
    $(this)
      .next()
      .text(dflt);
  }
});

const imageCard = document.querySelector(".imageCard");
const accountCard = document.querySelector(".accountCard");
const info_details = document.querySelector(".info_details");
const info_details_account = document.querySelector(".info_details_account");


accountCard.addEventListener("click", () => {
    accountCard.classList.add("active");
    imageCard.classList.remove("active");
    info_details.classList.add("hideme");
    info_details_account.classList.remove("hideme");
})

imageCard.addEventListener("click", () => {
  accountCard.classList.remove("active");
    imageCard.classList.add("active");
    
    info_details_account.classList.add("hideme");
    info_details.classList.remove("hideme");
    
});

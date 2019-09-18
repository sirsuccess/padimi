// const constituencyUlDOM = document.querySelector(".constitution-container");
const profileDOM = document.querySelector("#profileSetting");
const accountDOM = document.querySelector("#account");
const settingsDetailsDOM = document.querySelector(".settings-details");

const settingInfo = [
  `<div class="card card-fluid">
  <h6 class="card-header"> Public Profile </h6><!-- .card-body -->
  <div class="card-body">
    <!-- .media -->
    <div class="media mb-3">
      <!-- avatar -->
      <div class="user-avatar user-avatar-xl fileinput-button">
        <div class="fileinput-button-label change-photo-img"> Change photo </div>
        <img src="./img/33.jpg" alt=""> <input id="fileupload-avatar" type="file" name="avatar">
      </div><!-- /avatar -->
      <!-- .media-body -->
      <div class="media-body pl-3 ml-5">
        <h3 class="card-title"> Public avatar </h3>
        <h6 class="card-subtitle text-muted"> Click the current avatar to change your photo. </h6>
        <p class="card-text">
          <small>JPG, GIF or PNG 400x400, &lt; 2 MB.</small>
        </p><!-- The avatar upload progress bar -->
        <div id="progress-avatar" class="progress progress-xs fade">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        </div><!-- /avatar upload progress bar -->
      </div><!-- /.media-body -->
    </div><!-- /.media -->
    <!-- form -->
    <form method="post">
      <!-- form row -->
      <div class="form-row">
        <!-- form column -->
        <label for="input01" class="col-md-3">Cover image</label> <!-- /form column -->
        <!-- form column -->
        <div class="col-md-9 mb-3">
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="input01" multiple=""> <label class="custom-file-label" for="input01">Choose cover</label>
          </div><small class="text-muted">Upload a new cover image, JPG 1200x300</small>
        </div><!-- /form column -->
      </div><!-- /form row -->
      <!-- form row -->
      <!-- <div class="form-row"> -->
        <!-- form column -->
        <!-- <label for="input02" class="col-md-3">Company</label>  -->
        <!-- /form column -->
        <!-- form column -->
        <!-- <div class="col-md-9 mb-3"> -->
          <!-- <input type="text" class="form-control" id="input02" value="CreativeDivision"> -->
        <!-- </div> -->
        <!-- /form column -->
      <!-- </div> -->
      <!-- /form row -->
      <!-- form row -->
      <div class="form-row">
        <!-- form column -->
        <label for="input03" class="col-md-3">Profile Heading</label> <!-- /form column -->
        <!-- form column -->
        <div class="col-md-9 mb-3">
          <textarea class="form-control" id="input03">Huge fan of PDP.</textarea> <small class="text-muted">Appears on your profile page, 300 chars max.</small>
        </div><!-- /form column -->
      </div><!-- /form row -->
      <!-- form row -->
      <div class="form-row">
        <!-- form column -->
        <label for="input04" class="col-md-3">Want to be shadow?</label> <!-- /form column -->
        <!-- form column -->
        <div class="col-md-9 mb-3">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="input04" checked=""> <label class="custom-control-label" for="input04">Yes, choose me</label>
          </div>
        </div><!-- /form column -->
      </div><!-- /form row -->
      <hr>
      <!-- .form-actions -->
      <div class="form-actions">
        <button type="submit" class="btn btn-primary ml-auto">Update Profile</button>
      </div><!-- /.form-actions -->
    </form><!-- /form -->
  </div><!-- /.card-body -->
</div>`,
  `<!-- .card -->
  <div class="card card-fluid">
<h6 class="card-header"> Account </h6>
<!-- .card-body -->
<div class="card-body">
<!-- form -->
<form method="post">
<!-- form row -->
<div class="form-row">
<!-- form column -->
<div class="col-md-6 mb-3">
<label for="input01">First Name</label>
<input type="text" class="form-control" id="input01" value="Beni" required=""> </div>
<!-- /form column -->
<!-- form column -->
<div class="col-md-6 mb-3">
<label for="input02">Last Name</label>
<input type="text" class="form-control" id="input02" value="Arisandi" required=""> </div>
<!-- /form column -->
</div>
<!-- /form row -->
<!-- .form-group -->
<div class="form-group">
<label for="input03">Email</label>
<input type="email" class="form-control" id="input03" value="bent10@looper.com" required=""> </div>
<!-- /.form-group -->
<!-- .form-group -->
<div class="form-group">
<label for="input04">New Password</label>
<input type="password" class="form-control" id="input04" value="secret" required=""> </div>
<!-- /.form-group -->
<!-- .form-group -->
<div class="form-group">
<label for="input05">Username</label>
<input type="text" class="form-control" id="input05" value="bent10" required="">
<small class="text-muted">Dolores reiciendis, eos accusamus nobis at omnis consequuntur culpa tempore saepe animi.</small>
</div>
<!-- /.form-group -->
<hr>
<!-- .form-actions -->
<div class="form-actions">
<!-- enable submit btn when user type their current password -->
<input type="password" class="form-control ml-auto mr-3" id="input06" placeholder="Enter Current Password" required="">
<button type="submit" class="btn btn-primary mt-2" disabled="">Update Account</button>
</div>
<!-- /.form-actions -->
</form>
<!-- /form -->
</div>
<!-- /.card-body -->
   </div>
   <!-- /.card -->`
];

[profileDOM, accountDOM].forEach((item, i) => {
  item.addEventListener("click", () => {
    settingsDetailsDOM.innerHTML = "";
    profileDOM.classList.toggle("active");
    accountDOM.classList.toggle("active");
    settingsDetailsDOM.innerHTML = settingInfo[i];
  });
});

// target html objects
let assideBox = document.getElementById("asideBox");
let mainBox = document.getElementById("mainBox");
let nicon = document.getElementById("navicon");

// set a toggle flag
// let flag = 0;

//  perform show toggle
function showMenu() {
  assideBox.style.width = "0px";
  mainBox.style.marginLeft = "0px";
  flag = 1;
}
//  perform hide toggle
function hideMenu() {
  assideBox.style.width = "200px";
  mainBox.style.marginLeft = "200px";
  flag = 0;
}

nicon.addEventListener("click", () => {
  assideBox.classList.toggle("openS");
  mainBox.classList.toggle("openM");
});

// perform toggle event when the screen goes beyond or less than 800
window.onresize = function() {
  if (window.innerWidth < 800) {
    showMenu();
  } else {
    hideMenu();
  }
};

/********************************************************/
let tbls = document.getElementsByClassName("display");
let navs = document.getElementsByClassName("nav-list");
let tblIndex = 0;
let navIndex = 0;
/********************************************************/

// hide all display table
function hideAllTables() {
  for (i = 0; i < tbls.length; i++) {
    tbls[i].style.display = "none";
  }
}
// deactivate any active menu-bar
function removeActiveMenu() {
  for (i = 0; i < navs.length; i++) {
    navs[i].classList.remove("active");
  }
}
// display the first table as default
function displayTbl(x) {
  hideAllTables();
  tbls[x].style.display = "block";
}
function setActiveNav(x) {
  removeActiveMenu();
  navs[x].classList.add("active");
}

// set default view
displayTbl(tblIndex);
setActiveNav(navIndex);

let contentLen = 0;
contentLen = navs.length < tbls.length ? navs.length : tbls.length;

for (j = 0; j <= contentLen; j++) {
  navs[j].addEventListener("click", seCurrentNav);
}
function seCurrentNav() {
  for (k = 0; k <= contentLen; k++) {
    if (navs[k].isEqualNode(this)) {
      displayTbl(k);
      setActiveNav(k);
    }
  }
}

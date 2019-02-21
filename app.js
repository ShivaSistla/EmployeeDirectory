

// $('#view').on('click', function (){
//   
//     for ( i=0; i<employeeList.length;i++) {
//         $('.input-group-append').append(`<p>${employeeList[i].name}</p>`);
//         $('.input-group-append').append(`<p>${employeeList[i].officeNum}</p>`);
//         $('.input-group-append').append(`<p>${employeeList[i].phoneNum}</p>`);
//       }
// });


const hideAll = function () {
  $('.pane').hide();
}

const search = function (fieldName, searchValue, action) {
  for (let i = 0; i < employeeList.length; i++) {
      if (employeeList[i][fieldName] === searchValue) {
          switch (action) {
              case 'verify':
              console.log('verify');
                  return employeeList[i][fieldName];
              case 'delete':
                  employeeList.splice(i, 1);
                  console.log('delete');
                  break;
          }

      }
  }
}

const showView = function () {
  hideAll();
  $('#viewPane').show();

  // Here is where I render the Employee view pane
  $('#viewPane').empty();
  for (let i = 0; i < employeeList.length; i++) {
      $('#viewPane').append(`<div class="record border border-dark m-3" id="record-${i}"></div>`);
      $(`#record-${i}`).append(`<p>Name: ${employeeList[i].name}</p>`);
      $(`#record-${i}`).append(`<p>Office Number: ${employeeList[i].officeNum}</p>`);
      $(`#record-${i}`).append(`<p>Phone Number: ${employeeList[i].phoneNum}</p>`);
  }
}

const showAdd = function () {
  hideAll();
  $('#addPane').show();
  console.log('add function');
}
const showDelete = function () {
  hideAll();
  $('#deletePane').show();
}
const showVerify = function () {
  hideAll();
  $('#verifyPane').show();
}
const showUpdate = function () {
  hideAll();
  $('#updatePane').show();
}

// CallBacks
showView();

$('#view').on('click', function (){
  showView();
  $('a').removeClass('active');
  $('#view').addClass('active');
});
$('#add').on('click', function(){
  showAdd();
  $('a').removeClass('active');
  $('#add').addClass('active');
});
$('#verify').on('click', function (){
  showVerify();
  $('a').removeClass('active');
  $('#verify').addClass('active');
});
$('#update').on('click', function (){
  showUpdate();
  $('a').removeClass('active');
  $('#update').addClass('active');
});
$('#delete').on('click', function(){
  showDelete();
  $('a').removeClass('active');
  $('#delete').addClass('active');
});



  const submitEmp =function() {
    const tempList = {
        name: '',
        officeNum: 0,
        phoneNum: ''
      };
    tempList.name = $('#addEmpName').val();
    tempList.officeNum = $('#addEmpOfficeNum').val()
    tempList.phoneNum = $('#addEmpPhoneNum').val()
    if(tempList.name!=''){
    employeeList.push(tempList);
    }
    
  // submitEmp();
    // After performing our actions, clear the name input and re-render the list
    $('#addEmpName').val('');
    $('#addEmpOfficeNum').val('');
    $('#addEmpPhoneNum').val('');


  showView();
};

const updateEmp = function() {
  const nameVal = $('#updateEmpName').val();
  const officeNumVal = $('#updateEmpOfficeNum').val();
  const phoneNumVal = $('#updateEmpPhoneNum').val();
  // We use the indexOf method to find the index of the input name
  // Then we use splice to remove 1 element, starting with that index
  const nameIndex = employeeList.map(function(e) { return e.name; }).indexOf(nameVal);
  employeeList[nameIndex].name = nameVal;
  employeeList[nameIndex].officeNum = officeNumVal;
  employeeList[nameIndex].phoneNum = phoneNumVal;


  // After performing our actions, clear the name input and re-render the list
  $('#updateEmpName').val('');
  $('#updateEmpOfficeNum').val('');
  $('#updateEmpPhoneNum').val('');
  showView();
};

const verifyEmp = function() {
  const nameVal = $('#verifyEmpName').val();

  const nameIndex = employeeList.map(function(e) { return e.name; }).indexOf(nameVal);
  $('.verifyAnswer').empty();
  if(nameIndex!==-1) {
      $('#verifyAnswer').text('YES');}
  else {
  $('#verifyAnswer').text('NO');};
};

const deleteEmp = function() {
  const nameVal = $('#deleteEmpName').val();
  if(nameVal !=''){
  employeeList.splice(employeeList.map(function(e) { return e.name; }).indexOf(nameVal), 1);
  }
  $('#deleteEmpName').val('');
  showView();
}

showView();

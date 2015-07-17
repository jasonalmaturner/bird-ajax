$(document).ready(function(){
  $('#theButton').click(function(){
    $.ajax({
      method: 'GET',
      url: 'http://ebird.org/ws1.1/data/obs/geo/recent?lng=-111.6608&lat=40.2444&dist=20&back=20&maxResults=500&locale=en_US&fmt=json',
      success: function(res){
        console.log(res);
        addDataToDom(res);
      },
      error: function(err){
        console.log(err);
      }
    })
  })

  $('#theOtherButton').click(function(e){
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: 'http://reqr.es/api/users',
      data: {
        name: "red breasted merganser",
        job: "eat bird seed"
      },
      success: function(res){
        console.log(res);
      },
      error: function(err){
        console.log(err);
      }
    })
  })


  function addDataToDom(arr){
    for(var i = 0; i < arr.length; i++){
      $('.theData').append(
        '<h1>' + arr[i].comName + '</h1>' +
        '<span>' + arr[i].sciName + '</span>'
      );
    };
  }
})

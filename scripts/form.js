// A $( document ).ready() block.
$( document ).ready(function() {
  //console.log( "ready!" );
  //alert('test');
  
  $(document).on('change', '#t-shirt', chkTshirt);
  
  //begin chkTshirt function
  function chkTshirt() {
    
    var tshirt = $('#t-shirt').val();
    //alert(tshirt);
    
    // tshirt if statement
    if (tshirt == 'CUSTOM') {
      //alert('works');
      $('#custom').removeAttr('disabled'); //remove disable
      $("#custom").attr('required', true); //required again
    }//end tshirt if statement
    else {
      $("#custom").attr('disabled', true); //disabled again
      $("#custom").val(''); //set value to empty
      $('#custom').removeAttr('required'); //remove required
    }
  }//end of function 
  
});
async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const calories = document.querySelector('input[name="post-calories"]').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        calories
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);















//$(document).find('.tbl_user_data').html(tbl);
//
//$(document).find('.btn_save').hide();
//$(document).find('.btn_cancel').hide();
//
////--->make div editable > start
//$(document).on('click', '.row_data', function(event) 
//{
//	event.preventDefault(); 
//
//	if($(this).attr('edit_type') == 'button')
//	{
//		return false; 
//	}
//
//	//make div editable
//	$(this).closest('div').attr('contenteditable', 'true');
//	//add bg css
//	$(this).addClass('bg-warning').css('padding','5px');
//
//	$(this).focus();
//})	
////--->make div editable > end
//
////--->save single field data > start
//$(document).on('focusout', '.row_data', function(event) 
//{
//	event.preventDefault();
//
//	if($(this).attr('edit_type') == 'button')
//	{
//		return false; 
//	}
//
//	var row_id = $(this).closest('div').attr('row_id'); 
//	
//	var row_div = $(this)
//  .removeAttr('contenteditable') //make div editable
//	.removeClass('bg-warning') //add bg css
//	.css('padding','')
//
//	var col_name = row_div.attr('col_name'); 
//	var col_val = row_div.html(); 
//
//	var arr = {};
//	arr[col_name] = col_val;
//
//	//use the "arr"	object for your ajax call
//	$.exbutton > edit > start	
//$(document).on('click', '.btn_edit', function(event) 
//{
//	event.preventDefault();
//	var tbl_row = $(this).closest('div');
//
//	var row_id = tbl_row.attr('row_id');
//
//	tbl_row.find('.btn_save').show();
//	tbl_row.find('.btn_cancel').show();
//
//	//hide edit button
//	tbl_row.find('.btn_edit').hide(); 
//
//	//make the whole row editable
//	tbl_row.find('.row_data')
//	.attr('contenteditable', 'true')
//	.attr('edit_type', 'button')
//	.addClass('bg-warning')
//	.css('padding','3px')
//
//	//--->add the original entry > start
//	tbl_row.find('.row_data').each(function(index, val) 
//	{  
//		//this will help in case user decided to click on cancel button
//		$(this).attr('original_entry', $(this).html());
//	}); 		
//	//--->add the original entry > end
//
//});
////--->button > edit > endtend(arr, {row_id:row_id});
//
//	//out put to show
//	$('.post_msg').html( '<pre class="bg-success">'+JSON.stringify(arr, null, 2) +'</pre>');
//	
//})	
////--->save single field data > end
//
////--->
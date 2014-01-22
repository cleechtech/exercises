$(function(){
	var inventory = $(raw_inventory);
	var proto_item = $('#prototype_item');
	var proto_cart = $('#prototype_cart');
	proto_item.detach();
	proto_cart.detach();
	
	inventory.each(function(){
		var item = proto_item.clone(); // create 'deep clone'
		
		item.find('h3').text(this.name);
		item.find('li .price').text(this.price);
		item.find('li .qty').text(this.stock);
		
		item.attr('id', this.product_id);
		
		item.on('click', function(){
			var product_id = $(this).attr('id');
			
			// TODO: add to cart
			// http://tutorials.jumpstartlab.com/projects/javascript/jquery/jscart.html
		});
		
		$('#inventory').append(item);
	});
	
	
	
	
});

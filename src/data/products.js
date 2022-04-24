var Products = {
    cartData: {},
    
    init: function() {
        Products.loadProducts();
        $('.minicart').click(function(e) {
            e.stopPropagation();
        });
    },
    
    loadProducts: function() {
        let product;
        
        // 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
        $.get('data.json', function(data) {
            $.each(data, function(key, row) {                
                product = $('.product-container.d-none').clone();
                product.data('price', row.price);
                product.data('id', row.id);
                product.find('img').attr('src', row.image_link);
                product.find('h6').html(row.name);
                product.find('p').html('$ ' + row.price);
                product.find('button').click(Products.addToCart);
                product.toggleClass('d-none').appendTo('.products-container');
            });
        });
    }
};

$(Products.init);
document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.md-nav--primary .md-nav__list a');
    
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Prevent the default behavior of the anchor element
            event.preventDefault();
            
            // Remove active class from all menu items
            menuItems.forEach(function(item) {
                item.classList.remove('active');
            });
            console.log("working")
            // Add active class to the clicked menu item
            this.classList.add('active');
        });
    });
});

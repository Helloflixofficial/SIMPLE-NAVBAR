 $(document).ready(function(){

$nav = $('.nav');
$toggleCollapse = $('.toggle-collapse');



/** when i click on menu button */
$toggleCollapse.click(function(){
    $nav.toggleClass('collapse');
})
});
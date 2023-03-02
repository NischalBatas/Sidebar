$(document).ready(function(){
    console.log('Hello, World')
    $('#btn-bars').click(()=>{
        $('.navbar-main-sidenavbar-group1-heading').toggleClass('content-del')
        $('.navbar-main-sidenavbar-group1-search').toggleClass('content-del')
        $('.btn-lists').toggleClass('content-del')
        $('.navbar-main-group2-side1').toggleClass('content-del')
    })

   
})
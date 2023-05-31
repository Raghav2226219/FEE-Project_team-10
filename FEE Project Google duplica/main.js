const searchInput = document.querySelector("#search_input");

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter") {
       search();
    }
   }); 

function search(){
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&sxsrf=APwXEdejsvGsDIDehanQjbTU3HXSBe9mbw%3A1682850127861&source=hp&ei=T0FOZObXMcim2roP1cWX0AE&iflsig=AOEireoAAAAAZE5PX8BTGW1wPqA4BP-nuxQJvxpsG0pt&ved=0ahUKEwimu9CgsdH-AhVIk1YBHdXiBRoQ4dUDCAk&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyCAguEIAEELEDMggIABCABBCxAzILCC4QgAQQsQMQ1AIyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyCAgAEIAEELEDMggIABCABBCxAzILCC4QgAQQsQMQgwEyCwguEIAEEMcBEK8BOgQIIxAnOgcIIxCKBRAnOggIABCKBRCRAjoLCAAQgAQQsQMQgwE6EQguEIMBEMcBELEDENEDEIAEOgsIABCKBRCxAxCDAToICC4QigUQsQM6CwguEIoFEOUEEJECUABYpQ1g5xVoAHAAeACAAcMBiAHaBpIBAzAuNZgBAKABAQ&sclient=gws-wiz"
}
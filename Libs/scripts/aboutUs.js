/* 
This JavaScript file is a custome file which is linked through the footer
to all the pages. 
this file starts with IIFE => Immediatly Invocked Function Expression and the rest 
of the functions are inside the IIFE
*/

let content;
(function (content) {
    let title=document.title;

    //  this function is created to animate the pictures in the index page
    function pictureSlides() {
        // an array to store the pictures
        let imageSource = [
            "./Media/indexPics/aboutPic1.jpg",
            "./Media/indexPics/aboutPic2.jpg",
            "./Media/indexPics/aboutPic3.jpg",
            "./Media/indexPics/aboutPic4.jpg"
        ];
        let index = 0;
        function changePic() {
            let picSrc = document.getElementById("pic").src = imageSource[index];
            console.log(`${picSrc}`);
            if (index < (imageSource.length - 1)) {
                index++;
            }
            else {
                index = 0;
            }
        }

        setInterval(changePic,2000)
    }
    content.pictureSlides=pictureSlides;
   
})(content || (content = {}))
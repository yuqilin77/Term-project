//  Create a new Vue instance
const app = new Vue({
    // Bind the Vue instance to the HTML element with the ID 'app'
    el:'#app',
    // The initial data for the Vue instance
    data:{
    adultImage: 'images/IMG_8304.JPG',
    childImage: 'images/IMG_3801.JPG',
    answer: ''
},
// Define the method for Vue instance
methods:{
    // Method to change the current image to the child image
    switchImage(){
        this.adultImage = this.childImage;
    },
    // Method to restore the image to the inital iamge
    restoreImage(){
        this.adultImage = 'images/IMG_8304.JPG';
    },
    //Method to check the input from user and update the answer accordingly
    checkReply() {
        const userInput = document.getElementById('userInput').value;
        if (userInput === '2') {
          this.answer = 'Correct!';
        } else {
          this.answer = 'Try again!';
        }
     }
    }
});

//  Create a new Vue instance
const app = new Vue({
    // Bind the Vue instance to the HTML element with the ID 'app1'
    el:'#app1',
    // The initial data for the Vue instance
    data:{
    SF2: 'images/SF2.jpg',
    SF1: 'images/SF1.jpg',
    Chicago1: 'images/Chicago1.jpg',
    Chicago2: 'images/Chicago2.jpg',
    Yosemite2: 'images/Yosemite2.JPG',
    Yosemite1: 'images/Yosemite1.JPG',
    Hawaii1: 'images/Hawaii1.jpg',
    Hawaii2: 'images/Hawaii2.jpg',
},
// Define the method for Vue instance
    methods:{
        // Method to change the current image to the another image
        switchImage_SF(){
            this.SF2 = this.SF1;
        },
        // Method to restore the image to the original iamge
        restoreImage_SF(){
            this.SF2 = 'images/SF2.JPG';
        },
        // Method to change the current image to the another image   
        switchImage_Chicago(){
            this.Chicago1 = this.Chicago2;
        },
        // Method to restore the image to the original iamge
        restoreImage_Chicago(){
            this.Chicago1 = 'images/Chicago1.jpg';
        },
            // Method to change the current image to the another image
        switchImage_Yosemite(){
            this.Yosemite2 = this.Yosemite1;
        },
        // Method to restore the image to the original iamge
        restoreImage_Yosemite(){
            this.Yosemite2 = 'images/Yosemite2.JPG';
        },
            // Method to change the current image to the another image
        switchImage_Hawaii(){
            this.Hawaii1 = this.Hawaii2;
        },
        // Method to restore the image to the original iamge
        restoreImage_Hawaii(){
            this.Hawaii1 = 'images/Hawaii1.JPG';
        },
    }
});

var content = new Vue({
    el: '#content',
    data: {
        loggedin: false,
        currUser: "",
        currPage: "content",
        hideLogin: true,
        hideSettings: true,
        loginmode: 'login',
        currentType:"type1", // user's choice should be here
        username:"",
        password:"",
        buttons:[
            "type1",
            "type2"
        ],
        tempLorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Eu ultrices vitae auctor eu augue ut lectus arcu. Nulla facilisi nullam vehicula ipsum a arcu cursus. Donec ac odio tempor orci. Vulputate ut pharetra sit amet. Purus sit amet luctus venenatis lectus. Arcu dictum varius duis at consectetur lorem donec. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Maecenas pharetra convallis posuere morbi leo. Velit dignissim sodales ut eu. Nam libero justo laoreet sit amet cursus sit amet.",
        content:[
            {
                title: "test1",
                type:"type1",
                count: 1
                },
            {
                title: "test2",
                type:"type1",
                count: 2
                },
            {
                title: "test3",
                type:"type1",
                count: 3
                },
            {
                title: "test4",
                type:"type1",
                count: 4
                },
            {
                title: "test5",
                type:"type1",
                count: 5,
                },
            {
                title: "test6",
                type:"type2",
                count: 1,
            },
            {
                title: "test7",
                type:"type2",
                count: 2,
                },
            {
                title: "test8",
                type:"type2",
                count: 3,
                },
            {
                title: "test9",
                type:"type2",
                count: 4,
                },
            {  
                title: "test10",
                type:"type2",
                count: 5,
                }
        ],
        onDisplay: [],
        settings:{
            name:"",
            notifType:"",
            qty:"",
            email:"",
            phoneNo:""
        }
    },

    methods:{
        updateType(newType){
            this.currentType=newType;
            //console.log(newType);
            this.onDisplay = this.content.filter(c => c.type == this.currentType)
            // sorts by count desc
            this.onDisplay.sort((a, b)=>b.count - a.count);
        },
        updateLoginDisplay(){
            this.hideSettings = true;
            this.hideLogin = !this.hideLogin;
        },
        wipLogin(){
            this.loggedin = true;
            this.currUser = this.username;
            this.hideLogin = true;
        },
        toggleSettings(){
            this.hideLogin = true;
            this.hideSettings = !this.hideSettings;
        }
        

    },
    beforeMount(){
        this.updateType("type1")
    }
  })

// Vue.component('card', {
//     props: ["news"],
//     data: function () {
//         return {
//         count: 0
//         }
//     },
//     template: `
//     <div class="card">
//         <h4>{{news.title}}<h4>

//     </div>`
// })

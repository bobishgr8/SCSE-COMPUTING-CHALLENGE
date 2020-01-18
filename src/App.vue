<template>
  <div id="app">
    <div id="content">
      <div id="header">
        <h2 style="justify-self:start;flex-grow:1;text-align:center; padding-right: 10px;">Condense</h2>
        <div id="restOfHeader" style="flex-grow:9;display:flex;align-items:center">
          <h3 style="padding-right:10px" v-on:click="currPage='content'">home</h3>
          <h3 style="padding-right:10px" v-on:click="currPage='about'">about</h3>
          <h3 style="padding-right:10px" v-on:click="currPage='guide'">
            user
            <br />guide
          </h3>
          <h3 style="padding-right:10px" v-on:click="updateLoginDisplay" v-if="!loggedin">login</h3>
          <h3 style="padding-right:10px" v-else>{{currUser}}</h3>
          <h3 style="padding-right:10px" v-on:click="loggedin = false;" v-if="loggedin">logout</h3>
          <img
            src="https://img.icons8.com/plasticine/50/000000/settings.png"
            v-on:click="toggleSettings"
            v-if="loggedin"
          />
        </div>
      </div>
      <div id="login-signup" v-if="!hideLogin">
        <p
          style="display: block; position: absolute; right: 15px; top:-12px; cursor: pointer;"
          v-on:click="hideLogin=true"
        >x</p>
        <!-- <template v-if="loginmode=='login'"> -->
        <label>username:</label>
        <input type="text" v-model="username" />
        <br />
        <label>password:</label>
        <input type="text" v-model="password" />
        <div style="display:flex; justify-content: center; width: 100%;">
          <button style="display:block;" v-on:click="wipLogin">log in</button>
          <button style=" display:block;" >sign up</button> <!-- doesnt actually work yet -->
        </div>

        <!-- <p> Don't have an account? Sign up <span class="link1" v-on:click="loginmode='signup'">here</span>! </p> -->
        <!-- </template> -->
        <!-- <template v-else>
                *sign up stuff here*
                <span class="link1" v-on:click="loginmode='login'"> back to login </span>
        </template>-->
      </div>
      <div id="settings" v-if="!hideSettings">
        <p
          style="display: block; position: absolute; right: 15px; top:-12px; cursor: pointer;"
          v-on:click="hideSettings=true;"
        >x</p>
        <label>Name:</label>
        <input type="text" v-model="settings.name" />
        <label>Notification type:</label>
        <select v-model="settings.notifType">
          <option value="SMS">SMS</option>
          <option value="Email">Email</option>
          <option value="Whatsapp">Whatsapp</option>
        </select>
        <label>How many articles?</label>
        <input type="number" min="1" max="5" step="1" v-model="settings.qty" />
        <br />
        <template v-if="['SMS', 'Whatsapp'].includes(settings.notifType)">
          <label>phone no:</label>
          <input type="text" v-model="settings.phoneNo" />
        </template>
        <template v-if="settings.notifType == 'Email'">
          <label>email:</label>
          <input type="text" v-model="settings.email" />
        </template>
      </div>
      <div v-if="currPage == 'content'">
        <div id="allthebuttons">
          <button
            class="news-types"
            v-for="button in buttons"
            v-bind:key="button"
            v-on:click="updateType(button)"
            v-bind:class="{activeType: currentType == button}"
          >{{button}}</button>
        </div>
        <div id="allthecards">
          <div class="card" v-for="c in onDisplay" v-bind:key="c.title">
            <h2
              style="text-decoration:underline; font-family: 'Gayathri', sans-serif; margin: 0;"
            >{{c.title}}</h2>
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              style="width: 80%; height: auto; margin-left: auto; margin-right: auto; padding: 0; display:block;"
            />
            <p style="text-align: justify;">{{tempLorem.substring(0,200)+"..."}}</p>
            <a href="notdone.com" style="text-decoration: none; align-self: flex-end;">
              <div
                style="border: 1px solid grey; background-color:  black; color: white; padding: 5px; width: 90px;  cursor: pointer;"
              >Read more</div>
            </a>
          </div>
        </div>
      </div>
      <div id="about" v-if="currPage == 'about'">
        <div style="border: 1px solid black; background-color: white; padding:5px;">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut. Turpis egestas integer eget aliquet nibh. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Diam vel quam elementum pulvinar etiam. Et malesuada fames ac turpis egestas sed tempus. Viverra accumsan in nisl nisi scelerisque eu ultrices. Vel facilisis volutpat est velit egestas dui id ornare arcu. Eget velit aliquet sagittis id consectetur purus. Ultricies mi quis hendrerit dolor magna eget. In eu mi bibendum neque. Porttitor eget dolor morbi non arcu risus quis. Faucibus nisl tincidunt eget nullam non nisi est sit. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Imperdiet massa tincidunt nunc pulvinar sapien. Sit amet purus gravida quis blandit turpis cursus in. Donec massa sapien faucibus et molestie ac. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Faucibus vitae aliquet nec ullamcorper sit amet.</p>
          <p>Aliquam sem et tortor consequat id. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Potenti nullam ac tortor vitae purus faucibus. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. A iaculis at erat pellentesque adipiscing commodo elit at. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Dis parturient montes nascetur ridiculus mus mauris. Vitae proin sagittis nisl rhoncus mattis rhoncus. Turpis egestas pretium aenean pharetra magna. Auctor urna nunc id cursus metus. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Pretium aenean pharetra magna ac placerat vestibulum. Morbi tristique senectus et netus et malesuada fames. Nibh praesent tristique magna sit amet purus. Ut ornare lectus sit amet est.</p>
          <p>Semper eget duis at tellus at urna condimentum. Aliquam id diam maecenas ultricies mi. Fringilla urna porttitor rhoncus dolor purus non. Aliquet risus feugiat in ante. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Sociis natoque penatibus et magnis dis parturient. Aliquet bibendum enim facilisis gravida neque convallis. Eleifend donec pretium vulputate sapien nec sagittis. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Dictum fusce ut placerat orci nulla. Donec ultrices tincidunt arcu non sodales neque. Leo urna molestie at elementum. Varius quam quisque id diam. Adipiscing enim eu turpis egestas. Gravida quis blandit turpis cursus in hac habitasse. Lobortis feugiat vivamus at augue. Cras adipiscing enim eu turpis egestas pretium aenean.</p>

          <p>Interdum velit laoreet id donec ultrices tincidunt arcu. Phasellus vestibulum lorem sed risus ultricies tristique. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Ut porttitor leo a diam. Ac ut consequat semper viverra. Tellus pellentesque eu tincidunt tortor. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Senectus et netus et malesuada. Fermentum posuere urna nec tincidunt praesent semper feugiat. Diam maecenas sed enim ut sem viverra aliquet. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. A diam maecenas sed enim ut sem viverra. Sed libero enim sed faucibus. Eros in cursus turpis massa tincidunt dui ut. Porttitor eget dolor morbi non arcu risus quis varius. Pharetra massa massa ultricies mi quis hendrerit dolor.</p>

          <p>Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Orci phasellus egestas tellus rutrum. Est ultricies integer quis auctor. Non odio euismod lacinia at quis risus sed vulputate. Penatibus et magnis dis parturient montes nascetur. Adipiscing commodo elit at imperdiet dui. Ornare lectus sit amet est. Ornare arcu odio ut sem nulla pharetra diam sit. Phasellus egestas tellus rutrum tellus. Fames ac turpis egestas sed tempus urna et. Magna etiam tempor orci eu lobortis.</p>
        </div>
      </div>
      <div id="guide" v-if="currPage == 'guide'">
        <div style="border: 1px solid black; background-color: white; padding: 5px;">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut. Turpis egestas integer eget aliquet nibh. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Diam vel quam elementum pulvinar etiam. Et malesuada fames ac turpis egestas sed tempus. Viverra accumsan in nisl nisi scelerisque eu ultrices. Vel facilisis volutpat est velit egestas dui id ornare arcu. Eget velit aliquet sagittis id consectetur purus. Ultricies mi quis hendrerit dolor magna eget. In eu mi bibendum neque. Porttitor eget dolor morbi non arcu risus quis. Faucibus nisl tincidunt eget nullam non nisi est sit. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Imperdiet massa tincidunt nunc pulvinar sapien. Sit amet purus gravida quis blandit turpis cursus in. Donec massa sapien faucibus et molestie ac. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Faucibus vitae aliquet nec ullamcorper sit amet.</p>
          <p>Aliquam sem et tortor consequat id. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Potenti nullam ac tortor vitae purus faucibus. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. A iaculis at erat pellentesque adipiscing commodo elit at. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Dis parturient montes nascetur ridiculus mus mauris. Vitae proin sagittis nisl rhoncus mattis rhoncus. Turpis egestas pretium aenean pharetra magna. Auctor urna nunc id cursus metus. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Pretium aenean pharetra magna ac placerat vestibulum. Morbi tristique senectus et netus et malesuada fames. Nibh praesent tristique magna sit amet purus. Ut ornare lectus sit amet est.</p>
          <p>Semper eget duis at tellus at urna condimentum. Aliquam id diam maecenas ultricies mi. Fringilla urna porttitor rhoncus dolor purus non. Aliquet risus feugiat in ante. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Sociis natoque penatibus et magnis dis parturient. Aliquet bibendum enim facilisis gravida neque convallis. Eleifend donec pretium vulputate sapien nec sagittis. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Dictum fusce ut placerat orci nulla. Donec ultrices tincidunt arcu non sodales neque. Leo urna molestie at elementum. Varius quam quisque id diam. Adipiscing enim eu turpis egestas. Gravida quis blandit turpis cursus in hac habitasse. Lobortis feugiat vivamus at augue. Cras adipiscing enim eu turpis egestas pretium aenean.</p>

          <p>Interdum velit laoreet id donec ultrices tincidunt arcu. Phasellus vestibulum lorem sed risus ultricies tristique. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Ut porttitor leo a diam. Ac ut consequat semper viverra. Tellus pellentesque eu tincidunt tortor. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Senectus et netus et malesuada. Fermentum posuere urna nec tincidunt praesent semper feugiat. Diam maecenas sed enim ut sem viverra aliquet. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. A diam maecenas sed enim ut sem viverra. Sed libero enim sed faucibus. Eros in cursus turpis massa tincidunt dui ut. Porttitor eget dolor morbi non arcu risus quis varius. Pharetra massa massa ultricies mi quis hendrerit dolor.</p>

          <p>Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Orci phasellus egestas tellus rutrum. Est ultricies integer quis auctor. Non odio euismod lacinia at quis risus sed vulputate. Penatibus et magnis dis parturient montes nascetur. Adipiscing commodo elit at imperdiet dui. Ornare lectus sit amet est. Ornare arcu odio ut sem nulla pharetra diam sit. Phasellus egestas tellus rutrum tellus. Fames ac turpis egestas sed tempus urna et. Magna etiam tempor orci eu lobortis.</p>
        </div>
      </div>
    </div>
    <div style="flex-grow: 9;"></div>
    <footer id="footer">
      <p style="display:block; padding-right: 5px;">contact?</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  // components: {
  //   HelloWorld
  // },

  el: "#app",
  data: function() {
    return {
      loggedin: false,
      currUser: "",
      currPage: "content",
      hideLogin: true,
      hideSettings: true,
      loginmode: "login",
      currentType: "type1", // user's choice should be here
      username: "",
      password: "",
      buttons: ["type1", "type2"],
      tempLorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Eu ultrices vitae auctor eu augue ut lectus arcu. Nulla facilisi nullam vehicula ipsum a arcu cursus. Donec ac odio tempor orci. Vulputate ut pharetra sit amet. Purus sit amet luctus venenatis lectus. Arcu dictum varius duis at consectetur lorem donec. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Maecenas pharetra convallis posuere morbi leo. Velit dignissim sodales ut eu. Nam libero justo laoreet sit amet cursus sit amet.",
      content: [
        {
          title: "test1",
          type: "type1",
          count: 1
        },
        {
          title: "test2",
          type: "type1",
          count: 2
        },
        {
          title: "test3",
          type: "type1",
          count: 3
        },
        {
          title: "test4",
          type: "type1",
          count: 4
        },
        {
          title: "test5",
          type: "type1",
          count: 5
        },
        {
          title: "test6",
          type: "type2",
          count: 1
        },
        {
          title: "test7",
          type: "type2",
          count: 2
        },
        {
          title: "test8",
          type: "type2",
          count: 3
        },
        {
          title: "test9",
          type: "type2",
          count: 4
        },
        {
          title: "test10",
          type: "type2",
          count: 5
        }
      ],
      onDisplay: [],
      settings: {
        name: "",
        notifType: "",
        qty: "",
        email: "",
        phoneNo: ""
      }
    };
  },

  methods: {
    updateType(newType) {
      this.currentType = newType;
      //console.log(newType);
      this.onDisplay = this.content.filter(c => c.type == this.currentType);
      // sorts by count desc
      this.onDisplay.sort((a, b) => b.count - a.count);
    },
    updateLoginDisplay() {
      this.hideSettings = true;
      this.hideLogin = !this.hideLogin;
    },
    wipLogin() {
      this.loggedin = true;
      this.currUser = this.username;
      this.hideLogin = true;
    },
    toggleSettings() {
      this.hideLogin = true;
      this.hideSettings = !this.hideSettings;
    }
  },
  beforeMount() {
    this.updateType("type1");
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Gayathri|Montserrat&display=swap');
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
/* } */
body{
    font-family: 'Montserrat', sans-serif;
    margin:0;
    background-color: #FF9900;
    display: flex;
    flex-direction: column;
    height: 100vh;
}

#header{
    //background-color: #DB2B39;
    background-color: #000000;
    color: white;
    text-transform: uppercase;
    padding: 5px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    //justify-content: center;
    align-items: center;
    max-width: 100%;
    margin-bottom:10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.692);
}

h2, h3, h1{
    display:block;
}


#allthecards{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

}

#allthebuttons{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
    

}

#allthebuttons > button{
    border: 1px solid black;
    margin: 5px;
    font-size: 1.2em;
    border-radius:5px;
    transition: .3s;
}


.card{
    margin: 5px;
    //border: 1px solid grey;
    padding: 10px;
    background-color:white;
    //height:250px;
    width: 400px;
    //box-shadow: 0 0 5px;
    box-shadow: 3px 3px 5px;
    display: flex;
    flex-direction: column;

}

.activeType{
    background-color: black;
    color:white;
}

#login-signup, #settings{
    margin: 10px;
    background-color: antiquewhite;
    width:300px;
    position: absolute;
    right: 0;
    padding: 15px;
    border-radius:5px;
    box-shadow: 0 0 5px;
}

.disappear{
    display:none;
}

label{
    display:inline-block;
    width: 100px;
    text-align: right;
    padding: 5px;
}

input{
    width: 150px;
}

#allthebuttons > button:hover{
    background-color: grey;
    
}

.activeType:hover {
    background-color:#DB2B39
    /* //background-color: black; */
}

h3:hover{
    color: #FF9900;
}

button:hover, h3:hover, #restOfHeader > img:hover{
    cursor: pointer;

}

#restOfHeader > img{
    transition: .3s;
}

#restOfHeader > img:hover{
    transform: rotate(360deg);
    
}
button{
    border: 1px solid black;
}

#restOfHeader{
    justify-content:flex-end;
}

#about, #guide{
    margin: 5px;
}

.link1{
    color:blue; 
    text-decoration:underline;
    cursor:pointer;
}
.link1:hover{
    color: darkblue;
}

@media only screen and (max-width: 580px){
    #header{
        justify-content: center;

    }
    #restOfHeader{
        justify-content:center;
    }
    .card{
        width: 80%;
    }

}

#footer{
    background-color: black;
    margin: 0;
    color: white;
    padding: 0;
    padding-top: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    min-width: 100%;
    align-self: flex-end;

}


</style>

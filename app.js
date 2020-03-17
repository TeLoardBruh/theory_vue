
var vm1 = new Vue({
  el: '#app_1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

// if using multiple instance can but only can be access that instance.
// to connect the difference id vue tgt is to declare and then just called them like vm1 or vm2 for example
var vm2 = new Vue({
  el:'#app_2',
  data:{
    title: 'second instance'
  },
  methods:{
    // trying to connect function to change something in the app_1
    onChange: function(){
      vm1.title = 'from app_2 change app_1';
      // this is how to get value from the DOM
      console.log(this.$refs.heading.innerText);
    }
  }
})

// mouting is working as el it is best for usinng as pom for the app 
// vm1.$mount('#app_1) for example
console.log(vm2.$refs.heading.innerText);

var vm3 = new Vue({
  template: '<h1>Hello world</h1>'
})


// componets create is to use later 
vm3.$mount('#app_3');

Vue.component('my-com', {
  data:function(){
    return{
     message: 'Hello Vue.js!'
    }
  },
  template: '<li>{{message}}</li>'
})
new Vue({
  el:'#app_component',
  })
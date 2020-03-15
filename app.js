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
      vm1.title = 'from app_2 change app_1'
    }
  }
})
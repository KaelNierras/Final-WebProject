const app = Vue.createApp({
    data() {
        return{
            Name: "BRESA",
            Subtitle: 'SALES AND INVENTORY SYSTEM',
            formData: {
                username: '',
                password: ''
              },
            errorMessage: ''

        }
    },

    methods: {
        login() {
            if (this.formData.username === 'admin' && this.formData.password === 'password') {
                
            } else {
                this.errorMessage = "Error: Invalid data entry"
            }
        }
      }

})


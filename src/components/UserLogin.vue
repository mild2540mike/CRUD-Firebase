<template>
<div id="login">
    <h1>Login</h1>
    <button class="btn btn-secondary btn-lg" type="button" v-on:click="ModolsLogins()">Login</button>
</div>
</template>

<script>
import {
    db
} from "../firebaseDb";
import Swal from 'sweetalert2';

export default {
    name: 'Login',
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        async ModolsLogins() {
            const ipAPI = '//api.ipify.org?format=json'

            const inputValue = fetch(ipAPI)
                .then(response => response.json())
                .then(data => data.ip)

            const {
                value: ipAddress
            } = await Swal.fire({
                title: 'Enter your IP address',
                input: 'text',
                inputLabel: 'Your IP address',
                inputValue: inputValue,
                showCancelButton: true,
                inputValidator: (value) => {
                    if (!value) {
                        return 'You need to write something!'
                    }
                }
            })

            if (ipAddress == '124.120.25.218') {
                console.log(ipAddress)
                Swal.fire(
                    'Your IP address is!',
                    `${ipAddress}`,
                    'success',
                    this.$router.push("/views")
                )
                // Save data to sessionStorage
                sessionStorage.setItem('ipAddress', ipAddress);
            } else if (ipAddress != undefined) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong your IP address is not contains!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        },
    }
}
</script>

<style scoped>
#login {
    width: 500px;
    border: 1px solid #CCCCCC;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 200px;
    padding: 20px;
}
</style>

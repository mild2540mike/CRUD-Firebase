<style>
.grab-row-customize {
    margin-top: 10px;
}
</style>

<template>
<div class="row justify-content-center">
    <div class="col-md-5">
        <h3 class="text-center">Add User</h3>
        <form @submit.prevent="onFormSubmit">
            <div class="form-group">
                <label>Name</label>
                <input ref="name" type="text" class="form-control" v-model="user.name" required />
            </div>

            <div class="form-group">
                <label>Email</label>
                <input ref="email" type="text" class="form-control" v-model="user.email" required />
            </div>

            <div class="form-group">
                <label>Phone</label>
                <input ref="phone" type="text" class="form-control" v-model="user.phone" required />
            </div>

            <div class="col-12 grab-row-customize">
                <button class="btn btn-primary btn-block btn-group-sm btn-sm">Add User</button>
                <button v-on:click="created()" class="btn btn-success btn-block btn-group-sm btn-sm">Generate User</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import {
    db
} from "../firebaseDb";
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            user: {},
        };
    },
    methods: {
        async onFormSubmit(event) {
            event.preventDefault();
            db.collection("users")
                .add(this.user,
                    console.log(this.user)

                )
                .then(() => {
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                    )
                    this.user.name = "";
                    this.user.email = "";
                    this.user.phone = "";
                    this.$router.push("/views");

                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async created() {
            const response = await fetch('https://randomuser.me/api/', {
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            });
            const data = await response.json();
            this.$refs.name.value = data.results[0].name.first,
                this.$refs.email.value = data.results[0].email,
                this.$refs.phone.value = data.results[0].phone
        }
    },
};
</script>

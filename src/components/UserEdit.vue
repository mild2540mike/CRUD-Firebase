<style>
.grab-row-customize {
    margin-top: 10px;
}
</style>
<template>
<div class="row justify-content-center">
    <div class="col-md-5">
        <h3 class="text-center">Update User</h3>
        <form @submit.prevent="onUpdateForm">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model="user.name" required />
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" v-model="user.email" required />
            </div>

            <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" v-model="user.phone" required />
            </div>

            <div class="form-group grab-row-customize">
                <button class="btn btn-primary btn-block btn-sm">Update</button>
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
    created() {
        let dbRef = db.collection("users").doc(this.$route.params.id);
        dbRef
            .get()
            .then((doc) => {
                this.user = doc.data();
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        onUpdateForm(event) {
            event.preventDefault();
            db.collection("users")
                .doc(this.$route.params.id)
                .update(this.user)
                .then(() => {
                    Swal.fire(
                        'Good job!',
                        'User successfully updated!',
                        'success'
                    )
                    this.$router.push("/views");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>

<template>
<div class="row">
    <div class="col-md-12">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in Users" :key="user.key">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>
                        <router-link :to="{ name: 'edit', params: { id: user.key } }" class="btn btn-primary">Edit
                        </router-link>
                        <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
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
            Users: [],
        };
    },
    created() {
        db.collection("users").onSnapshot((snapshotChange) => {
            this.Users = [];
            snapshotChange.forEach((doc) => {
                this.Users.push({
                    key: doc.id,
                    name: doc.data().name,
                    email: doc.data().email,
                    phone: doc.data().phone,
                });
            });
        });
    },
    methods: {
        deleteUser(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    db.collection("users")
                    .doc(id)
                    .delete()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
        },
    },

};
</script>

<style>
.btn-primary {
    margin-right: 12px;
}
</style>

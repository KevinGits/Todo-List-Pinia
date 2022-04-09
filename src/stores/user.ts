import { defineStore } from 'pinia';
import axios from 'axios';


type Fields = {
    fields: User;
};

type User = {
    Name: string;
    Status: string;
    Label: string;
};

type UserState = {
    users: Fields[];
};

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        users: [],
    }),
    getters: {},
    actions: {
        async getAllUsers() {
            axios.get('https://api.airtable.com/v0/appvuJz7kvOvAkXJN/User?api_key=keyUAG4QOjiIN55bf')
                .then((res: any) => {
                    console.log(res)
                    this.users = res.data.records;
                });
            // const res = await axios.get('/users');
            // this.users = res.data;
        },
    },
});
import {USERS} from "./Users"

export const POSTS = [
    {
        imageUrl: "https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?w=191&h=191&c=7&r=0&o=5&pid=1.7",

        user:USERS[0].user,
        likes:7870,
        caption: "Train Ride to Haogwarts.Wow! This build looks fire.Super excited about",
        profile_picture: USERS[0].image,
        comments:[
            // {
            //     user: "abc",
            //     comment: "Wow! This build looks fire.Super excited about"
            // },
            // {
            //     user: "xyz",
            //     comment: "Wow! This build looks fire.Super excited about"
            // }
        ]
    },

    {
        imageUrl:"https://th.bing.com/th/id/OIP.jnieQvL1DtS8DEIMHGXQ8AHaLH?w=120&h=180&c=7&r=0&o=5&pid=1.7",

        user:USERS[1].user,
        likes:7870,
        caption: "Train Ride to Haogwarts.Wow! This build looks fire.Super excited about",
        profile_picture: USERS[1].image,
        comments:[
            // {
            //     user: "abc",
            //     comments: "Wow! This build looks fire.Super excited about"
            // },
            {
                user: "xyz",
                comment: " Wow! This build looks fire.Super excited about"
            }
        ]
    },

    {
        imageUrl:"https://th.bing.com/th/id/OIP.GplaZl0u2eyTdwAqvbsl_AHaF7?w=269&h=215&c=7&r=0&o=5&pid=1.7",

        user:USERS[2].user,
        likes:7870,
        caption: "Train Ride to Haogwarts.Wow! This build looks fire.Super excited about Wow! This build looks fire.Super excited about",
        profile_picture: USERS[2].image,
        comments:[
            {
                user: "abc",
                comment: "Wow! This build looks fire.Super excited about"
            },
            {
                user: "xyz",
                comment: "Wow! This build looks fire.Super excited about"
            }
        ]
    }
]
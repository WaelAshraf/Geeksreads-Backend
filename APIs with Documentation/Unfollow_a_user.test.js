const unfollowuser=require('./Unfollow_a_user');

//test calling fn to make user with id 5c9132ddac2fc196bc685ce0 unfollow 5c9132dd1c3703bfad757ce4
test('Adding Follow Should return true',()=> {
    expect(unfollowuser("5c9132ddac2fc196bc685ce0","5c9132dd1c3703bfad757ce4)")).toBeTruthy();
})
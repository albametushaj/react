module.exports = (app)=>{
    app.get('/admin', (req, res)=>{
        console.log(req.user);
        // admin dashboard
        res.redirect('/admin/dashboard');
    });

    // app.get('/auth/google/callback', passport.authenticate('google'), (req, res)=>{
    //     console.log(req.user)
    //     res.redirect('/');
    // });
    //
    // app.get('/api/logout', (req, res)=>{
    //     req.logout();
    //     res.redirect('/');
    // })
    //
    // app.get('/api/current_user', (req, res)=>{
    //     res.send(req.user);
    // })
}
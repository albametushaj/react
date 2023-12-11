const passport = require("passport");

module.exports = (app)=>{
    app.get('/auth/google',
        passport.authenticate('google',{
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res)=>{
        console.log(req.user)
        if(req.user && req.user.email === 'albametushaj99@gmail.com')
            res.redirect('/admin/dashboard');
        else
            res.redirect('/');
    });

    app.get('/api/logout', (req, res)=>{
        req.logout();
        res.redirect('/');
    })

    app.get('/api/current_user', (req, res)=>{
        res.send(req.user);
    })
}